import React from "react";
import className from "classnames/bind";
import styles from "./ServiceCard.module.scss";
import Image from "next/image";
import Link from "next/link";
const cx = className.bind(styles);

type Props = {
  blockchain: boolean;
  title: string;
  content: React.ReactNode;
  bg: number;
  link: string;
  isPc: boolean;
};

export default function ServiceCard({
  blockchain,
  title,
  content,
  bg,
  link,
  isPc,
}: Props) {
  return (
    <Link target="_blank" href={`https://${link}`}>
      <div
        className={cx("img")}
        style={{
          backgroundImage: `url(/img/Service/bg${bg}${isPc ? "" : "_m"}.png)`,
        }}
      >
        <div className={cx("wrap")}>
          <div className={cx("blockchain")}>
            {blockchain && (
              <Image
                width={41}
                height={45}
                src="/img/Service/블록체인.png"
                alt="블록체인"
              />
            )}
          </div>
          <h1 className={cx("title")}>{title}</h1>
          <div className={cx("content_wrap")}>{content}</div>

          <div className={cx("btn")}>
            <span className={cx("homepage")}>HOMEPAGE</span>
            <Image
              src="/img/Service/arrow.png"
              alt="화살표"
              width={isPc ? 9 : 7}
              height={isPc ? 16 : 11}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
