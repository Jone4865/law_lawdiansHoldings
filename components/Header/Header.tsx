import { use, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import router from "next/router";
import classNames from "classnames/bind";
import Image from "next/image";
import { Link } from "react-scroll";

const cx = classNames.bind(styles);

type Props = {
  setLocation: (location: number) => void;
  setModalState: (modal: boolean) => void;
  setContentClick: (position: boolean) => void;
};

export default function Header({
  setLocation,
  setModalState,
  setContentClick,
}: Props) {
  const [scrollY, setScrollY] = useState(false);

  const Buttons = [
    "홈",
    "역량",
    "블로그",
    "인스타",
    "페이스북",
    "유튜브",
    "IMC마케팅",
    "진행절차",
    "문의하기",
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
                  offset={button === "역량" ? -55 : 0}
                >
                  <span>{button}</span>
                </Link>
              </div>
            ))}
          </div>
          <Image
            className={styles.header_icon}
            src={"/img/icon/menu_white.svg"}
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
