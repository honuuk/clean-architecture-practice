/**
 * User1, User2, User3 클래스는 Ops 클래스의 메서드를 각각 하나씩만 사용합니다.
 * 하지만 Ops 클래스에는 op1(), op2(), op3() 메서드가 함께 있기 때문에
 * User 클래스들은 사용하지 않는 메서드에 의존적이게 됩니다.
 * 이런 상황은 ISP를 위반하는 상황입니다.
 */

class Ops {
  public op1(): void {}

  public op2(): void {}

  public op3(): void {}
}

class User1 {
  public op1(): void {
    const ops: Ops = new Ops();
    ops.op1();
  }
}

class User2 {
  public op2(): void {
    const ops: Ops = new Ops();
    ops.op2();
  }
}

class User3 {
  public op3(): void {
    const ops: Ops = new Ops();
    ops.op3();
  }
}
