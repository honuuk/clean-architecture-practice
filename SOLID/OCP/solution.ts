/**
 * OCP 원칙에 위배되는 상황을 해결하기 위한 방법은 의존성이 생기는 클래스 사이에 인터페이스를 두는 것입니다.
 *
 * StatisticsController가 Excel 타입의 파일에 의존적이었기 때문에 Docx 타입의 파일이 추가되었을 때 StatisticsController가 변경되어야했습니다.
 * StatisticsController와 Excel, Docx 파일 사이에 IImportableFile 이라는 인터페이스를 만들고
 * ExcelFile 클래스와 DocxFile 클래스가 이 인터페이스를 구현하도록 했습니다.
 *
 * 이렇게 하면 어떤 타입의 파일이건 Data 타입의 데이터를 리턴하는 getData() 메서드를 가지고 있기 때문에
 * StatisticsController는 새로운 타입의 파일이 추가되어도 코드를 변경하지 않아도 됩니다.
 *
 * 만약 csv 파일에서 데이터를 읽어와 통계표를 출력하는 기능이 추가된다고 하더라도
 * CsvFile 클래스가 IImportableFile 인터페이스를 구현하도록 만들기만 하면 되기 때문에
 * 코드의 변경 없이 기능을 추가할 수 있습니다.
 */

interface Excel {}
interface Docx {}
interface Data {}
interface IImportableFile {
  getData(): Data;
}

class ExcelFile implements IImportableFile {
  private excelFile: Excel;

  constructor(excelFile: Excel) {
    this.excelFile = excelFile;
  }

  public getData(): Data {
    return {};
  }
}

class DocxFile implements IImportableFile {
  private docxFile: Docx;

  constructor(docxFile: Docx) {
    this.docxFile = docxFile;
  }

  public getData(): Data {
    return {};
  }
}

class StatisticsControllerSolution {
  private file: IImportableFile;

  constructor(file: IImportableFile) {
    this.file = file;
  }

  public printStatistics() {
    // this.file에서 데이터를 읽어와 통계표를 만들어 출력하는 메서드
    // ...
    this.file.getData();
    // ...
  }
}
