---
title: "[react] 한글 입력 엔터키 처리하기"
excerpt: "input에 한글 입력 중 엔터키를 누르면 value가 남아있는 건에 대하여"
thumbnail: "/images/blog/thumbnail/react.png"
date: "2023-07-11T12:14:00.000Z"
author: "a-ryang"
tags: ["react", "링클라우드"]
---

## 이슈

리액트 공부 사이드 프로젝트 [🔗링클라우드](https://linklkoud.io)에서 지인분께서 버그를 하나 찾아주었습니다.

![버그](/images/blog/react-handle-input-event-with-ime/01.gif)

위 이미지는 링크 게시글을 등록하는 화면인데요.

사용자가 게시글의 태그를 등록하는 `input` 요소에 한글을 입력하는 도중에 엔터키를 누르면, 마지막 글자가 `input` 요소에 남아있는 현상이었습니다.

직접 확인해보니 영어나 숫자에서는 발생하지 않고 한글에서만 나타났습니다.

## 원인

이 문제는 한글 입력 방식에 사용되는 `IME`와 관련이 있었습니다.

### IME

[🔗 위키백과 - Input method](https://en.wikipedia.org/wiki/Input_method)

> An input method (or input method editor, commonly abbreviated IME) is an operating system component or program that enables users to generate characters not natively available on their input devices by using sequences of characters (or mouse operations) that are available to them. Using an input method is usually necessary for languages that have more graphemes than there are keys on the keyboard.

IME는 한글, 일본어, 중국어 같이 여러 키의 조합으로 문자를 입력하는 언어에서 사용됩니다.

예를 들어, '블로그'라는 단어의 '블'을 입력하려면 'ㅂ', 'ㅡ', 'ㄹ'의 키를 순서대로 누르게 됩니다.

이 과정에서 IME가 각 키 입력을 받아 문자를 완성시킵니다.

문제는 엔터키를 눌렀을때, IME가 조합한 문자가 완성되었는지 확인하는 것을 OS와 브라우저가 중복해서 처리하는 것입니다.

> 브라우저/OS 환경마다 달라 Mac + 크롬에서는 문제가 있었으나 Mac + 사파리, 윈도우에서는 발생하지 않았습니다.

## 해결방안

Web API의 [isComposing](https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/isComposing) 프로퍼티를 사용하여 해결했습니다.

> The InputEvent.isComposing read-only property returns a boolean value indicating if the event is fired after compositionstart and before compositionend.

`isComposing`는 IME로 문자를 조합 중인지 boolean 값으로 반환합니다.
즉, 한글 문자 입력을 시작하면 compositionstart가 발생하여 true를, 한글 문자 입력을 마치면 compositionend가 발생하여 false를 반환해줍니다.

기존의 코드는 다음과 같습니다.

```ts
const handleTagInputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === "Enter" && e.currentTarget.id === "tag") {
    e.preventDefault();
    handleAddTag(); // handleAddTag는 input의 value를 빈 문자열로 바꾸는 코드가 있습니다.
  }
};
```

`isComposing`를 로그로 한글 입력 도중 엔터를 확인해보면 이벤트가 두번 발생되며 true, false를 반환해줍니다.

```ts
const handleTagInputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
  console.log("is composing : ", e.nativeEvent.isComposing);
  if (e.key === "Enter" && e.currentTarget.id === "tag") {
    e.preventDefault();
    handleAddTag();
  }
};
```

![isComposing 확인](/images/blog/react-handle-input-event-with-ime/02.gif)

따라서 문자가 완성된 시점인 '`isComposing`가 true일 때' 조건문에 추가하여 해결했습니다.
isComposing은 리액트 이벤트 객체([SyntheticEvent](https://react.dev/reference/react-dom/components/common#react-event-object))에 없기 때문에 nativeEvent을 통해 접근해야했습니다.

```ts
const handleTagInputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (
    e.key === "Enter" &&
    e.currentTarget.id === "tag" &&
    e.nativeEvent.isComposing === false
  ) {
    e.preventDefault();
    handleAddTag();
  }
};
```

![isComposing로 해결](/images/blog/react-handle-input-event-with-ime/03.gif)

## 참고

[Korean input trigger keydown event twice - vuejs issue#10277](https://github.com/vuejs/vue/issues/10277)

[Understanding Composition Browser Events - developer.squareup.com](https://developer.squareup.com/blog/understanding-composition-browser-events/)
