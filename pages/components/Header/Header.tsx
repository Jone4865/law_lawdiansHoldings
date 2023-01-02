import { useEffect, useState } from "react";
import styles from "./Header.module.scss";

type Props = {
  setLocation: (location: number) => void;
  modalSet: (modal: boolean) => void;
  modal: boolean;
};

export default function Header({ setLocation, modalSet, modal }: Props) {
  const [scrollY, setScrollY] = useState(false);
  
  const Buttons = [
    "홈",
    "안심병원",
    "안심케어",
    "NEWS",
    "글로벌 안심의료예약플랫폼",
    "고객센터",
    "온라인 제휴문의",
  ];

  useEffect(() => {
    (() => {
      window.addEventListener("scroll", () => {
        setScrollY(window.pageYOffset <= 50 ? false : true);
      });
    })();
  },[]);

  return (
    <div className={scrollY ? styles.header_white : styles.header_trans}>
      <div className={scrollY ? styles.logo_blue : styles.logo_white}>
        <img
          src={scrollY ? "/img/logo/logo_blue.png" : "/img/logo/logo_white.png"}
        />
      </div>
      <div className={styles.herder_right}>
        <div className={styles.header_menu}>
          {Buttons.map((button, idx) => (
            <div
              key={button}
              className={styles.hover}
              onClick={() => setLocation(idx)}
            >
              {button}
            </div>
          ))}
          <div className={scrollY ? styles.sign_blue : styles.sign_trans}>
            <div className={styles.hover}>회원가입</div>
            <div className={scrollY ? styles.line_blue : styles.line_white} />
            <div className={styles.hover}>로그인</div>
          </div>
        </div>
        <img
          className={styles.menu_icon}
          src={scrollY ? "/img/icon/menu_blue.png" : "/img/icon/menu_white.svg"}
          onClick={()=>modalSet(true)}
        />
      </div>
    </div>
  );
}
