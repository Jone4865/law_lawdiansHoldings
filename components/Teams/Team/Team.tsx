import { ReactNode } from "react";
import styles from "./Team.module.scss";
import className from "classnames/bind";
import Member from "./Member/Member";

const cx = className.bind(styles);

type Props = {
  partKo: string;
  partEn: string;
  lineTwo?: boolean;
  lineOneCount?: number;
};

type Data = {
  [index: string]: any;
};

function Team({ partKo, partEn, lineTwo, lineOneCount }: Props) {
  const NamesOne: Data = {
    경영진: [
      <div key={1} className={cx("name_wrap")}>
        <p className={cx("nickname")}>프랑키</p>
        <p className={cx("name")}>윤창기</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>CEO</p>
      </div>,
      <div key={2} className={cx("name_wrap")}>
        <p className={cx("nickname")}>마르코</p>
        <p className={cx("name")}>김창섭</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>CCO</p>
      </div>,
    ],
    고문: [
      <div key={3} className={cx("name_wrap")}>
        <p className={cx("nickname")}>김길섭</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>경영고문</p>
      </div>,
      <div key={4} className={cx("name_wrap")}>
        <p className={cx("nickname")}>조종현</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>경영고문</p>
      </div>,
      <div key={5} className={cx("name_wrap")}>
        <p className={cx("nickname")}>베르고</p>
        <p className={cx("name")}>김경진</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>특임고문</p>
      </div>,
    ],
    경영지원: [
      <div key={6} className={cx("name_wrap")}>
        <p className={cx("nickname")}>쿠마</p>
        <p className={cx("name")}>이주빈</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>대외협력 전무</p>
      </div>,
      <div key={7} className={cx("name_wrap")}>
        <p className={cx("nickname")}>가프</p>
        <p className={cx("name")}>조호성</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>경영지원 실장</p>
      </div>,
      <div key={8} className={cx("name_wrap")}>
        <p className={cx("nickname")}>카이도</p>
        <p className={cx("name")}>변연섭</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>대외협력 과장</p>
      </div>,
      <div key={9} className={cx("name_wrap")}>
        <p className={cx("nickname")}>남세현</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>대외협력 대리</p>
      </div>,
    ],
    기획: [
      <div key={10} className={cx("name_wrap")}>
        <p className={cx("nickname")}>쵸파</p>
        <p className={cx("name")}>장지원</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>실장</p>
      </div>,
      <div key={11} className={cx("name_wrap")}>
        <p className={cx("nickname")}>버기</p>
        <p className={cx("name")}>이현구</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>전략기획 실장</p>
      </div>,
      <div key={12} className={cx("name_wrap")}>
        <p className={cx("nickname")}>모건</p>
        <p className={cx("name")}>김진동</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>대외협력 실장</p>
      </div>,
    ],
    디자인: [
      <div key={13} className={cx("name_wrap")}>
        <p className={cx("nickname")}>상디</p>
        <p className={cx("name")}>오한나</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>CDO</p>
      </div>,
      <div key={14} className={cx("name_wrap")}>
        <p className={cx("nickname")}>사디</p>
        <p className={cx("name")}>고윤</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>사원</p>
      </div>,
    ],
    개발: [
      <div key={15} className={cx("name_wrap")}>
        <p className={cx("nickname")}>브룩</p>
        <p className={cx("name")}>김동욱</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>CTO</p>
      </div>,
      <div key={16} className={cx("name_wrap")}>
        <p className={cx("nickname")}>징베</p>
        <p className={cx("name")}>조은흠</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>대리</p>
      </div>,
      <div key={17} className={cx("name_wrap")}>
        <p className={cx("nickname")}>키드</p>
        <p className={cx("name")}>최재형</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>대리</p>
      </div>,
      <div key={18} className={cx("name_wrap")}>
        <p className={cx("nickname")}>타마</p>
        <p className={cx("name")}>박종현</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>대리</p>
      </div>,
    ],
    인프라: [
      <div key={19} className={cx("name_wrap")}>
        <p className={cx("nickname")}>퀴로스</p>
        <p className={cx("name")}>강지훈</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>실장</p>
      </div>,
      <div key={20} className={cx("name_wrap")}>
        <p className={cx("nickname")}>카루</p>
        <p className={cx("name")}>배하늘</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>사원</p>
      </div>,
      <div key={21} className={cx("name_wrap")}>
        <p className={cx("nickname")}>제파</p>
        <p className={cx("name")}>장호연</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>사원</p>
      </div>,
      <div key={22} className={cx("name_wrap")}>
        <p className={cx("nickname")}>시저</p>
        <p className={cx("name")}>김진영</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>사원</p>
      </div>,
    ],
    홍보: [
      <div key={23} className={cx("name_wrap")}>
        <p className={cx("nickname")}>제프</p>
        <p className={cx("name")}>안용준</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>실장</p>
      </div>,
      <div key={24} className={cx("name_wrap")}>
        <p className={cx("nickname")}>알비다</p>
        <p className={cx("name")}>정영서</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>차장</p>
      </div>,
    ],
  };

  const NamesTwo: Data = {
    고문: [
      <div key={25} className={cx("name_wrap")}>
        <p className={cx("nickname")}>샹크스</p>
        <p className={cx("name")}>김평호</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>법률고문</p>
      </div>,
      <div key={26} className={cx("name_wrap")}>
        <p className={cx("nickname")}>최재윤</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>법률고문</p>
      </div>,
      <div key={27} className={cx("name_wrap")}>
        <p className={cx("nickname")}>강동우</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>사외고문</p>
      </div>,
      <div key={28} className={cx("name_wrap")}>
        <p className={cx("nickname")}>비올라</p>
        <p className={cx("name")}>김숙영</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>사외고문</p>
      </div>,
    ],
    경영지원: [
      <div key={29} className={cx("name_wrap")}>
        <p className={cx("nickname")}>도르돈</p>
        <p className={cx("name")}>정홍훈</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>경영지원 차장</p>
      </div>,
      <div key={30} className={cx("name_wrap")}>
        <p className={cx("nickname")}>케이미</p>
        <p className={cx("name")}>한이슬</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>경영지원 차장</p>
      </div>,
      <div key={32} className={cx("name_wrap")}>
        <p className={cx("nickname")}>히나</p>
        <p className={cx("name")}>박주은</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>경영지원 인턴</p>
      </div>,
    ],
    기획: [
      <div key={33} className={cx("name_wrap")}>
        <p className={cx("nickname")}>아론</p>
        <p className={cx("name")}>이창준</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>상무</p>
      </div>,
      <div key={34} className={cx("name_wrap")}>
        <p className={cx("nickname")}>루치</p>
        <p className={cx("name")}>심동욱</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>COO</p>
      </div>,
      <div key={35} className={cx("name_wrap")}>
        <p className={cx("nickname")}>카야</p>
        <p className={cx("name")}>홍지영</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>사원</p>
      </div>,
      <div key={36} className={cx("name_wrap")}>
        <p className={cx("nickname")}>비스타</p>
        <p className={cx("name")}>김수연</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>사원</p>
      </div>,
    ],
    개발: [
      <div key={37} className={cx("name_wrap")}>
        <p className={cx("nickname")}>카포네</p>
        <p className={cx("name")}>길민종</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>사원</p>
      </div>,
      <div key={38} className={cx("name_wrap")}>
        <p className={cx("nickname")}>라분</p>
        <p className={cx("name")}>강용호</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>사원</p>
      </div>,
      <div key={39} className={cx("name_wrap")}>
        <p className={cx("nickname")}>티치</p>
        <p className={cx("name")}>채종원</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>사원</p>
      </div>,
    ],
    홍보: [
      <div key={40} className={cx("name_wrap")}>
        <p className={cx("nickname")}>샬롯</p>
        <p className={cx("name")}>오지수</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>대리</p>
      </div>,
      <div key={41} className={cx("name_wrap")}>
        <p className={cx("nickname")}>캐럿</p>
        <p className={cx("name")}>정지은</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>대리</p>
      </div>,
      <div key={42} className={cx("name_wrap")}>
        <p className={cx("nickname")}>푸딩</p>
        <p className={cx("name")}>김다솔</p>
        <div className={cx("pipe")} />
        <p className={cx("position")}>대리</p>
      </div>,
    ],
  };

  const ContentsOne: Data = {
    경영진: [
      <div key={43} className={cx("bottom_wrap")}>
        - 경력 21년
        <br />
        - 2019년 청년혁신가 30인 중 1인
        <br />
        - &apos;오투잡&apos; 기획 참여
        <br />- 웹 기획 전문
      </div>,
      <div key={44} className={cx("bottom_wrap")}>
        - 경력 21년
        <br />
        - 티몬 TS 출신
        <br />
        - 온∙오프라인 시스템 설계 전문가
        <br />- 프로젝트 매니저 총괄 다수
      </div>,
    ],
    고문: [
      <div key={45} className={cx("bottom_wrap")}>
        - 現 한국SCM협회 이사
        <br />
        - 現 한국물류학회 부회장
        <br />
        - 前 숭실대학교 IT유통물류학과 교수
        <br />- 前 동중앙아시아경성학회장
      </div>,
      <div key={46} className={cx("bottom_wrap")}>
        - 상품권 운영 및 현장지휘
      </div>,
      <div key={47} className={cx("bottom_wrap")}>
        - 증권사 IB 본부장 출신
        <br />
        - 상장리츠사 부사장
        <br />
        - 사모M&A펀드(금감원인가) 운용대표
        <br />- 상장사 등기부 회장
      </div>,
    ],
    경영지원: [
      <div key={48} className={cx("bottom_wrap")}>
        - 前 봄스킨대표
        <br />- 前 미가대표
      </div>,
      <div key={49} className={cx("bottom_wrap")}>
        - 학사 41기
        <br />
        - 前 정우C&P 영업부차장 외
        <br />
        영업 관리직 다수
        <br />- 前 푸른 건설 실장(인력관리)
      </div>,
      <div key={50} className={cx("bottom_wrap")}>
        - 상품권 운영 및 광주지부
      </div>,
      <div key={51} className={cx("bottom_wrap")}>
        - 상품권 운영 및 현장요원
      </div>,
    ],
    기획: [
      <div key={52} className={cx("bottom_wrap")}>
        - 경력 25년
        <br />
        - 홍보 / 광고학(석사)마케팅 전문
        <br />
        - PM (前 싸이더스 본부장)
        <br />
        - 투자전략기획 <br />
        (前 인터불고 건설 본부장)
      </div>,
      <div key={53} className={cx("bottom_wrap")}>
        - 경력 16년
        <br />
        - 부일종합건설 (대표)
        <br />- 시행 / 시공 PROJECT
      </div>,
      <div key={54} className={cx("bottom_wrap")}>
        - 경력 10년
        <br />- 금융기획 및 금융유동화전문
      </div>,
    ],
    디자인: [
      <div key={55} className={cx("bottom_wrap")}>
        - 경력 7년
        <br />
        - 2019년 청년혁신가 30인중 1인
        <br />
        - Web / Mobile / App Design
        <br />- 2D Motion Graphic
      </div>,
      <div key={56} className={cx("bottom_wrap")}>
        - 시각디자인 전공
        <br />
        - 호흡유도 디바이스 디자인 출원
        <br />- Web / Mobile / Graphic Design
      </div>,
    ],
    개발: [
      <div key={57} className={cx("bottom_wrap")}>
        - 경력 7년
        <br /> - 2019년 청년혁신가 30인 중 1인
        <br /> - 블록체인 시스템 개발 경력
        <br />
        -NodeJs, React, React Native,
        <br /> TypeScript 등
      </div>,
      <div key={58} className={cx("bottom_wrap")}>
        - 컴퓨터 공학
        <br /> - Front-End / Web 개발
        <br /> - ReactJs, NextJs, NodeJs 등
      </div>,
      <div key={59} className={cx("bottom_wrap")}>
        - Front-End / Hybrid Web 개발
        <br /> - JavaScript, Jquery, React 등<br /> - 프로젝트 사후 관리
      </div>,
      <div key={60} className={cx("bottom_wrap")}>
        - Back-End 개발
        <br /> - JavaScript, React, NodeJs 등
      </div>,
    ],
    인프라: [
      <div key={61} className={cx("bottom_wrap")}>
        - 경력 6년
        <br />
        - 서버 엔지니어
        <br />
        - AWS 서버 개발
        <br />- 기업네트워크
      </div>,
      <div key={62} className={cx("bottom_wrap")}>
        - 서버 엔지니어
        <br />
        - AWS 서버 개발
        <br />- Cisco 네트워크 엔지니어
      </div>,
      <div key={63} className={cx("bottom_wrap")}>
        - 서버 엔지니어
        <br />
        - AWS 서버 개발
        <br />- 기업 네트워크
      </div>,
      <div key={64} className={cx("bottom_wrap")}>
        - SW 개발자
        <br />
        - SW마에스트로 10기
        <br />- 2019 청년혁신가 30인 중 1인
      </div>,
    ],
    홍보: [
      <div key={65} className={cx("bottom_wrap")}>
        - 경력 17년
        <br />
        - 광고 홍보 전공
        <br />
        - 건강검진 플랫폼 운영
        <br />- 마케팅 전문가
      </div>,
      <div key={66} className={cx("bottom_wrap")}>
        - 경력 12년
        <br />
        - 간호조무사 자격증 보유
        <br />
        - 前 한신메디피아 마케팅부
        <br />- 前 건강검진 플랫폼 운영
      </div>,
    ],
  };

  const ContentsTwo: Data = {
    고문: [
      <div key={67} className={cx("bottom_wrap")}>
        - 現 법무법인 한울(성남사우소)
        <br />
        - 現 분당차병원의학연구윤리심의위원
        <br />
        - 現 소망재활원운영위원
        <br />- 現 성남시 지방세심의위원회위원
      </div>,
      <div key={69} className={cx("bottom_wrap")}>
        - 現 법무법인 태일
        <br />
        - 現 서울시 공익변호사
        <br />
        - 現 대법원 국선 변호
        <br />- 現 한국갈등해결센터 전문위원
      </div>,
      <div key={70} className={cx("bottom_wrap")}>
        - 조명 및 조형 예술가
        <br />
        - 작품 설치 및 총괄 아트디렉터
        <br />
        - 2019 서북권 봉제 패션 페스티벌
        <br />
        /총괄 아트디렉터
        <br />- 2020 &apos;연희를 잇다&apos;/개인전
      </div>,
      <div key={71} className={cx("bottom_wrap")}>
        - 경력 6년
        <br />
        - 前 한국투자증권 마케팅 팀장
        <br />
        - 前 GS칼텍스 고객관리팀 팀장
        <br />- 前 LG U+ 고객상담팀 대리
      </div>,
    ],
    경영지원: [
      <div key={72} className={cx("bottom_wrap")}>
        - 경력 4년
        <br />- 인사 / R&D 담당
      </div>,
      <div key={73} className={cx("bottom_wrap")}>
        - 경력 9년
        <br />- 회계 / 총무 담당
      </div>,
      <div key={74} className={cx("bottom_wrap")}>
        - 경영지원 회계담당
      </div>,
      <div key={75} className={cx("bottom_wrap")}>
        - 경영지원 회계담당
      </div>,
    ],
    기획: [
      <div key={76} className={cx("bottom_wrap")}>
        - 경력 13년
        <br />
        - 패션 브랜드 유통 기획
        <br />
        - 패션 브랜드 유통 영업 / 관리
        <br />- 골프 IT 플랫폼 기획
      </div>,
      <div key={77} className={cx("bottom_wrap")}>
        - 경력 5년 <br />
        - 컴퓨터 공학, 정보처리 기사
        <br />
        - 앱 비즈니스 모델 설계, UX/UI설계
        <br />- 성균관대 정보통신대학 빅데이터학과 석사
      </div>,
      <div key={78} className={cx("bottom_wrap")}>
        - 서비스 운영 기획
        <br />
        - 도쿄외전 일한 통역
        <br />
        - appstone 미술작품 번역
        <br />- 신세계 본점 통역
      </div>,
      <div key={79} className={cx("bottom_wrap")}>
        - 서비스 운영 기획
        <br />- 사업 기획
      </div>,
    ],
    개발: [
      <div key={80} className={cx("bottom_wrap")}>
        - Back-End / Web 개발
        <br />- JavaScript, NodeJs, Jquery 등
      </div>,
      <div key={81} className={cx("bottom_wrap")}>
        - Back-End 개발
        <br />- Java Script, NodeJs
      </div>,
      <div key={82} className={cx("bottom_wrap")}>
        - Front-End 개발
        <br />- JavaScript, React, NodeJs 등
      </div>,
    ],
    홍보: [
      <div key={83} className={cx("bottom_wrap")}>
        - 경력 4년
        <br />
        - 마케팅 기획 및 운영 담당
        <br />
        - 공공기관 / 의료업 광고 진행
        <br />- 검색 광고 및 캠페인 기획
      </div>,
      <div key={84} className={cx("bottom_wrap")}>
        - 경력 4년
        <br />
        - 광고홍보 전공
        <br />
        - 공공기관 / 기업 광고 진행
        <br />- SNS 관리 및 캠페인 기획
      </div>,
      <div key={85} className={cx("bottom_wrap")}>
        - 경력 6년
        <br />
        - 홍보 마케팅 담당
        <br />
        - Brand Blog 운영
        <br />- SNS 마케팅 전문가 1급
      </div>,
    ],
  };

  return (
    <div style={{ zIndex: 1 }}>
      <div className={cx("part_wrap")}>
        <p className={cx("partKo")}>{partKo}</p>
        <p className={cx("partEn")}>{partEn}</p>
      </div>
      <div className={cx("line_wrap")}>
        {NamesOne[partKo]?.map((item: ReactNode, index: number) => (
          <Member
            key={index}
            polderName={partEn}
            name={item}
            bottom={ContentsOne[partKo][index]}
            imgNumber={index + 1}
          />
        ))}
      </div>
      {lineTwo && lineOneCount && (
        <div className={cx("line_wrap")}>
          {NamesTwo[partKo].map((item: ReactNode, index: number) => (
            <Member
              key={index}
              polderName={partEn}
              name={item}
              bottom={ContentsTwo[partKo][index]}
              imgNumber={index + lineOneCount + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Team;
