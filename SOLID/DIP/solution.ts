/**
 * Starcraft 클래스에서 Zealot, Dragoon 클래스에 대한 의존성을 제거하기 위해 UnitFactory 클래스를 사용했습니다.
 * UnitFactory 클래스는 AbstractUnitFactory 추상 클래스에 의존합니다.
 * AbstractUnitFactory 클래스에서 getUnit() 메서드의 리턴 타입을 IProtossUnit으로 했기 때문에
 * Starcraft 클래스는 IProtossUnit 타입에만 의존성이 생기고 구체 클래스에 대한 의존성은 사라집니다.
 */

interface IProtossUnit {
  attack(): void;
}

class ZealotSolution implements IProtossUnit {
  public attack(): void {
    console.log("질럿 공격");
  }
}

class DragoonSolution implements IProtossUnit {
  public attack(): void {
    console.log("드라군 공격");
  }
}

abstract class AbstractUnitFactory {
  static getUnit: (type: string) => IProtossUnit;
}

class UnitFactory extends AbstractUnitFactory {
  static getUnit(type: string): IProtossUnit {
    if (type === "zealot") return new ZealotSolution();
    return new DragoonSolution();
  }
}

class StarcraftSolution {
  public attack(type: string): void {
    const unit: IProtossUnit = UnitFactory.getUnit(type);
    unit.attack();
  }
}
