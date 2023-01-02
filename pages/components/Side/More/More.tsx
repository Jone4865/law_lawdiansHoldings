import { useState } from "react";
import styles from "./More.module.scss";

type Props = {
  more: string;
  setMore: (more: string) => void;
  title: string;
};

function More({ more, setMore, title }: Props) {
  return (
    <div>
      <span
        className={styles.more}
        onClick={() => setMore(more != title ? title : "")}
      >
        <span>{title}</span>
        {more === title ? (
          <img src="/img/icon/arrow-top.png" />
        ) : (
          <img src="/img/icon/arrow-bottom.png" />
        )}
      </span>

    </div>
  );
}

export default More;
