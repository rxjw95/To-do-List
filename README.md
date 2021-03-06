# 첫 번째 todo-list

![투두리스트 시연 동영상](https://user-images.githubusercontent.com/62179353/129578085-192943a1-32f0-421d-a412-cbc1ea5dde78.gif)


## 계기
- 회사에서 다른 그룹에 지원을 나가게 되었는데, react 페이지를 하나 만드는 것이었다. 하지만 나는 javascript를 학교에서도 수업을 듣지 않아서 지식이 한참 부족했다.
- 그래서 사전 공부는 2주, 당장 해야할 것은 `javascript`와 `react` 공부

## 공부 방법
1. 책을 통째로 읽는다.
2. 무언가를 일단 만든다.
3. 같이 병행한다.

> 나는 2번을 택했다. 

하지만, 단순히 따라하는 것은 결국 까먹는다. 그래서 우선 강의에 임하기 전에 react의 전반적인 원리를 공부했다.   
그리고 강의를 따라가다 정보가 부족하고 빈약한 것들은 다시 찾아보고 기록했다. 이렇게 공부를 하다보니 계속 react의 동작을 생각하게 되더라.

추가적으로 javascript를 공부했다.   

로직을 작성할 때 `let`, `var`, `const`나 `{}`, `[]`, `this`를 비롯해서 주로 사용하는 `map`, `filter`, `concat`, `slice`, `spread operator`, `destructuring assignment`, `computed properties`, `arrow function` 등 es6+로 작성하는데

> 나의 javascript 실력은 0에 수렴한다. (javascript 뿐만이 아닐지도)

## 기능
- todo item 생성, 제거, toggle 기능(중간선 긋기)
- 렌더링 최적화 맛보기 (shouldComponentUpdate)
- class형 컴포넌트를 사용했다. 그 이유는 hooks를 먼저 배운 것이 아니기도 했고, 라이프사이클을 공부하기 위해 이에 대한 api를 제공하는 클래스형 컴포넌트를 먼저 이해하고 넘어가지는 취지였다.
- 후에 간단하게 몇 개는 함수형으로 만들어봤다.(state를 사용하지 않는 컴포넌트선에서)

## 회고
- 프론트엔드라는 영역에 새로운 감회를 느꼈다. 빠르고 유연하게 움직이는 화면에 대한 만족감과 누군가 내가 만든 화면과 상호작용할 수 있다는 생각에 두근거림이 있었다.
- 반면 javascript의 자유도에 엄청난 고통을 받았다. android나 spring을 해서인지 java 라는 틀에 갇혀있다는 것과는 다르다(내가 java를 잘 아는 것도 아니니까). 그냥 scope에 따른 동작과 function, this 같이 뭐 알만한 것도 다 다르더라.
- 공부하다보니 더 공부해야했고, 더 공부하니 더 공부할게 많고 깊어지더라.
- 실제 시연을 해봤는데, 토글 시 글자색이 변하지 않았다. 그 이유는 css 우선순위가 inline이 가장 높은데, checked 상태와는 관계없이 props로 받은 color가 inline style로 삽입되어서 글자 색이 변경되지 않았다. 그래서 checked를 확인해서 삼항 연산자로 checked가 되어있으면 style을 주지 않고 외부 css가 적용되도록 수정했다.
