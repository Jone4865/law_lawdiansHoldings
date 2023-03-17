import { useState } from "react";
import styles from "./Teams.module.scss";
import className from "classnames/bind";
import ComponentTop from "../ComponentTop/ComponentTop";
import Team from "./Team/Team";
import Footer from "../Footer/Footer";
import { Link } from "react-scroll";

const cx = className.bind(styles);

function Teams() {
  const Btns = [
    "전체",
    "경영진",
    "고문",
    "경영지원",
    "기획",
    "디자인",
    "개발",
    "인프라",
    "홍보",
  ];

  const BtnsSubName = [
    "Management",
    "Adviser",
    "Management Support",
    "Planning",
    "Design",
    "Development",
    "Infrastructure",
    "Promotion",
  ];

  const [nowAble, setNowAble] = useState("전체");
  const [dropDownVisible, setDropDownVisible] = useState(false);
  return (
    <div>
      <ComponentTop category="TEAMS" title="TEAMS" />
      <div className={cx("top")}>
        <div className={cx("word")} />
        <div className={cx("ment")}>
          <div className={cx("flex")}>
            <p className={cx("blue")}>로디언즈홀딩스</p>가 만들어 가는 놀라운
            변화는
          </div>
          <div className={cx("flex")}>
            <p className={cx("blue")}>사람</p>으로부터 나옵니다.
          </div>
        </div>
      </div>
      <div className={cx("mobile_img")} />
      <div className={cx("title_wrap")}>
        <div className={cx("title")}>
          <div className={cx("quote_up")} />
          <div className={cx("title_ment")}>우리 팀원들을 소개해 드릴게요!</div>
          <div className={cx("quote_wrap")}>
            <div className={cx("quote_down")} />
          </div>
        </div>
      </div>
      <div className={cx("btns_container")}>
        <div className={cx("btns_wrap")}>
          {Btns.map((item) => (
            <div
              key={item}
              className={cx(nowAble === item ? "btn_able" : "btn")}
            >
              <Link
                to={item}
                spy={true}
                smooth={true}
                onClick={() => setNowAble(item)}
              >
                {item}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className={cx("dropdown_container")}>
        <div
          onClick={() => setDropDownVisible(true)}
          className={cx("dropdown_wrap")}
        >
          <p>전체</p>
          <div className={cx("arrow")} />
        </div>
        {dropDownVisible && (
          <div className={cx("dropdown_mask")}>
            {Btns.map((item) => (
              <Link key={item} to={item} spy={true} smooth={true} offset={-30}>
                <div
                  style={{ border: item === "홍보" ? "none" : "" }}
                  onClick={() => {
                    setNowAble(item);
                    setDropDownVisible(false);
                  }}
                  className={cx("dropdown_btn")}
                >
                  {item}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className={cx("bottom")}>
        <div className={cx("lawfamily")} />
        <div id="경영진" />
        <Team partKo={Btns[1]} partEn={BtnsSubName[0]} />
        <div id="고문" />
        <Team
          partKo={Btns[2]}
          partEn={BtnsSubName[1]}
          lineTwo
          lineOneCount={3}
        />
        <div id="경영지원" />
        <Team
          partKo={Btns[3]}
          partEn={BtnsSubName[2]}
          lineTwo
          lineOneCount={4}
        />
        <div id="기획" />
        <Team
          partKo={Btns[4]}
          partEn={BtnsSubName[3]}
          lineTwo
          lineOneCount={4}
        />
        <div id="디자인" />
        <Team partKo={Btns[5]} partEn={BtnsSubName[4]} />
        <div id="개발" />
        <Team
          partKo={Btns[6]}
          partEn={BtnsSubName[5]}
          lineTwo
          lineOneCount={4}
        />
        <div id="인프라" />
        <Team partKo={Btns[7]} partEn={BtnsSubName[6]} />
        <div id="홍보" />
        <Team
          partKo={Btns[8]}
          partEn={BtnsSubName[7]}
          lineTwo
          lineOneCount={2}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Teams;
