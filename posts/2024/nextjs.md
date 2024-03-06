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
