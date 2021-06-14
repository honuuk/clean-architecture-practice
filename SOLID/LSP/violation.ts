/**
 * Square 클래스는 Rectangle 클래스를 상속받고 있습니다.
 * 하지만 정사각형의 특성 상 setWidth와 setHeight 메서드를 실행하면 width와 height의 값이 동시에 바뀌게 됩니다.
 * 그렇기 때문에 Square 클래스는 Rectangle 클래스를 완전히 대체할 수 없습니다.
 * 이런 상황은 LSP 원칙을 위배하므로 Square 클래스는 Rectangle 클래스의 서브 타입이 될 수 없습니다.
 */

class Rectangle {
  width: number;
  height: number;

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

class Square extends Rectangle {
  constructor(width: number, height: number) {
    super(width, height);
  }

  public setWidth(width: number): void {
    this.width = width;
    this.height = width;
  }

  public setHeight(height: number): void {
    this.width = height;
    this.height = height;
  }

  public area(): number {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(3, 5);
rectangle.setWidth(5);
rectangle.setHeight(3);
rectangle.area() === 15; // true

const rectangle1 = new Square(3, 3);
rectangle1.setWidth(5);
rectangle1.setHeight(3);
rectangle1.area() === 15; // false
