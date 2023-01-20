import styles from "./Item.module.scss";
import className from "classnames/bind";
import Content_Part from "./Content_Part/Content_Part";
import Image from "next/image";
import React from "react";

const cx = className.bind(styles);

type Props = {
  title: React.ReactNode;
  content: React.ReactNode;
  img_name: string;
  logo_color?: "white" | "orange";
  item_name?: string;
};

export default function Item({
  title,
  content,
  img_name,
  logo_color = "white",
  item_name,
}: Props) {
  return (
    <div
      className={cx(
        logo_color === "white" ? "container_white" : "container_orange"
      )}
    >
      <div className={cx("content_wrap")}>
        <Content_Part title={title} content={content} logo_color={logo_color} />
      </div>
      <div className={cx(`image_${item_name}`)}>
        <Image src={`/img/body/${img_name}.png`} fill alt="바디 이미지" />
      </div>
    </div>
  );
}
