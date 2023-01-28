import router from "next/router";
import styles from "./ComponentTop.module.scss";
import className from "classnames/bind";
import Image from "next/image";

const cx = className.bind(styles);

export default function ComponentTop() {
  return <div className={cx("container")}></div>;
}
