import styles from "./Top.module.scss";
import className from "classnames/bind";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
const cx = className.bind(styles);

export default function Top() {
  const [mobile, setMobile] = useState<boolean>();
  const isMobile = useMediaQuery({
    query: "(min-width: 0px) and (max-width: 780px)",
  });

  useEffect(() => {
    if (isMobile) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [isMobile]);

  return (
    <div className={cx("container")}>
      <div className={cx("bg_wrap")}>
        <div className={cx("bg")} />
      </div>
      <div className={cx("text_container")}>
        <div className={cx("text_wrap")}>
          <h1 className={cx("title")}>
            <span>LAWDIANS</span>
            <span> HOLDINGS</span>
          </h1>
          <div>
            <div className={cx("content")}>
              <span className={cx("bold")}>세상</span>을 바꾸는{" "}
              <span className={cx("bold")}>비전</span>의 현실화
              <br /> <span className={cx("bold")}>세상</span>을 바꾸는{" "}
              <span className={cx("bold")}>기술</span>의 현실화
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
