import { useEffect, useState } from "react";
import router from "next/router";
import { Link } from "react-scroll";

import styles from "./Header.module.scss";
import className from "classnames/bind";
import Image from "next/image";

const cx = className.bind(styles);

type Props = {
  setModalState: (modal: boolean) => void;
};

export default function Header({ setModalState }: Props) {
  const [scrollY, setScrollY] = useState(false);

  const Buttons = [
    "홈",
    "상품권 시세",
    "컨설팅",
    "서비스",
    "솔루션",
    "문의하기",
    "다운로드",
  ];

  useEffect(() => {
    (() => {
      window.addEventListener("scroll", () => {
        setScrollY(window.pageYOffset <= 50 ? false : true);
      });
    })();
  }, []);

  return (
    <div className={!scrollY ? styles.header_trans : styles.header_black}>
      <div className={styles.header_container}>
        <div className={styles.header_logo}>
          <div className={cx("image_wrap")}>
            <Image
              src={scrollY ? "/img/logo/logo_on.png" : "/img/logo/logo.png"}
              onClick={() => router.push("/")}
              alt="헤더 로고"
              fill
            />
          </div>
        </div>
        <div>
          <div className={styles.herder_buttons_wrap}>
            {Buttons.map((button, index) => (
              <div
                key={button}
                className={styles.header_hover}
                onClick={() => {
                  setModalState(false);
                }}
              >
                <Link
                  to={button}
                  spy={true}
                  smooth={true}
                  offset={
                    button === "역량" ? -55 : button === "문의하기" ? -75 : -50
                  }
                >
                  <span>{button}</span>
                </Link>
              </div>
            ))}
          </div>
          <Image
            className={styles.header_icon}
            src={
              scrollY && scrollY
                ? "/img/icon/menu_white.svg"
                : "/img/icon/menu_brown.svg"
            }
            onClick={() => setModalState(true)}
            width={20}
            height={16}
            alt="헤더 삼단바 아이콘"
          />
        </div>
      </div>
    </div>
  );
}
