import styles from "./HistoryContent.module.scss";
import className from "classnames/bind";
import React from "react";
const cx = className.bind(styles);

type Props = {
  year: number;
  title: string;
  month: React.ReactNode;
  content: React.ReactNode;
};

export default function HistoryContent({ year, title, month, content }: Props) {
  return (
    <div className={cx("container")}>
      <div className={cx("title_wrap")}>
        {year}
        <br />
        {title}
      </div>
      <div className={cx("content_wrap")}>
        <div className={cx("month")}>{month}</div>
        <div className={cx("content")}>{content}</div>
      </div>
    </div>
  );
}
