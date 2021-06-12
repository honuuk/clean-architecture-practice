/**
 * excel 파일에서 데이터를 읽어와 통계표를 만들어주는 StatisticsController가 있습니다.
 *
 * StatisticsController에 docs 파일에서 데이터를 읽어와 통계표를 만들어주는 기능이 추가되어야한다고 가정해보겠습니다.
 * 멤버변수 excelFile이 Excel 타입으로 고정되어 있기 때문에 받아올 수 있는 파일의 타입을 변경해야합니다.
 * 또한 excel 파일과 docs 파일의 데이터를 읽어오는 방식이 다르기 때문에 printStatistics() 메서드가 수정되어야합니다.
 * 기능이 추가되면서 코드의 변경이 생기는 이런 상황은 OCP 원칙에 위배되는 상황입니다.
 */

interface Excel {}

class StatisticsController {
  private excelFile: Excel;

  constructor(excelFile: Excel) {
    this.excelFile = excelFile;
  }

  public printStatistics() {
    // this.excelFile에서 데이터를 읽어와 통계표를 만들어 출력하는 메서드
  }
}
