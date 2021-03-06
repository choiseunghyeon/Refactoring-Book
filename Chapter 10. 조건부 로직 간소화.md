## TIP

- 조건부 로직은 프로그램의 힘을 강화하는 데 크게 기여하지만, 안타깝게도 프로그램을 복잡하게 만드는 주요 원흉이기도 하다.
- 가변 변수를 제거하면 자다가도 떡이 생긴다!

## 리팩터링

- 조건문 분해하기
  - 목적과 구현을 분리하여 코드를 이해하기 쉽게 한다.
- 중복 조건식 통합하기
  - 조건식은 다르지만 조건절이 같다면 하나로 통합하는게 낫다.
  - 중첩된 조건문 and로 레벨이 같은 조건문은 or로 결합한다.
- 중첩 조건문을 보호 구문으로 바꾸기
  - 함수의 로직을 시작하기에 앞서 검증해야 할 때
- 조건부 로직을 다형성으로 바꾸기
  - 타입 기준으로 분기하는 복잡한 switch문은 다형성을 활용할 수 있다. / 변형 동작도 다형성을 활용할 수 있다.
  - 적합한 인스턴스를 만들어 반환하는 팩터리 함수도 활용하자.
- 특이 케이스 추가하기 (널 객체 추가하기)
  - 특이 케이스 객체는 값 객체로 항상 불변이어야 한다.
  - 특이 케이스 처리를 클래스로 처리(일종의 다형성) / 기본값을 갖는 literal object 처리 / 변환함수를 사용하여 처리
  - 클라이언트 입장에서는 하나의 동작으로 해결이 가능해진다.(다형성)
- 어서션 추가하기
  - 프로그램이 어떤 상태임을 가정한 채 실행되는지를 다른 개발자에게 알려주는 훌륭한 소통 도구이다.
- 제어 플래그를 탈출문으로 바꾸기
  - 제어 플래그란 코드의 동작을 변경하는데 사용하는 변수를 말한다.
