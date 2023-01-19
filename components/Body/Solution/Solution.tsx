import styles from "./Solution.module.scss";
import className from "classnames/bind";
import Content_Part from "../Item/Content_Part/Content_Part";
import Image from "next/image";
import React from "react";

const cx = className.bind(styles);

type Props = {
  title: React.ReactNode;
  content: React.ReactNode;
  logo_color: "white" | "orange";
};

export default function Solution({ title, content, logo_color }: Props) {
  const images = ["bg1", "bg2", "bg3", "bg4", "bg5", "bg6"];
  const titles = [
    "웹 로그분석",
    "리포트",
    "경쟁사 분석",
    "부정 클릭 방지",
    "실시간 모니터링",
    "매출 분석",
  ];
  const contents = [
    <span key="1" className={cx("content")}>
      Google Analytics 툴을 활용하여
      <br />
      웹사이트 방문 및 마케팅 노출 수를
      <br />
      분석합니다.
    </span>,
    <span key="2" className={cx("content")}>
      일정 주기별로 노출수, 클릭수 등의
      <br />
      유효한 데이터를 보고서로 작성하여
      <br />
      리포트 해드립니다.
    </span>,
    <span key="3" className={cx("content")}>
      글로벌 온라인 마켓에서 경쟁사의
      <br />
      동향을 파악하여 차별화된 아이디어로
      <br />
      마케팅을 실시합니다.
    </span>,
    <span key="4" className={cx("content")}>
      실시간부정클릭방지 솔루션을 통한
      <br />
      모니터링을 진행합니다.
    </span>,
    <span key="5" className={cx("content")}>
      365일 24시간 실시간 모니터링 시스템을
      <br />
      통하여 실시간 이슈를 파악합니다.
    </span>,
    <span key="6" className={cx("content")}>
      ROI 분석을 통해 순수익을 분석하고,
      <br />
      효율적인 마케팅 예산이 편성될 수 있도록 하며
      <br />
      리스크를 줄입니다.
    </span>,
  ];
  return (
    <div className={cx("container")}>
      <Content_Part title={title} content={content} logo_color={logo_color} />
      <div className={cx("image_wrap")}>
        <div className={cx("image")}>
          <Image
            src="/img/solution/bg1.png"
            fill
            alt="바디 이미지"
            quality={100}
          />
        </div>
        <div className={cx("text_wrap")}>
          <span className={cx("title")}>{titles[0]}</span>
          {contents[0]}
        </div>
      </div>
    </div>
  );
}
