import { useState } from "react";
import styles from "./MoreItem.module.scss";

type Props = {
  items: string[];
  more: string;
  title: string;
};

function More({ items, more, title }: Props) {
  return (
    <span className={styles.more_inside}>
      {more === title
        ? items?.map((item, index) => (
            <span className={styles.more_item} key={index}>
              <span>ㄴ{item}</span>
            </span>
          ))
        : ""}
    </span>
  );
}

export default More;
