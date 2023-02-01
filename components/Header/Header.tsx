import { useEffect, useState } from "react";
import router from "next/router";
import styles from "./Header.module.scss";
import className from "classnames/bind";
import Image from "next/image";
import { useRouter } from "next/router";

const cx = className.bind(styles);

type Props = {
  setModalState: (modal: boolean) => void;
};

export default function Header({ setModalState }: Props) {
  const router = useRouter();
  const [scrollY, setScrollY] = useState(false);
  const [companyView, setCompanyView] = useState(false);
  const [communityView, setCommunityView] = useState(false);

  const Buttons = ["HOME", "COMPANY", "BUSINESS", "COMMUNITY"];
  const path = ["/", "/company/greetings", "/business", "/community/news"];

  const companyDropDown = [
    "인사말",
    "회사소개",
    "회사연혁",
    "BI/CI",
    "찾아오시는 길",
  ];
  const companyPath = ["greetings", "introduce", "history", "BICI", "location"];

  const communityPath = ["news", "inquiry"];
  const communityDropDown = ["언론보도", "문의"];
  useEffect(() => {
    (() => {
      window.addEventListener("scroll", () => {
        setScrollY(window.pageYOffset <= 20 ? false : true);
      });
    })();
  }, []);
  const now = router.pathname.split("/")[1].toUpperCase();

  return (
    <div className={!scrollY ? styles.header_black : styles.header_white}>
      <div className={styles.header_container}>
        <div className={styles.header_logo}>
          <div
            className={cx("image_wrap")}
            onClick={() => router.push("/")}
          ></div>
        </div>
        <div>
          <div className={styles.herder_buttons_wrap}>
            {Buttons.map((button, idx) => (
              <div
                key={button}
                className={cx(`dropdown_wrap`)}
                onClick={() => {
                  setModalState(false);
                }}
              >
                <div
                  key={button}
                  className={cx(
                    `header_hover`,
                    now === button ? "bold" : "",
                    now === "" && button === "HOME" && "bold"
                  )}
                  onMouseEnter={() => {
                    button === "COMPANY"
                      ? setCompanyView(true)
                      : button === "COMMUNITY"
                      ? setCommunityView(true)
                      : "";
                  }}
                >
                  <p
                    onClick={() => router.push(`${path[idx]}`)}
                    className={cx(
                      `${
                        !scrollY
                          ? companyView && button === "COMPANY"
                            ? "bold_white"
                            : communityView && button === "COMMUNITY"
                            ? "bold_white"
                            : "hover_white"
                          : companyView && button === "COMPANY"
                          ? "bold_black"
                          : communityView && button === "COMMUNITY"
                          ? "bold_black"
                          : "hover_black"
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
                        <div
                          key={idx}
                          className={cx("active")}
                          onClick={() => {
                            router.push(`/company/${companyPath[idx]}`);
                            setCompanyView(false);
                          }}
                        >
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
                        <div
                          key={idx}
                          className={cx("active")}
                          onClick={() => {
                            router.push(`/community/${communityPath[idx]}`);
                            setCommunityView(false);
                          }}
                        >
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
