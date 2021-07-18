# Clean Architecture 연습

![clean-architecture](http://image.yes24.com/goods/77283734/XL)

출처: http://www.yes24.com/Product/Goods/77283734

## 이 repository는 Clean Architecture 책에 등장한 내용을 코드로 연습해보기 위한 repository 입니다.

## [SOLID](https://github.com/jewook3617/clean-architecture-practice/tree/master/SOLID)

- [SRP](https://github.com/jewook3617/clean-architecture-practice/tree/master/SOLID/SRP)
- [OCP](https://github.com/jewook3617/clean-architecture-practice/tree/master/SOLID/OCP)
- [LSP](https://github.com/jewook3617/clean-architecture-practice/tree/master/SOLID/LSP)
- [ISP](https://github.com/jewook3617/clean-architecture-practice/tree/master/SOLID/ISP)
- [DIP](https://github.com/jewook3617/clean-architecture-practice/tree/master/SOLID/DIP)

## [Clean Architecture](https://github.com/jewook3617/clean-architecture-practice/tree/master/SOLID)

![clean-architecture-diagram](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

출처: https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html

이 책에 등장하는 clean architecture에 맞게 user 생성 api 코드를 만들어봤습니다.

- **[Entity](https://github.com/jewook3617/clean-architecture-practice/tree/master/clean-architecture/entities) : application과 관계없는 핵심 업무 규칙.**
  - 유저 정보에는 아이디, 이름, 패스워드, 이메일이 있다.
  - 패스워드는 5글자 이상이어야하고 이메일은 이메일 형식을 갖춰야한다.
- **[Use Case](https://github.com/jewook3617/clean-architecture-practice/tree/master/clean-architecture/use-cases) : application에 특화된 업무 규칙.**
  - 사용자로부터 아이디, 이름, 패스워드, 이메일을 입력 받는다.
  - 위 항목들은 반드시 있어야한다.
  - 사용자가 입력한 아이디가 시스템에 등록되어 있는지 확인한다.
  - 패스워드와 이메일이 요구사항을 만족하는지 확인한다.
  - 사용자가 입력한 정보를 가지는 user를 시스템에 생성한다.
- **[Interface Adapter](https://github.com/jewook3617/clean-architecture-practice/tree/master/clean-architecture/interface-adapter): 웹이나 데이터베이스 같은 외부의 데이터 형식 <-> Entity, Use Case에서 사용하는 데이터 형식 변환.**
- **[Frame Works](https://github.com/jewook3617/clean-architecture-practice/tree/master/clean-architecture/frame-works): REST API, Express, 실제 DB는 붙이지 않음.**
