import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./History.module.scss";
import className from "classnames/bind";
import ComponentTop from "../../ComponentTop/ComponentTop";
import Footer from "../../Footer/Footer";

const cx = className.bind(styles);

export default function History() {
  const [small, setPc] = useState(false);
  const isSmall = useMediaQuery({
    query: "(min-width: 0) and (max-width: 1029px)",
  });

  useEffect(() => {
    if (isSmall) {
      setPc(true);
    } else {
      setPc(false);
    }
  }, [isSmall]);

  const [mobile, setMobile] = useState(false);
  const isMobile = useMediaQuery({
    query: "(min-width: 0) and (max-width: 760px)",
  });

  useEffect(() => {
    if (isMobile) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [isMobile]);
  const year = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016];
  const titles = [
    "청년친화 강소기업",
    "기술혁신형 중소기업",
    "정보보호관리체계 획득",
    "블록체인 기술 사업화 지원사업",
    "블록체인 국가 R&D 선정",
    "블록체인 기술 개발",
    "사회적 기업가 육성 사업 선정",
    "로디언즈의 시작",
  ];
  const contents = [
    <div key={1} className={cx("small_right")}>
      <div className={cx("content_year")}>
        <div>2023.01</div>
      </div>
      <div className={cx("etc")}>청년친화 강소기업 선정</div>
    </div>,
    <div key={2} className={cx("small_right")}>
      <div className={cx("content_year")}>
        <div>2022.02</div>
        <div>2022.11</div>
      </div>
      <div className={cx("etc")}>
        <div>기술혁신형 중소기업 (Inno-Biz) 취득</div>
        <div>내일채움공제 완료 : 6명 이상</div>
        <div>산학연 협력 우수과제 표창</div>
      </div>
    </div>,
    <div key={3} className={cx("small_right")}>
      <div className={cx("content_year")}>
        <div>2021.06</div>
        <div>2021.09</div>
      </div>
      <div className={cx("etc")}>
        <div>신진여성연구원 산업지원 선정</div>
        <div>정보보호관리체계(ISMS) 인증 획득 / 한국인터넷진흥원</div>
        <div>가상자산 사업자 신고 / 금융위원회</div>
      </div>
    </div>,
    <div key={4} className={cx("small_right")}>
      <div className={cx("content_year")}>
        <div>2020.06</div>
        <div>2020.12</div>
      </div>
      <div className={cx("etc")}>
        <div>한국무역보험공사 수출지원 프로그램</div>
        <div>SBA 블록체인기술 사업화 지원사업 선정</div>
      </div>
    </div>,
    <div key={5} className={cx("small_right")}>
      <div className={cx("content_year")}>
        <div>2019.12</div>
      </div>
      <div className={cx("etc")}>블록체인 국가R&D 선정</div>
    </div>,
    <div key={6} className={cx("small_right")}>
      <div className={cx("content_year")}>
        <div>2018.07</div>
        <div>2018.12</div>
      </div>
      <div className={cx("etc")}>
        <div>세대융합 창업 캠퍼스 사업 선정</div>
        <div>블록체인 청년 혁신가 선정</div>
        <div>
          도약기술개발사업 선정
          <br className={cx("mobile")} /> (블록체인기술 개발 /
          중소기업정보진흥원)
        </div>
      </div>
    </div>,
    <div key={7} className={cx("small_right")}>
      <div className={cx("content_year")}>
        <div>2017.01</div>
        <div>2017.03</div>
      </div>
      <div className={cx("etc")}>
        <div>&apos;의료사고 발생 전 변호서 선임 방법&apos;특허 획득</div>
        <div>사회적 기업가 육성 사업 선정</div>
      </div>
    </div>,
    <div key={8} className={cx("small_right")}>
      <div className={cx("content_year")}>
        <div>2016.09</div>
        <div>2016.11</div>
      </div>
      <div className={cx("etc")}>
        <div>로디언즈 설립</div>
        <div>성균관대학교 창업드림캠프 최우수상</div>
      </div>
    </div>,
  ];
  return (
    <div className={cx("container")}>
      {mobile && (
        <div className={cx("symboll_wrap")}>
          <div className={cx("symboll")} />
        </div>
      )}
      <ComponentTop category="COMPANY" title="HISTORY" />
      <div className={cx("wrap")}>
        {!small && (
          <div className={cx("year_container")}>
            {year.map((item) => (
              <div key={item}>
                <div className={cx("year_wrap")}>
                  <div className={cx("normal")}>{item}</div>
                  <div className={cx("bold")}>{item}</div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className={cx("line_img")} />
        {!small ? (
          <>
            <div className={cx("title_wrap")}>
              {titles.map((title, idx) => (
                <div className={cx("title")} key={idx}>
                  {title}
                </div>
              ))}
            </div>
            <div className={cx("content_container")}>
              {contents.map((content, idx) => (
                <div className={cx("content_wrap")} key={idx}>
                  {content}
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className={cx("small_container")}>
            {contents.map((item, idx) => (
              <div
                className={cx(
                  "small_wrap",
                  idx === 2
                    ? "small_2021"
                    : idx === 3
                    ? "small_2020"
                    : idx === 4
                    ? "small_2019"
                    : idx === 6
                    ? "small_2017"
                    : idx === 7
                    ? "small_2016"
                    : ""
                )}
                key={idx}
              >
                <div className={cx("small_year")}>{year[idx]}</div>
                <div className={cx("small_title")}>{titles[idx]}</div>
                <div>{item}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
