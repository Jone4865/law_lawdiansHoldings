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
  const [pc, setPc] = useState(false);
  useEffect(() => {
    setPc(isPc);
  }, [isPc]);
  return (
    <Link draggable target="_blank" href={`https://${link}`}>
      <div
        className={cx("img")}
        style={{
          backgroundImage: `url(/img/Service/bg${bg}${isPc ? "" : "_m"}.png)`,
        }}
      >
        <div className={cx("wrap")}>
          <h1 className={cx("title")}>
            <div className={cx("title_wrap")}>
              <Image
                alt="서비스 이미지 아이콘"
                src={`/img/ServiceIcon/${title}.webp`}
                width={!isPc ? 50 : 60}
                height={!isPc ? 50 : 60}
              />
              <div className={cx("service_name")}>{title}</div>
            </div>
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
          </h1>
          <div className={cx("bottom_wrap")}>
            <div className={cx("content_wrap")}>{content}</div>
            <div className={cx("btn")}>
              <span className={cx("homepage")}>HOMEPAGE</span>
              <Image
                src={pc ? "/img/Service/arrow.png" : "/img/body/btn_white.png"}
                alt="화살표"
                width={pc ? 9 : 31}
                height={pc ? 16 : 31}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
