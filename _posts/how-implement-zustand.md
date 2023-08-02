---
title: zustand를 구현하며 상태관리 이해도 높이기
excerpt: "내부동작 좀 알고 써라"
thumbnail: "/images/blog/thumbnail/zustand.jpg"
date: "2023-07-29T12:03:00.000Z"
updatedAt: "2023-08-02"
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

발행-구독 패턴은 앞에서 말했듯이 옵저버 패턴의 확장으로 볼 수 있다.

발행자와 구독자(관찰자) 사이에 중개자 역할을 해주는 `메세지 브로커`(또는 이벤트 버스)가 추가된다.

이 브로커 덕분에 발행자와 구독자(관찰자) 사이에 결합도를 낮출 수 있게 된다.

1. 발행자 (publisher 또는 subject)

- 상태를 가지고 있는 객체.
- 구독자에게 직접 메세지를 보내지 않는다.
- 상태가 변경될 때마다 메세지를 브로커에게 보낸다.

```js
class Publisher {
  constructor(broker) {
    this.broker = broker;
  }

  publish(message) {
    this.broker.publish(message);
  }
}
```

2. 메세지 브로커 (message broker 또는 event channel)

- 발행자와 구독자 사이에서 중개 역할을 한다.
- 발행자의 메세지를 관찰자에게 전달하고, 관찰자의 구독 정보를 관리한다.

```js
class Broker {
  constructor() {
    this.subscribers = []; // 또는 this.observers
  }

  addSubscriber(subscriber) {
    this.subscribers.push(subscriber);
  }

  publish(message) {
    this.subscribers.forEach((subscriber) => subscriber.update(message));
  }
}
```

3. 구독자 (subscriber 또는 observer)

- 브로커를 통해 메세지를 수신한다.

```js
class Subscriber {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`${this.name}님! 새로운 '${data}' 포스트가 올라왔어요`);
  }
}
```

```js
const 알림이 = new Broker();
const 뉴진스_공식계정 = new Publisher(알림이);
const 팬1 = new Subscriber("라이언");
const 팬2 = new Subscriber("어피치");

알림이.addSubscriber(팬1);
알림이.addSubscriber(팬2);

뉴진스_공식계정.publish("안녕 버니즈~");

// 출력
// 라이언님! 새로운 '안녕 버니즈~' 포스트가 올라왔어요
// 어피치님! 새로운 '안녕 버니즈~' 포스트가 올라왔어요
```

발행자는 누가 구독자인지, 구독자가 어떤 메서드(인터페이스)를 가지고 있는지 알 필요가 없어졌다.
즉, 발행자와 구독자 사이에 결합도가 낮아졌다.

발행-구독 패턴까지 알아보았으니 이제 zustand를 뜯어보자.

## zustand vanilla

> 코드 : https://github.com/pmndrs/zustand/blob/main/src/vanilla.ts

zustand의 core 코드는 리액트 없이도 사용할 수 있다. 리액트 없이 zustand를 이용한 간단한 카운터 스토어 예시를 만들자.

> [react없이 zustand 사용하기 - zustand README.md](https://github.com/pmndrs/zustand/tree/main#using-zustand-without-react)

```ts
interface CounterStore {
  counts: number;
  increment: () => void;
}

const store = createStore<CounterStore>((set) => ({
  counts: 0,
  increment: () => set((state) => ({ counts: state.counts + 1 })),
}));
```

카운트 변수 `counts`와 이걸 증가시켜주는 함수 `increment`뿐인 단순한 코드다.

이제 `createStore`의 내부부터 따라가보자.

```js
const createStore = (createState) =>
  createState ? createStoreImpl(createState) : createStoreImpl;
```

`createStore`가 호출되면 인자로 넘어온 상태 초기화 함수`createState`를 받아 `createStoreImpl`을 호출하게 된다.

> 인자 createState를 넘기지 않고 호출하면 createStoreImpl 자체를 반환한다.

줄여서 다음과 같을 것이다.

```js
const createStore = (createState) => createStoreImpl(createState);

// createState는 createStore를 호출할 때 전달한 다음 함수다!
//  (set) => ({
//    counts: 0,
//    increment: () => set((state) => ({ counts: state.counts + 1 })),
//  })
```

createState의 타입은 `StateCreator`인데.. 아직 내 미천한 타입스크립트 능력으로 GPT를 이용해 필요한 내용만 요약해 봤다.

```ts
type StateCreator<T> = (
  setState: ..., // 상태를 변경하는 함수. 위에서 set으로 사용중
  getState: ..., // 현재 상태를 반환하는 함수
  store: ...     // 상태 관리 함수들을 포함하는 객체
) => T
```

이제 `createStoreImpl`을 보자.

```js
const createStoreImpl = (createState) => {
  let state; // (1)
  const listeners = new Set(); // (2)

  const setState = (partial, replace) => {
    // (3)
    // ...
  };

  const getState = () => state;

  const subscribe = (listener) => {
    // ...
  };

  const api = { setState, getState, subscribe, destroy }; // (4)
  state = createState(setState, getState, api); // (5)
  return api; //
};
```

- `(1)` 상태와 상태 관리 함수를 갖고 있을 변수. 클로저로 관리된다.
- `(2)` 상태 변경을 감지할 리스너들을 저장할 Set 객체. 즉, 관찰자/구독자들이다.
- `(3)` setState, getState, subscribe는 좀 뒤에서 본다.
- `(4)` 상태 변경, 상태 조회와 구독을 묶어둔 객체. `const store = createStore(...)`에서 store가 전달받게 된다.

```ts
const store = createStore<CounterStore>(...);
👇
const store = { setState, getState, subscribe, destroy };
```

> `destroy`는 deprecated 되었다.

- `(5)` `createState`를 호출하여 초기 상태를 설정한다.

맨 처음 전달한 상태 초기화 함수 `createStore`를 다시 보자.

```js
(set) => ({
  counts: 0,
  increment: () => set((state) => ({ counts: state.counts + 1 })),
});
```

위 함수에서 반환된 객체가 변수 `let state`에 저장`(5)`된다.

```js
state = {
  counts: 0,
  increment: () => set((state) => ({ counts: state.counts + 1 })),
};
```

### 참고

- [zustand](https://github.com/pmndrs/zustand)

- [Observer pattern - 위키](https://en.wikipedia.org/wiki/Observer_pattern)
- [React 상태 관리 라이브러리 Zustand의 코드를 파헤쳐보자 - ui.toast.com](https://ui.toast.com/posts/ko_20210812#react-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-zustand%EC%9D%98-%EC%BD%94%EB%93%9C%EB%A5%BC-%ED%8C%8C%ED%97%A4%EC%B3%90%EB%B3%B4%EC%9E%90)
- [Build your own Zustand! - rohitpotato.hashnode.dev](https://rohitpotato.hashnode.dev/build-your-own-zustand)
