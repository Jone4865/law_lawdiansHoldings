import styles from "./Contect.module.scss";
import className from "classnames/bind";
import { KakaoMap } from "../KakaoMap/KakaoMap";
import Image from "next/image";

const cx = className.bind(styles);

export default function Contect() {
  return (
    <div className={cx("container")}>
      <div className={cx("left")}>
        <div className={cx("content_wrap")}>
          <div className={cx("title_wrap")}>
            <h1 className={cx("title")}>
              GET IN TOUCH
              <br />
              WITH US
            </h1>
            <p className={cx("title_ment")}>contact for us here</p>
            <div className={cx("line")} />
          </div>
          <div className={cx("adress_wrap")}>
            <h5 className={cx("adress_title")}>주소</h5>
            <span className={cx("adress_content")}>
              서울특별시 서초구 서초대로 25길 53,
              <br />
              53, Seocho-daero 25-gil, Seocho-gu, Seoul,
              <br className={cx("mobile")} /> Republic of Korea
            </span>
          </div>
        </div>
        <div className={cx("logo_wrap")}>
          <div className={cx("logo")}>
            <Image src="/img/Contect/logo.png" alt="contect 로고" fill />
          </div>
        </div>
      </div>
      <div className={cx("map_wrap")}>
        <KakaoMap />
      </div>
    </div>
  );
}
