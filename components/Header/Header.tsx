import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import router from "next/router";

import "animate.css";

type Props = {
  setLocation: (location: number) => void;
  modalSet: (modal: boolean) => void;
  positionSet: (position: boolean) => void;
};

export default function Header({ setLocation, modalSet, positionSet }: Props) {
  const Buttons = ["홈", "차별성", "청약하기", "마켓거래", "배당수입"];
  const [scrollY, setScrollY] = useState(false);

  useEffect(() => {
    (() => {
      window.addEventListener("scroll", () => {
        setScrollY(window.pageYOffset <= 50 ? false : true);
      });
    })();
  }, []);

  return (
    <div className={!scrollY ? styles.header_trans : styles.header_black}>
      <div className={`${styles.header_body}`}>
        <div className={styles.logo}>
          <img src={"/img/logo/logo.png"} onClick={() => router.push("/")} />
        </div>
        <div className={styles.herder_right}>
          <div className={styles.header_menu}>
            {Buttons.map((button, index) => (
              <div
                key={button}
                className={`${styles.headerhover}`}
                onClick={() => {
                  setLocation(index);
                  modalSet(false);
                  positionSet(true);
                }}
              >
               <span>{button}</span>
              </div>
            ))}
          </div>
          <img
            className={styles.menu_icon}
            src={"/img/icon/menu_white.svg"}
            onClick={() => modalSet(true)}
          />
        </div>
      </div>
    </div>
  );
}
