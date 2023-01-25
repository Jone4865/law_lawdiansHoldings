import { useState } from "react";
import styles from "./Test.module.scss";
import className from "classnames/bind";
import News from "../News/News";

const cx = className.bind(styles);

export default function Test() {
  return (
    <div className={cx("container")}>
      <div className="layout">
        <div className={cx("wrap")}>
          <div className={cx("body")}>dd</div>
          <News />
        </div>
      </div>
    </div>
  );
}
