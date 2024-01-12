---
title: "SQL 첫걸음"
summary: "도파민 중독 해소 첫번째"
tags: ["책 읽기", "DB"]
datetime: "2024-01-11T21:18:40.142Z"
isPublished: false
---

> 김대리. 내가 감히 조언 하고 싶은것이 있읍니다. 너무 ORM? 사용 하지 마세요.

### 복수의 열을 지정해 정렬하기

1. 복수의 열을 지정하여 정렬하는 방법에 대해 알아보자.

```sql
SELECT 열명
FROM 테이블명
WHERE 조건식
ORDER BY 열명1 [ASC|DESC], 열명2 [ASC|DESC]...
```

데이터 구조가 복잡하거나 데이터양이 많을 경우 복수의 열을 사용하여 정렬하면 특정 행을 정확하게 특정할 수 있다.

예를 들어 '상품코드 + 해당 상품의 하위 번호' 등..

> a 열 -> b열로 정렬

```sql
SELECT *
FROM sample
ORDER BY a, b;
```

| a   | b   |
| --- | --- |
| 1   | 1   |
| 1   | 2   |
| 1   | 3   |
| 2   | 1   |
| 2   | 2   |

> b 열 -> a열로 정렬

```sql
SELECT *
FROM sample
ORDER BY b, a;
```

| a   | b   |
| --- | --- |
| 1   | 1   |
| 2   | 1   |
| 1   | 2   |
| 2   | 2   |
| 1   | 3   |

2. 복수의 열 또한 개별적으로 정렬 방법(ASC, DESC)을 지정할 수 있다.
3. `NULL` 값의 정렬 순서는 DB마다 다르다. MySQL의 경우 `NULL` 값을 가장 작은 값으로 취급한다.

### 결과 행 제한하기 - LIMIT

`LIMIT` 구로 `SELECT`구의 결과 행수를 제한할 수 있다.

```sql
SELECT 열명 FROM 테이블 LIMIT 행수 [OFFSET 시작행]
```

단, MySQL과 PostgreSQL에서 사용할 수 있는 문법인 점에 유의하자.

```sql
SELECT 열명 FROM 테이블 LIMIT 행수 OFFSET 위치
```

`LIMIT`을 `OFFSET`과 함께 사용하면 페이지 매김 기능을 편하게 구현할 수 있다.

OFFSET의 값은 `시작할 행 - 1`로 기억해두면 편하다.
