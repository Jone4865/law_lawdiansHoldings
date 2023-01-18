import { useEffect, useRef, useState } from "react";
import styles from "./Items.module.scss";
import "animate.css";
import className from "classNames/bind";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const cx = className.bind(styles);

type Props = {
  title: string;
  sub_title: string;
  content_top: React.ReactNode;
  content_bottom: React.ReactNode;
  name: string;
  index: number;
};

export default function Items({
  title,
  sub_title,
  content_top,
  content_bottom,
  name,
  index,
}: Props) {
  const [pc, setPc] = useState(false);
  const isPc = useMediaQuery({
    query: "(min-width: 760px) and (max-width: 1920px)",
  });

  useEffect(() => {
    if (isPc) {
      setPc(true);
    } else {
      setPc(false);
    }
  }, [isPc]);

  return (
    <div className={cx("container")}>
      <div className={cx(`top_container${name}`)}>
        <div className={cx(`top_wrap${name}`)}>0{index + 1}</div>
      </div>
      <div className={cx(`bottom${name}`)}>
        <div className={cx("left")}>
          <div className={cx("title")}>
            <span>{title}</span>
            {title === "IMC 마케팅" ? (
              <span className={cx("IMC")}>(통합 마케팅 커뮤니케이션)</span>
            ) : (
              ""
            )}
          </div>
          <span className={cx("sub_title")}>{sub_title}</span>
          <span className={cx("content_top")}>{content_top}</span>
          <span className={cx("content_bottom")}>{content_bottom}</span>
        </div>
        <div className={cx(`right${name}`)}>
          <Image
            src={
              pc
                ? `/img/bg/bg${index + 1}.png`
                : `/img/bg/bg${index + 1}_m.webp`
            }
            fill
            alt="dadw"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}