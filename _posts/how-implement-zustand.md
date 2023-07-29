---
title: zustand를 구현하며 상태관리 이해도 높이기
excerpt: "내부동작 좀 알고 써라"
thumbnail: "/images/blog/thumbnail/zustand.jpg"
date: "2023-07-29T12:03:00.000Z"
updatedAt: "2023-07-29"
author: "a-ryang"
tags: ["zustand", "상태관리", "react", "디자인패턴"]
---

🚧 작성중

## 이슈

[Using zustand without react](https://docs.pmnd.rs/zustand/recipes/recipes#using-zustand-without-react)

프로젝트를 진행하던 도중, 리액트 환경 내부가 아닌 외부 라이브러리(axios 인터셉터)에서 zustand 스토어를 사용할 일이 있었다.

이 과정에서 리액트 외부에서도 상태를 제공해주는 zustand의 동작에 대해 궁금증이 생겼고, 내가 상태 관리, 디자인 패턴에 대한 지식이 부족한 것을 알게됐다.

이를 채우기 위해 zustand를 단계별로 구현하며 이해하려한다.

먼저 zustand에 사용되는 디자인 패턴 중 하나인 `발행-구독 패턴`에 대한 이해가 필요했다.

## 디자인 패턴

### 옵저버 패턴 Observer Pattern

발행-구독 패턴은 옵저버 패턴을 확장한 것으로 볼 수 있기 때문에, 먼저 옵저버 패턴을 알고가자.

**옵저버 패턴이란?**

한 객체의 상태가 변경 되면, 해당 객체를 의존(구독)하고 있는 모든 객체에게 변경을 알려주는 디자인 패턴이다.

다음 두가지 역할로 이루어져있다.

1. 발행자 (publisher 또는 subject)

- 상태를 가지고 있는 객체.
- 상태가 변경될 때마다 관찰자들에게 알린다.
- 관찰자를 추가하다, 관찰자를 제거하다, 관찰자들에게 알림을 보내다. 세가지 메서드를 가진다.

```js
class Publisher {
  constructor(name) {
    this.name = name;
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data) {
    this.observers.forEach((obs) => obs.update(data));
  }
}
```

2. 관찰자 (observer 또는 subscriber)

- 발행자의 상태 변화를 관찰하는 객체.
- 발행자의 상태가 변경될 때마다 알림을 받는다.

```js
class Observer {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    // do something
  }
}
```

일상속에서도 자주 접할 수 있는 패턴이다.

- 유튜브 : 발행자 - 구독한 채널, 관찰자 - 나
- SNS : 발행자 - 팔로우한 사용자, 관찰자 - 나

> 뉴진스 공식 SNS 계정을 팔로우한 두 명의 팬이 있다. 뉴진스 공식 계정이 새로운 포스트를 올리면 두 팬에게 알림이 갈 것이다.

```js
// class Publisher
  newPost(message) {
    this.observers.forEach((obs) => obs.update(message));
  }

// class Observer
update(message) {
  onsole.log(`${this.name}님! 새로운 '${message}' 포스트가 올라왔어요`);
}

```

```js
const 뉴진스_공식계정 = new Publisher("newjeans-official");
const 팬1 = new Observer("라이언");
const 팬2 = new Observer("어피치");

뉴진스_공식계정.addObserver(팬1);
뉴진스_공식계정.addObserver(팬2);

뉴진스_공식계정.newPost("안녕 버니즈~");

// 출력
// 라이언님! 새로운 '안녕 버니즈~' 포스트가 올라왔어요
// 어피치님! 새로운 '안녕 버니즈~' 포스트가 올라왔어요
```

또한 옵저버 패턴은 자바스크립트의 이벤트 핸들러에서도 사용되고 있다.

예를 들어 `addEventListener`로 클릭 등 특정 이벤트를 관찰(구독)하고, 해당 이벤트가 발생하면 콜백 함수를 실행한다.

그러나 옵저버 패턴은 발행자와 관찰자(구독자) 사이에 결합도가 높다는 단점이 있다.

관찰자가 특정한 발행자 객체에게 직접 등록되어야 하며, 발행자가 관찰자의 메서드를 직접 호출해야 한다.

따라서 발행자는 관찰자 누구인지와 인터페이스에 대해 구체적으로 알고있어야한다.

이를 해결하기 위해 옵저버 패턴을 확장한 발행-구독 패턴을 알아보자.

### 발행-구독 패턴 Pub-Sub Pattern

### 참고

[zustand](https://github.com/pmndrs/zustand)
[Observer pattern - 위키](https://en.wikipedia.org/wiki/Observer_pattern)
[React 상태 관리 라이브러리 Zustand의 코드를 파헤쳐보자 - ui.toast.com](https://ui.toast.com/posts/ko_20210812#react-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-zustand%EC%9D%98-%EC%BD%94%EB%93%9C%EB%A5%BC-%ED%8C%8C%ED%97%A4%EC%B3%90%EB%B3%B4%EC%9E%90)
[Build your own Zustand! - rohitpotato.hashnode.dev](https://rohitpotato.hashnode.dev/build-your-own-zustand)
