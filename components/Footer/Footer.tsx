import router from "next/router";
import styles from "./Footer.module.scss";
import className from "classnames/bind";
import Image from "next/image";

const cx = className.bind(styles);

export default function Footer() {
  return (
    <div className={cx("container")}>
      <div className={cx("left_container")}>
        <div className={cx("left_wrap")}>
          <div className={cx("logo_wrap")}>
            <Image
              fill
              alt="푸터 로고"
              src="/img/logo/logo.png"
              onClick={() => router.push("/")}
            />
          </div>
          <div className={cx("information")}>
            <p>(주)로디언즈홀딩스 | 대표이사 윤창기 </p>
            <div className={cx("address_box")}>
              서울특별시 서초구 서초대로 25길 53 | 사업자번호 544-81-02278
            </div>
          </div>
          <p className={cx("reserved")}>
            ©LAWDIANSHOLDINGS 2023 All rights reserved.
          </p>
        </div>
      </div>
      <div className={cx("right_container")}>
        <div className={cx("right_wrap")}>
          <span className={cx("title")}>고객센터</span>
          <span className={cx("content")}>
            <a href="tel:02-1833-8604">02-1833-8604</a>
          </span>
          <span className={cx("email")}>lawdiholdings@naver.com</span>
        </div>
      </div>
    </div>
  );
}
