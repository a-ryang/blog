---
title: "Next.js 공식 문서 정리"
summary: ""
tags: ["NextJS"]
datetime: "2024-03-06T00:00:00.000Z"
isPublished: true
---

## React Foundations

> https://nextjs.org/learn/react-foundations

### 1장 React와 Next.js에 대하여

React - 대화형 사용자 인터페이스(interactive user interfaces)를 만들기 위한 JavaScript 라이브러리

Next.js - 빠른 풀 스택 웹 어플리케이션을 만들 수 있게 구성(기본) 요소를 제공하는 React 프레임워크

React를 사용하여 UI를 만들고 Next.js의 기능을 도입하여 라우팅, 데이터 페칭, 캐싱 같은 애플리케이션의 요구사항을 해결하여 개발자와 사용자의 경험을 개선시킬 수 있다.

### 2장 UI 렌더링

React의 동작 방식을 이해하려면 먼저 브라우저가 UI를 생성(렌더링)하기 위해 코드를 해석하는 방법을 알아야 한다.

1. 웹페이지를 방문하면 서버는 HTML 파일을 브라우저에 반환한다.
2. 브라우저는 HTML을 읽고 [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)을 구성한다.

![image](https://github.com/a-ryang/blog/assets/105474635/b207489c-7af5-4c40-bea9-44ea82d2fac3)

DOM은 HTML 요소를 객체화 한 것이다.
코드와 UI 사이의 다리 역할을 하며 Tree 같은 구조를 갖는다.

JavaScript와 DOM 메소드를 사용하여 할 수 있는 일은

- 사용자 이벤트를 수신
- UI의 특정 요소를 선택, 추가, 업데이트, 삭제하여 DOM을 조작
- DOM 조작을 통해 특정 요소 타겟팅
- 스타일과 콘텐츠 변경

### 2장 JavaScript로 UI 업데이트

JavaScript 및 DOM 메서드 사용해보기

```html
<html>
  <body>
    <div id="app"></div>
    <script type="text/javascript">
      document.getElementById("app"); // div 요소 선택

      document.createElement("h1"); // H1 요소 생성

      const text = "Develop. Preview. Ship.";
      const headerContent = document.createTextNode(text); // H1 요소를 위한 text 노드 생성

      header.appendChild(headerContent); // H1 요소에 text 추가

      app.appendChild(header); // div 안에 H1 요소를 추가
    </script>
  </body>
</html>
```

- JavaScript로 DOM을 업데이트하는 것은 코드가 장황하다.
- 앱이나 팀의 규모가 커질 수록 이런 방식으로 구현하는 난이도가 어려워질 수 있다.

위 코드처럼 방법에 대한 단계를 작성하는 것을 `명령형 프로그래밍`이라 한다.

DOM 메서드를 작성하는 대신 표시하려는 내용을 선언할 수 있다면 도움이 될 것이다.
선언형 라이브러리인 React를 사용해보자.

> 명령형: 반죽을 만들고, 반죽을 밀고, 토마토 소스를 넣고, 치즈를 넣고, 햄을 넣고, 파인애플을 넣고, 가마에 200도 구워서...
>
> 선언형 : 하와이안 피자 주세요

### 4장 React 시작하기

- `react` 핵심 React 라이브러리
- `react-DOM` DOM과 함께 React를 사용할 수 있도록 하는 DOM 관련 메서드를 제공
- `JSX`는 HTML로 UI를 설명할 수 있는 JavaScript의 구문 확장. 브라우저는 JSX를 이해하지 못하므로 Babel같은 컴파일러로 JSX 코드를 JavaScript 코드로 변환하여 사용해야 한다.

### 5장 컴포넌트를 이용한 UI 만들기

React의 핵심 개념 3개:

- Components
- Props
- State

Components

사용자 인터페이스는 컴포넌트라고 하는 작은 블록으로 나눌 수 있다.
컴포넌트를 사용하면 독립적이고 재사용 가능한 코드 조각을 작성할 수 있다.
이런 모듈성을 통해 코드를 더 쉽게 관리할 수 있다.

![image](https://github.com/a-ryang/blog/assets/105474635/0e5fb88e-6ef9-4df0-88c9-0305439950a0)

### 6장 속성으로 데이터 표시하기

React 컴포넌트에 정보 전달은 Props로 할 수 있다.

```js
function Header(props) {
  return <h1>{props.title}</h1>;
}
```

### 7장 상태와 상호작용 추가

React의 이벤트 핸들러:

```js
function HomePage() {
  // 이벤트 처리 함수
  function handleClick() {
    console.log("increment like count");
  }

  return (
    <div>
      {/* 이벤트 리스너 */}
      <button onClick={handleClick}>Like</button>
    </div>
  );
}
```

React는 `hooks`라는 함수들이 있다. 이 hooks를 사용하여 상태 `state`같은 추가 로직을 컴포넌트에 추가할 수 있다.

`state`는 시간이 지남에 따라 변경되는 UI의 정보로 생각하면 된다.

```js
function HomePage() {
  const [likes, setLikes] = React.useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Likes ({likes})</button>
    </div>
  );
}
```

props VS state:

- props는 컴포넌트에 전달되는 읽기 전용 정보
- state는 시간이 지남에 따라 변경될 수 있는 정보. 일반적으로 사용자 상호 작용에 의해 트리거 된다.
