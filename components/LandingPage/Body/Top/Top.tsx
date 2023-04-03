import styles from "./Top.module.scss";
import className from "classnames/bind";
import Image from "next/image";
const cx = className.bind(styles);

export default function Top() {
  return (
    <div className={cx("container")}>
      <div className={cx("bg_wrap")}>
        <Image
          alt="랜딩페이지 탑 이미지"
          src={"/img/body/bg1.png"}
          fill
          priority
          loading="eager"
        />
      </div>
      <div className={cx("text_container")}>
        <div className={cx("text_wrap")}>
          <h1 className={cx("title")}>
            <span>LAWDIANS</span>
            <span> HOLDINGS</span>
          </h1>
          <div>
            <div className={cx("content")}>
              <span className={cx("bold")}>세상</span>을 바꾸는
              <span className={cx("bold")}>비전</span>의 현실화
              <br /> <span className={cx("bold")}>세상</span>을 바꾸는
              <span className={cx("bold")}>기술</span>의 현실화
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
