import React, { useEffect, useState } from "react";
import className from "classnames/bind";
import styles from "./ServiceCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
const cx = className.bind(styles);

type Props = {
  blockchain: boolean;
  title: string;
  content: React.ReactNode;
  bg: number;
  link: string;
};

export default function ServiceCard({
  blockchain,
  title,
  content,
  bg,
  link,
}: Props) {
  const isPc = useMediaQuery({
    query: "(min-width: 1520px) and (max-width: 10000px)",
  });
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
          <h1 className={cx("title")}>
            <Image
              alt="서비스 이미지 아이콘"
              src={`/img/ServiceIcon/${title}.webp`}
              width={!isPc ? 50 : 63}
              height={!isPc ? 50 : 63}
            />
            <div>{title}</div>
          </h1>
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
