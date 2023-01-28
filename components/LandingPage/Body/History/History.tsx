import styles from "./History.module.scss";
import className from "classnames/bind";
import HistoryContent from "./HistoryContent/HistoryContent";
const cx = className.bind(styles);

export default function History() {
  const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
  const title = [
    "로디언즈 설립",
    "사회적 기업가 육성 사업 선정",
    "블록체인 기술 개발",
    "블록체인 국가 R&D 선정",
    "블록체인 기술 사업화 지원 사업",
    "정보보호관리체계 획득",
    "기술혁신형 중소기업",
    "청년친화 강소기업",
  ];
  const month = [
    <>
      <span>2016.09</span>
      <span>2016.11</span>
    </>,
    <>
      <span>2017.01</span>
      <span>2017.03</span>
    </>,
    <>
      <span>2018.07</span>
      <span>2018.12</span>
      <span>2018.12</span>
    </>,
    <>
      <span>2019.12</span>
    </>,
    <>
      <span>2020.08</span>
      <span>2020.12</span>
    </>,
    <>
      <span>2021.06</span>
      <span>2021.09</span>
      <span>2021.12</span>
    </>,
    <>
      <span>2022.02</span>
      <span>2022.11</span>
    </>,
    <>
      <span>2023.01</span>
    </>,
  ];

  const content = [
    <>
      <span>로디언즈 설립</span>
      <span>성균관대학교 창업드림캠프 최우수상</span>
    </>,
    <>
      <span>'의료사고 발생 전 변호사 선임 방법' 특허 획득</span>
      <span>사회적 기업가 육성 사업 선정</span>
    </>,
    <>
      <span>세대 융합 창업 캠퍼스 사업 선정</span>
      <span>블록체인 청년 혁신가 선정</span>
      <span>
        도약 기술 개발사업 선정
        <br />
        (블록체인 기술 개발/중소기업정보진흥원)
      </span>
    </>,
    <>
      <span>블록체인 국가 R&D 선정</span>
    </>,
    <>
      <span>한국무역보험공사 수출지원 프로그램 선정</span>
      <span>SBA 블록체인 기술 사업화 지원 사업 선정</span>
    </>,
    <>
      <span>신진여성연구원 산업지원 선정</span>
      <span>정보보호관리체계(ISMS) 인증 획득 / 한국인터넷진흥원</span>
      <span>가상자산사업자 신고 / 금융위원회</span>
    </>,
    <>
      <span>기술혁신형 중소기업 (Inno-Biz) 취득</span>
      <span>
        내일채움공제 완료 : 6명 이상
        <br />
        산학연 협력 우수과제 표창
      </span>
    </>,
    <>
      <span>청년친화 강소기업 선정</span>
    </>,
  ];
  return (
    <div className={cx("container")}>
      <div className={cx("wrap")}>
        <div className={cx("bg")} />
        <div className={cx("text_wrap")}>
          <h1 className={cx("title")}>HISTORY</h1>
          <div className={cx("content")}>
            <span>2016</span>
            <div className={cx("line")} />
            <span>2023</span>
          </div>
        </div>
        <div className={cx("mobile_wrap")}>
          <div className={cx("mobile_bg")} />
          <div className={cx("mobile_text_wrap")}>
            {years.map((year, idx) => (
              <HistoryContent
                key={idx}
                year={year}
                title={title[idx]}
                month={month[idx]}
                content={content[idx]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
