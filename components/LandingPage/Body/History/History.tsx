import { useEffect, useState } from "react";
import styles from "./History.module.scss";
import className from "classnames/bind";
import Image from "next/image";
const cx = className.bind(styles);

type Props = {
  isPc: boolean;
};

export default function History({ isPc }: Props) {
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (isPc) {
      setClick(false);
    }
  }, [isPc]);

  return (
    <div className={cx("container")}>
      <div className={cx("logo")} />
      <div className={cx("wrap")}>
        <div className={cx(!click ? "bg" : "bg2")}>
          {isPc ? (
            <Image
              alt="랜딩페이지 pc 히스토리"
              src={"/img/body/bg2.png"}
              fill
              priority
            />
          ) : (
            <Image
              alt="랜딩페이지 모바일 히스토리"
              src={!click ? "/img/body/bg2_m.png" : "/img/body/bg2_2.png"}
              fill
              priority
            />
          )}
        </div>
        <div className={cx("text_wrap")}>
          <h1 className={cx("title")}>HISTORY</h1>
          <div className={cx("content")}>
            <span>2016</span>
            <div className={cx("line")} />
            <span>2023</span>
          </div>
        </div>
      </div>
      <div className={cx("btn_wrap")}>
        <button className={cx("btn")} onClick={() => setClick((prev) => !prev)}>
          {!click ? "더보기" : "접기"}
        </button>
      </div>
    </div>
  );
}
