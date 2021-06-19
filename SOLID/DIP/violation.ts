/**
 * 상위 모듈인 Starcraft 클래스가 하위 모듈인 Zealot, Dragoon 클래스를 직접 생성하면서 의존성이 생겼습니다.
 * 비록 Zealot, Dragoon 클래스가 IProtossUnit이라는 공통 인터페이스를 구현하고 있지만
 * Starcraft 클래스에서 new 키워드를 통해 직접 생성하고 있으므로 이는 DIP를 위반하는 상황입니다.
 */

interface IProtossUnit {
  attack(): void;
}

class Zealot implements IProtossUnit {
  public attack(): void {
    console.log("질럿 공격");
  }
}

class Dragoon implements IProtossUnit {
  public attack(): void {
    console.log("드라군 공격");
  }
}

class Starcraft {
  public attack(type: string): void {
    let unit: IProtossUnit;

    if (type === "zealot") unit = new Zealot();
    else unit = new Dragoon();

    unit.attack();
  }
}
