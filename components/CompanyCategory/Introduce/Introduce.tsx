import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./Introduce.module.scss";
import className from "classnames/bind";
import ComponentTop from "../../../components/ComponentTop/ComponentTop";
import Footer from "../../Footer/Footer";

const cx = className.bind(styles);

export default function Introduce() {
  const years = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016];
  const contents = [
    <div>
      <span>청년친화 강소기업 선정</span>
    </div>,
    <div>
      <span>
        기술혁신형 중소기업 (Inno-Biz) 취득
        <br />
        산학연 협력 우수과제 표창
      </span>
    </div>,
    <div>
      <span>정보보호관리체계(ISMS) 인증 취득</span>
    </div>,
    <div>
      <span>
        산학연구개발 최우수 수상
        <br />
        청년혁신가 윤창기 대표 (국회 표창)
      </span>
    </div>,
    <div>
      <span>중소기업 기술개발사업 (5억원)</span>
    </div>,
    <div>
      <span>
        르호봇 세대융합 (약 9천만원)
        <br />
        산학연 개발사업 (약 1억 2천만원)
      </span>
    </div>,
    <div>
      <span>
        사회적기업가 육성사업 (2천만원)
        <br />
        성균관대학교 창업대회 1등 (5백만원)
      </span>
    </div>,
    <div>
      <span>
        대구대학교 (1천만원)
        <br />
        관광공사 예비관광벤처 (3천만원)
      </span>
    </div>,
  ];
  return (
    <div className={cx("container")}>
      <ComponentTop category="COMPANY" title="INTRODUCE" />
      <div className={cx("wrap")}>
        <div className={cx("top_wrap")}>
          <div className={cx("top")}>
            <div className={cx("top_top")} />
            <div className={cx("top_center")}>
              <div className={cx("line_one")}>
                <p className={cx("bold")}>로디언즈</p>는
                <p className={cx("blue")}> 고도의 블록체인 기술</p>과
              </div>
              <div className={cx("line_two")}>
                <p className={cx("blue")}>플랫폼 개발 및 운영 경험</p>을
                바탕으로,
              </div>
              <p className={cx("line_three")}>해킹의 위험이 없는</p>
              <div className={cx("line_four")}>
                <p className={cx("bold")}>
                  안전하고 신뢰할 수 있는 플랫폼 서비스를 제공
                </p>
                합니다.
              </div>
            </div>
            <div className={cx("top_bottom")} />
          </div>
        </div>
        <div className={cx("bottom")}>
          <div className={cx("title")}>로디언즈 홀딩스 자격 및 인증서</div>
          <div className={cx("content_container")}>
            <div className={cx("year")}>
              {years.map((year) => (
                <div key={year} className={cx("year_content")}>
                  {year}
                </div>
              ))}
            </div>
            <div className={cx("line")} />
            <div className={cx("content_wrap")}>{contents}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
