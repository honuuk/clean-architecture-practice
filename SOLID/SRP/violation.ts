/**
 * Employee 클래스에 세 가지 주요 메서드가 있습니다.
 *  - calculatePay() : 급여를 계산하는 메서드 => 회계팀 담당
 *  - reportHours() : 근무시간을 계산하는 메서드 => 인사팀 담당
 *  - save() : 변경된 정보를 저장하는 메서드 => 기술팀 담당
 *
 * calculatePay() 메서드와 reportHours() 메서드가 초과근무시간을 계산하는 calculateExtraHour() 메서드를 공유한다고 가정하겠습니다.
 * 만약 회계팀의 요청으로 calculateExtraHour() 메서드의 계산 방식이 변경되었을 때 의도치 않게 reportHours()의 동작도 변경하게 됩니다.
 *
 * 이런 일을 방지하기 위해 하나의 클래스는 하나의 액터(사용 주체)만을 담당해야합니다.
 */

class Employee {
  private name: string;
  private positon: string;

  constructor(name: string, position: string) {
    this.name = name;
    this.positon = position;
  }

  public calculateExtraHour() {
    // ...
  }

  public calculatePay() {
    // ...
    this.calculateExtraHour();
    // ...
  }

  public reportHours() {
    // ...
    this.calculateExtraHour();
    // ...
  }

  public save() {
    // ...
  }
}
