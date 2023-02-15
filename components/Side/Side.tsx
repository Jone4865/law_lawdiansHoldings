import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./Side.module.scss";
import className from "classnames/bind";

const cx = className.bind(styles);

type Props = {
  modal: boolean;
  setModalState: (modal: boolean) => void;
};

function Side({ modal, setModalState }: Props) {
  const [companyMore, setCompanyMore] = useState(false);
  const [commuMore, setCommuMore] = useState(false);

  const router = useRouter();
  const Buttons = ["HOME", "COMPANY", "TEAMS", "BUSINESS", "COMMUNITY"];

  useEffect(() => {
    const htmlEle = document?.getElementsByTagName("html").item(0);
    if (modal) {
      if (htmlEle) {
        htmlEle.style.overflow = "hidden";
      }
    } else {
      if (htmlEle) {
        htmlEle.style.overflow = "unset";
      }
    }
  }, [modal]);

  const clickHandle = (button: string) => {
    setCommuMore(false);
    setCompanyMore(false);
    if (button === "HOME") {
      router.push("/");
      setModalState(false);
    } else if (button === "COMPANY") {
      setCompanyMore(!companyMore);
    } else if (button === "BUSINESS") {
      router.push("/business");
      setModalState(false);
    } else if (button === "TEAMS") {
      alert("준비중입니다.");
    } else {
      setCommuMore(!commuMore);
    }
  };
  return (
    <div
      className={`${!modal ? styles.side_none : ""} ${styles.side_contain}`}
      onClick={() => {
        setModalState(false);
      }}
    >
      <div
        className={`${styles.side_slideout} ${styles.side_wrap}`}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className={cx("exe_wrap")}>
          <div className={cx("exe")} onClick={() => setModalState(false)} />
        </div>
        {Buttons.map((button) => (
          <>
            <div
              onClick={() => {
                clickHandle(button);
              }}
              key={button}
              className={cx("side_hover")}
            >
              <span>{button}</span>
              {button === "COMPANY" ? (
                companyMore ? (
                  <div className={cx(`up`)} />
                ) : (
                  <div className={cx(`down`)} />
                )
              ) : button === "COMMUNITY" ? (
                commuMore ? (
                  <div className={cx(`up`)} />
                ) : (
                  <div className={cx(`down`)} />
                )
              ) : (
                ""
              )}
            </div>
            {button === "COMPANY" && companyMore && (
              <div className={cx("company")}>
                <span
                  onClick={() => {
                    setModalState(false);
                    router.push("/company/greetings");
                    setCommuMore(false);
                    setCompanyMore(false);
                  }}
                >
                  인사말
                </span>
                <span
                  onClick={() => {
                    setModalState(false);
                    router.push("/company/introduce");
                    setCommuMore(false);
                    setCompanyMore(false);
                  }}
                >
                  회사소개
                </span>
                <span
                  onClick={() => {
                    setModalState(false);
                    router.push("/company/history");
                    setCommuMore(false);
                    setCompanyMore(false);
                  }}
                >
                  회사연혁
                </span>
                <span
                  onClick={() => {
                    setModalState(false);
                    router.push("/company/BICI");
                    setCommuMore(false);
                    setCompanyMore(false);
                  }}
                >
                  BI/CI
                </span>
                <span
                  onClick={() => {
                    setModalState(false);
                    router.push("/company/location");
                    setCommuMore(false);
                    setCompanyMore(false);
                  }}
                >
                  찾아오시는 길
                </span>
              </div>
            )}
            {button === "COMMUNITY" && commuMore && (
              <div className={cx("community")}>
                <span
                  onClick={() => {
                    setModalState(false);
                    router.push("/community/news");
                    setCommuMore(false);
                    setCompanyMore(false);
                  }}
                >
                  언론보도
                </span>
                <span
                  onClick={() => {
                    setModalState(false);
                    router.push("/community/inquiry");
                    setCommuMore(false);
                    setCompanyMore(false);
                  }}
                >
                  문의
                </span>
              </div>
            )}
          </>
        ))}
        <div className={cx("symboll")} />
      </div>
    </div>
  );
}

export default Side;
