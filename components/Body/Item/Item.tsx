import styles from "./Item.module.scss";
import className from "classNames/bind";
import Content_Part from "./Content_Part/Content_Part";
import Image from "next/image";
import React from "react";

const cx = className.bind(styles);

type Props = {
  title: React.ReactNode;
  content: React.ReactNode;
  logo_color?: "white" | "orange";
};

export default function Item({ title, content, logo_color = "white" }: Props) {
  return (
    <div className={cx("container")}>
      <div className={cx("wrap")}>
        <Content_Part title={title} content={content} logo_color={logo_color} />
        <div className={cx("image_top")}>
          <Image src="/img/bg/bg1.png" fill alt="바디 이미지" />
        </div>
      </div>
    </div>
  );
}
