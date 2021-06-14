/**
 * Rectangle, Square 문제를 해결하기 위해서는 Rectangle 클래스와 Square 클래스의 상속관계를 제거하는 것입니다.
 * 수학적으로 봤을 때 직사각형은 정사각형을 포함하는 것이 맞지만
 * 코드상으로 그렇게 구현하면 LSP 원칙에 위배되는 상황이 발생하기 때문에
 * 상속관계를 제거하고 두 클래스가 공통의 인터페이스를 구현하도록 변경해야합니다.
 * 이렇게 하면 Rectangle, Square 클래스가 IShape 인터페이스의 서브 타입이 됩니다.
 */

interface IShape {
  area(): number;
}

class RectangleSolution implements IShape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public setWidth(width: number): void {
    this.width = width;
  }

  public setHeight(height: number): void {
    this.height = height;
  }

  public area(): number {
    return this.width * this.height;
  }
}

class SquareSolution implements IShape {
  private side: number;

  constructor(side: number) {
    this.side = side;
  }

  public setSide(side: number): void {
    this.side = side;
  }

  public area(): number {
    return this.side * this.side;
  }
}

const shape: IShape = new RectangleSolution(2, 8);
shape.area() === 16; // true

const shape1: IShape = new SquareSolution(5);
shape1.area() === 25; // true
