import { useState, useEffect } from "react";
import styles from "./Step_test.module.scss";
import className from "classNames/bind";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
const cx = className.bind(styles);

export default function Step_test() {
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
      <h1 className={cx("title")}>진행절차</h1>
      <span className={cx("sub_title")}>
        성공적인 비즈니스를 위하여 불필요한 비용과 과정은 줄이고,
        <br />
        맞춤 솔루션을 통해 작업이 이루어집니다.
      </span>
      <div className={cx("pointer_wrap")}>
        <div className={cx("pointer")}>
          <div className={cx("text-content")}>
            <span>01</span>
            <span>서비스 문의</span>
          </div>
        </div>
        <div className={cx("pointer")}>
          <div className={cx("text-content")}>
            <span>02</span>
            <span>분석 기획</span>
          </div>
        </div>
        <div className={cx("pointer")}>
          <div className={cx("text-content")}>
            <span>03</span>
            <span>전략수립</span>
          </div>
        </div>
        <div className={cx("pointer")}>
          <div className={cx("text-content")}>
            <span>04</span>
            <span>온라인마케팅 운영</span>
          </div>
        </div>
        <div className={cx("pointer")}>
          <div className={cx("text-content")}>
            <span>05</span>
            <span>운영 성과 보고</span>
          </div>
        </div>
      </div>
      <div className={cx("text_wrap")}>
        <span>
          서비스 선택
          <br />
          일정협의
        </span>
        <span>
          소비자 트렌드 분석
          <br />
          시장환경 분석
          <br />
          서비스 기획
        </span>
        <span>브랜드 마케팅 목표 설정</span>
        <span>수립된 마케팅 시작</span>
        <span>
          매월 정기적인 컨설팅 진행
          <br />
          브랜드 마케팅 목표 재설정
          <br />
          전략 보완 및 수정
        </span>
      </div>
    </div>
  );
}
