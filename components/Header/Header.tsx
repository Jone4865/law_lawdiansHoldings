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
  const [companyView, setCompanyView] = useState(false);
  const [communityView, setCommunityView] = useState(false);

  const Buttons = ["HOME", "COMPANY", "BUSINESS", "COMMUNITY"];
  const companyDropDown = [
    "인사말",
    "회사소개",
    "회사연혁",
    "BI/CI",
    "찾아오시는 길",
  ];
  const communityDropDown = ["언론보도", "문의"];
  useEffect(() => {
    (() => {
      window.addEventListener("scroll", () => {
        setScrollY(window.pageYOffset <= 20 ? false : true);
      });
    })();
  }, []);

  return (
    <div className={!scrollY ? styles.header_black : styles.header_white}>
      <div className={styles.header_container}>
        <div className={styles.header_logo}>
          <div className={cx("image_wrap")}>
            <Image
              src={"/img/logo/logo.png"}
              onClick={() => router.push("/")}
              alt="헤더 로고"
              fill
            />
          </div>
        </div>
        <div>
          <div className={styles.herder_buttons_wrap}>
            {Buttons.map((button, idx) => (
              <div key={idx} className={cx(`dropdown_wrap`)}>
                <div
                  key={button}
                  className={styles.header_hover}
                  onMouseEnter={() => {
                    button === "COMPANY"
                      ? setCompanyView(true)
                      : button === "COMMUNITY"
                      ? setCommunityView(true)
                      : "";
                  }}
                  onClick={() => {
                    setModalState(false);
                  }}
                >
                  <p
                    onClick={() =>
                      button === "HOME"
                        ? router.push("/")
                        : button === "BUSINESS"
                        ? router.push("/business")
                        : ""
                    }
                    className={cx(
                      `${
                        companyView && button === "COMPANY"
                          ? "bold"
                          : communityView && button === "COMMUNITY"
                          ? "bold"
                          : ""
                      }`
                    )}
                  >
                    {button}
                  </p>
                </div>
                {button === "COMPANY" && companyView && (
                  <div
                    onMouseLeave={() => {
                      setCompanyView(false);
                    }}
                    className={cx(`${button}_dropdown_container`)}
                  >
                    <div className={cx(`${button}_mask`)} />
                    <div className={cx("dropdown_content_wrap")}>
                      {companyDropDown.map((item, idx) => (
                        <div key={idx} className={cx("active")}>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {button === "COMMUNITY" && communityView && (
                  <div
                    onMouseLeave={() => {
                      setCommunityView(false);
                    }}
                    className={cx(`${button}_dropdown_container`)}
                  >
                    <div className={cx(`${button}_mask`)} />
                    <div className={cx("dropdown_content_wrap")}>
                      {communityDropDown.map((item, idx) => (
                        <div key={idx} className={cx("active")}>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
