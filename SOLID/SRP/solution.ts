/**
 * SRP를 지키기 위한 방법으로 facade 패턴이 있습니다.
 * facade 패턴은 복잡한 내부 구현은 숨기고 사용하기 쉬운 인터페이스만 제공하는 패턴입니다.
 *
 * EmployFacade 클래스의 메서드에는 코드가 거의 없습니다.
 * EmployFacade 클래스는 메서드의 구현은 세 클래스에게 위임하고 세 클래스에서 구현된 메서드를 하나로 모아 사용하기 쉽게 해주는 역할만 합니다.
 */

class PayCalculator {
  public caculatePay() {
    // ...
  }
}

class HourReporter {
  public reportHours() {
    // ...
  }
}

class EmployeeSaver {
  public save() {
    // ...
  }
}

class EmployeeFacade {
  private name: string;
  private positon: string;

  constructor(name: string, position: string) {
    this.name = name;
    this.positon = position;
  }

  calculatePay() {
    return new PayCalculator().caculatePay();
  }

  reportHours() {
    return new HourReporter().reportHours();
  }

  save() {
    return new EmployeeSaver().save();
  }
}
