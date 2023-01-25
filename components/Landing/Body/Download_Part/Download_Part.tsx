import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import styles from "./Download_Part.module.scss";
import className from "classnames/bind";
import Image from "next/image";

const cx = className.bind(styles);

export default function Download_Part() {
  return (
    <div className={cx("container")}>
      <ToastContainer />
      <div className={cx("wrap")}>
        <div className={cx("left")}>
          <div className={cx("logo")}>
            <Image src="/img/Download_Part/logo.png" fill alt="로고" />
          </div>
        </div>
        <div className={cx("right")}>
          <div
            className={cx("app")}
            onClick={() =>
              toast.warning("준비중입니다!", {
                position: "top-center",
              })
            }
          >
            <Image src="/img/Download_Part/app.png" fill alt="apple" />
          </div>
          <div
            className={cx("google")}
            onClick={() =>
              toast.warning("준비중입니다!", {
                position: "top-center",
              })
            }
          >
            <Image src="/img/Download_Part/google.png" fill alt="google" />
          </div>
        </div>
      </div>
      <div className={cx("human_wrap")}>
        <Image
          src="/img/Download_Part/human.png"
          width={226.1}
          height={165}
          alt="사람 이미지"
        />
      </div>
    </div>
  );
}
