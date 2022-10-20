# 원티드 프리온보딩 프론트엔드 - 선발 과제

## 과제

---

### :: 1. 로그인 / 회원가입
![login](https://user-images.githubusercontent.com/77824583/196871859-92674d59-96f4-4c42-8003-9d6583b42500.gif)


- `/` 경로에 로그인 / 회원가입 기능을 구현
  - 페이지 안에 이메일 입력창, 비밀번호 입력창, 제출 버튼이 포함되었습니다.
  - 로그인, 회원가입을 별도의 경로로 분리했습니다.

#### Assignment1

- 이메일과 비밀번호의 유효성 검사기능 구현
  - 이메일 조건: `@` 포함
  - 비밀번호 조건: 8자 이상
  - 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화 됩니다.

#### Assignment2

- 로그인 API를 호출하고, 올바른 응답을 받았을 때 `/todo` 경로로 이동
  - 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
  - 응답받은 JWT는 로컬 스토리지에 저장됩니다.

#### Assignment3
![redirect](https://user-images.githubusercontent.com/77824583/196870457-5d7f2c9f-d896-49ae-a68c-69138112e079.gif)

- 로그인 여부에 따른 리다이렉트 처리
  - 로컬 스토리지에 토큰이 있는 상태로 `/` 페이지에 접속한다면 `/todo` 경로로 리다이렉트가 됩니다.
  - 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/` 경로로 리다이렉트가 됩니다.

---

### :: 2. 투두 리스트
![todolist](https://user-images.githubusercontent.com/77824583/196870183-66e82fb1-73f9-411d-ae87-696c1d9565f3.gif)

#### Assignment4

- `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있습니다.
- 리스트 페이지에는 투두 리스트의 내용과 완료 여부가 표시됩니다.
- 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가됩니다.

#### Assignment5

- 투두 리스트의 수정, 삭제 기능
  - 투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드가 활성화되고 투두 리스트의 내용을 수정할 수 있습니다.
  - 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소할 수 있습니다.
  - 투두 리스트의 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제됩니다.

# API

- API 주소: https://pre-onboarding-selection-task.shop/

## 스펙

## 1) Auth

---

## 1-1) SignUp

### 요청

- URL: `/auth/signup`
- Method: `POST`
- Headers:
  - Content-Type: `application/json`
- Body:
  - email: string
  - password: string

### 응답 예시

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwic3ViIjo0LCJpYXQiOjE2NTk5MDQyMTUsImV4cCI6MTY2MDUwOTAxNX0.DyUCCsIGxIl8i_sGFCa3uQcyEDb9dChjbl40h3JWJNc"
}
```

## 1-2) SignIn

### 요청

- URL: `/auth/signin`
- Method: `POST`
- Headers:
  - Content-Type: `application/json`
- Body:
  - email: string
  - password: string

### 응답 예시

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwic3ViIjo0LCJpYXQiOjE2NTk5MDQyMTUsImV4cCI6MTY2MDUwOTAxNX0.DyUCCsIGxIl8i_sGFCa3uQcyEDb9dChjbl40h3JWJNc"
}
```

## 2) Todo

## 2-1) createTodo

### 요청

- URL: `/todos`
- Method: `POST`
- Headers:
  - Authorization: `Bearer access_token`
  - Content-Type: `application/json`
- Body:
  - todo: string

### 응답 예시

- status: 201 Created

```json
{
  "id": 1,
  "todo": "과제하기",
  "isCompleted": false
  "userId": 1,
}
```

## 2-2) getTodos

### 요청

- URL: `/todos`
- Method: `GET`
- Headers:
  - Authorization: `Bearer access_token`

### 응답 예시

- status: 200 OK

```json
[
  {
    "id": 1,
    "todo": "todo2",
    "isCompleted": false,
    "userId": 1
  },
  {
    "id": 2,
    "todo": "todo3",
    "isCompleted": false,
    "userId": 1
  }
]
```

## 2-3) updateTodo

### 요청

- URL: `/todos/:id`
- Method: `PUT`
- Headers:
  - Authorization: `Bearer access_token`
  - Content-Type: `application/json`
- Body:
  - todo: string
  - isCompleted: boolean

### 응답 예시

- status: 200 OK

```json
{
  "id": 1,
  "todo": "Hello World",
  "isCompleted": true,
  "userId": 2
}
```

## 2-4) deleteTodo

### 요청

- URL: `/todos/:id`
- Method: `DELETE`
- Headers:
  - Authorization: `Bearer access_token`

### 응답 예시

- status: 204 No Content
- body: 없음

## 로컬 서버 구동

- 배포된 API에 문제가 있는 경우 활용할 수 있는 로컬 서버 구동법입니다.
- 로컬 서버는 sqlite에 의존성이 있습니다.

### 설치 및 실행

```zsh
$ npm install
$ npm start
```

- 위 순서대로 실행하면 localhost:8000 포트에 서버가 실행됩니다.
- 서버를 실행하면 db.sqlite 파일이 생성되며 해당 파일을 삭제 시 기존의 데이터는 초기화 됩니다.
- 그 외 스펙은 배포된 API와 동일합니다.
