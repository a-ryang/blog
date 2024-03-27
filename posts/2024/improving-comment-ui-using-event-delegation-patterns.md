---
title: "이벤트 위임 패턴을 사용하여 동적인 댓글 UI 처리 개선하기"
summary: "버블링을 이용하여 이벤트 처리하기"
tags: ["DOM", "frontend"]
datetime: "2024-03-27T00:00:00.000Z"
isPublished: true
---

오랜만에 DOM을 사용하니 잊고 있었던 이벤트 위임 패턴에 대해 정리

## 문제상황

![comment](https://github.com/a-ryang/blog/assets/105474635/c8abceba-8f7a-4232-9139-615112939c30)

댓글 섹션에서 댓글의 '답글 달기' 버튼을 클릭하여 답글 폼을 표시하거나 끄는 토글 기능을 구현하고 있었다.

구현 초기에서는 각 댓글의 '답글 달기'와 '취소' 버튼에 직접 이벤트 핸들러를 달았었다.

```js
// 답글 달기 버튼 목록
const commentReplyBtnList = document.querySelectorAll(".comment-reply-btn");

if (commentReplyBtnList) {
  commentReplyBtnList.forEach((btn) => {
    btn.addEventListener("click", replyToCommentBtnClickHandler);
  });
}

// 답글 form을 보이게 처리
function replyToCommentBtnClickHandler(e) {
  const comment = e.target.closest(".comment");
  const replyForm = comment.querySelector(".reply-form");
  replyForm.classList.remove("d:none");
}
```

문제는 DOM을 통해 동적으로 추가된 댓글 요소에 이벤트 핸들러가 자동으로 연결되지 않기 때문에, 동적으로 추가된 (새로운 등록된 댓글) 요소는 '답글 달기' 버튼이 반응이 없다.

매번 새 댓글이 추가될 때마다 해당 요소에 이벤트 핸들러를 부착해야 하나 고민했지만, 이 방법은 처리가 번거롭고 코드의 복잡성을 증가시켰다.

## 해결 방법

[모던 JavaScript 튜토리얼](https://ko.javascript.info)를 둘러보다 잊고 있던 이벤트 위임(event-delegation) 패턴을 발견하고 이를 적용하여 문제를 해결했다.

> https://ko.javascript.info/event-delegation
>
> 이벤트 위임을 사용하면 요소마다 핸들러를 할당하지 않고, 요소의 공통 조상에 이벤트 핸들러를 단 하나만 할당해도 여러 요소를 한꺼번에 다룰 수 있습니다.

> https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks/Events
>
> - 부모 요소를 가지고 있는 요소에서 이벤트가 발생되었을 때 현대의 브라우저들은 두 가지 다른 단계(phase)를 실행합니다 — 캡처링(capturing) 단계와 버블링(bubbling) 단계입니다.
> - 버블링 단계에서는, 브라우저는 선택된 요소가 버블링 단계에 대해 그것에 등록된 이벤트 핸들러를 가지고 있는지 확인하기 위해 검사하고, 만약 그렇다면 실행합니다.
> - 그리고서 그것은 바로 다음의 조상 요소로 이동하고 같은 일을 하고, 그리고서 그 다음 요소로 이동하고, <html> 요소에 닿을 때까지 계속합니다.

즉, 이벤트는 발생한 요소에서 상위 요소로 버블링되기 때문에, 이 특성을 이용해 상위 요소에서 일관적으로 이벤트를 관리 할 수 있다.

```js
// 이벤트를 받아 처리할 상위의 부모 요소
const commentSection = document.getElementById("comment");

commentSection.addEventListener("click", function (e) {
  if (target.classList.contains("comment-reply-btn")) {
    const comment = target.closest(".comment");
    const replyForm = comment.querySelector(".reply-form");
    replyForm.classList.toggle("d:none");
    return;
  }
});
```

이제 동적으로 생성된 댓글 요소들에 대한 이벤트 처리가 가능해졌고, 코드도 간결해졌다.

## 정리

**버블링**

이벤트가 발생한 요소에 핸들러가 동작하고, 최상단 요소`(html)`를 만날 때까지 부모로 전파되어 각 요소마다 핸들러가 동작

**이벤트 위임으로 얻은 장점**

각 요소마다 이벤트를 반복문으로 할당하는 번거로움이 사라졌다.

덕분에 코드가 단순해지고, 반복되는 할당 작업이 없어 메모리가 절약된다.
