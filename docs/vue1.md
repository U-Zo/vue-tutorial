# 1일차

# 프로젝트 환경

1. node.js
2. visual studio code
3. git

# Vue cli를 통하여 SPA 개발 환경 구성

1. workspace 디렉토리를 만들어서 진행
2. edu001 프로젝트 명칭을 부여하여 프로젝트 생성
3. 설치가 완료되면 `yarn serve` 또는 `npm run serve`
4. vscode로 edu001 프로젝트 디렉토리 오픈

public  - 실제로 배포되는 정적 파일들이 있는 디렉토리

src - 실제로 개발 소스를 작성하는 디렉토리

component - 재사용되는 요소 집합을 컴포넌트화한 파일들의 디렉토리

router - 페이지와 url을 매핑한 정보를 작성한 디렉토리

store - vuex 스토어를 작성한 곳

views - 페이지에 해당하는 컴포넌트들의 디렉토리

main.js - 가장 먼저 실행되는 파일

App.vue - main.js에서 가장 먼저 불러오는 컴포넌트

## Route

### 비동기 route

![1%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%8E%E1%85%A1%20c257b4556576433484c9f6a8099d0bc8/Untitled.png](1%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%8E%E1%85%A1%20c257b4556576433484c9f6a8099d0bc8/Untitled.png)

라우트 레벨에서 코드 스플릿 수행하는 방법

`webpackChunkName` 주석을 사용하여 나눌 이름 지정

### 페이지 라우팅 연결

![1%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%8E%E1%85%A1%20c257b4556576433484c9f6a8099d0bc8/Untitled%201.png](1%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%8E%E1%85%A1%20c257b4556576433484c9f6a8099d0bc8/Untitled%201.png)

# Data

## data() vs data 객체

![1%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%8E%E1%85%A1%20c257b4556576433484c9f6a8099d0bc8/Untitled%202.png](1%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%8E%E1%85%A1%20c257b4556576433484c9f6a8099d0bc8/Untitled%202.png)

함수형으로 정의하여 객체의 독립성을 지켜줄 수 있다.

## Vue 개발 툴로 데이터 변경하기

![1%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%8E%E1%85%A1%20c257b4556576433484c9f6a8099d0bc8/Untitled%203.png](1%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%8E%E1%85%A1%20c257b4556576433484c9f6a8099d0bc8/Untitled%203.png)

컴포넌트 아래의 `message`를 변경하여 페이지의 데이터를 변경할 수 있다.

## 선언적 렌더링

### v-bind

![1%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%8E%E1%85%A1%20c257b4556576433484c9f6a8099d0bc8/Untitled%204.png](1%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%8E%E1%85%A1%20c257b4556576433484c9f6a8099d0bc8/Untitled%204.png)

`v-bind`를 사용하여 변수 이름으로 데이터를 바로 지정해줄 수 있다. 또한 `v-bind`를 생략 가능하다.

## 조건문 & 반복문

### v-if

```jsx
<div>
  <p v-if="seen">이제 나를 볼 수 있어요</p>
</div>
```

변수의 참 또는 거짓에 따라 해당 요소의 출력을 결정

### v-for

```jsx
<ol>
  <li v-for="todo in todos">
    {{ todo.text }}
  </li>
</ol>
```

반복문을 사용할 때는 꼭 `key`를 바인딩해줘야 한다.

## 사용자 입력 핸들링

이벤트를 핸들링을 위해서 함수를 사용한다. 함수를 정의할 때는 methods 속성을 정의하여 사용한다.

```jsx
methods: {
  countUp() {
    this.counter++;
  },
},
```

### v-on:click

```jsx
<button v-on:click="countUp">Click</button>
<p>counter ::: {{ counter }}</p>
```

Vue에서는 model을 기반으로 자연스럽게 vue가 바뀌도록 개발해야 한다.

# Lifecycle

![1%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%8E%E1%85%A1%20c257b4556576433484c9f6a8099d0bc8/Untitled%205.png](1%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%8E%E1%85%A1%20c257b4556576433484c9f6a8099d0bc8/Untitled%205.png)

# Computed

methods 처럼 사용할 수 있지만 큰 차이점은 캐싱을 사용한다는 것이다. computed에 정의된 함수의 return 값이 변경될 때만 수행되기 때문에 성능상 이점을 얻을 수 있다.

```jsx
<p>뒤집힌 메시지: "{{ reversedMessage }}"</p>
```

```jsx
computed: {
  reversedMessage: function() {
    return this.message
      .split('')
      .reverse()
      .join('');
  },
},
```

# Watch

computed 속성과 비슷하지만 차이점은 기존 값을 변경시킨다는 것이다.