import styles from "./Introduce.module.scss";
import className from "classnames/bind";
import ComponentTop from "../../ComponentTop/ComponentTop";
import Footer from "../../Footer/Footer";

const cx = className.bind(styles);

export default function Introduce() {
  const years = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016];
  const testimonial = [
    "정보보호 관리체계 인증",
    "대한민국 국회 표창",
    "서울지방중소기업청 우수기업표창",
    "청년친화강소기업 선정",
  ];
  const contents = [
    <div key={1} className={cx("content")}>
      <div className={cx("mobile")}>2023</div>
      <span>청년친화 강소기업 선정</span>
    </div>,
    <div key={2} className={cx("content")}>
      <div className={cx("mobile")}>2022</div>
      <span>
        기술혁신형 중소기업 (Inno-Biz) 취득
        <br />
        산학연 협력 우수과제 표창
      </span>
    </div>,
    <div key={3} className={cx("content")}>
      <div className={cx("mobile")}>2021</div>
      <span>정보보호관리체계(ISMS) 인증 취득</span>
    </div>,
    <div key={4} className={cx("content")}>
      <div className={cx("mobile")}>2020</div>
      <span>
        산학연구개발 최우수 수상
        <br />
        청년혁신가 윤창기 대표 (국회 표창)
      </span>
    </div>,
    <div key={5} className={cx("content")}>
      <div className={cx("mobile")}>2019</div>
      <span>중소기업 기술개발사업 (5억원)</span>
    </div>,
    <div key={6} className={cx("content")}>
      <div className={cx("mobile")}>2018</div>
      <span>
        르호봇 세대융합 (약 9천만원)
        <br />
        산학연 개발사업 (약 1억 2천만원)
      </span>
    </div>,
    <div key={7} className={cx("content")}>
      <div className={cx("mobile")}>2017</div>
      <span>
        사회적기업가 육성사업 (2천만원)
        <br />
        성균관대학교 창업대회 1등 (5백만원)
      </span>
    </div>,
    <div key={8} className={cx("content")}>
      <div className={cx("mobile")}>2016</div>
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
            <div className={cx("mobile_top_wrap")}>
              <div className={cx("mobile_top")} />
            </div>
            <div className={cx("top_bottom")} />
          </div>
        </div>
        <div className={cx("bottom_wrap")}>
          <div className={cx("bottom")}>
            <div className={cx("title")}>
              로디언즈 홀딩스
              <div className={cx("mobile_title")}>
                <br />
              </div>
              자격 및 인증서
            </div>
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
          <div className={cx("mobile_bottom")} />
        </div>
      </div>
      <div className={cx("testimonial_container")}>
        <div className={cx("testimonial_part_title")}>
          로디언즈 홀딩스
          <br className={cx("mobile")} /> 인증 & 수상 이력
        </div>
        <div className={cx("testimonial_bottom")}>
          <div className={cx("testimonial_wrap")}>
            {testimonial.map((item, idx) => (
              <div className={cx("testimonial")} key={idx}>
                <div className={cx("testimonial_title")}>{item}</div>
                <div
                  className={cx("testimonial_img")}
                  style={{
                    backgroundImage: `url('/img/testimonial/testimonial${
                      idx + 1
                    }.png')`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
