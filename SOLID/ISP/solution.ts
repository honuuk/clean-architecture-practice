/**
 * User1, User2, User3 클래스에서 사용하는 메서드를 분리해 각각의 인터페이스를 만들고
 * User 클래스 내부에서 그 인터페이스에 의존하도록 만들었습니다.
 * 이렇게 하면 User 클래스는 각 클래스에서 사용하는 메서드에만 의존하게 됩니다.
 */

interface U1Ops {
  ops1(): void;
}

interface U2Ops {
  ops2(): void;
}

interface U3Ops {
  ops3(): void;
}

class OpsSolution implements U1Ops, U2Ops, U3Ops {
  public ops1() {}

  public ops2() {}

  public ops3() {}
}

class User1Solution {
  public ops1() {
    const u1ops: U1Ops = new OpsSolution();
    u1ops.ops1();
  }
}

class User2Solution {
  public ops2() {
    const u2ops: U2Ops = new OpsSolution();
    u2ops.ops2();
  }
}

class User3Solution {
  public ops3() {
    const u3ops: U3Ops = new OpsSolution();
    u3ops.ops3();
  }
}
