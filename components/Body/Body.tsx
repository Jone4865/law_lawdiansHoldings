import styles from "./Body.module.scss";
import className from "classNames/bind";
import Content_Part from "./Content_Part/Content_Part";
import { title } from "process";
import CustomRatioImage from "../Elements/CustomRatioImage";
import Image from "next/image";

const cx = className.bind(styles);

export default function Body() {
  const btns = [
    "홈",
    "상품권 시세",
    "컨설팅",
    "서비스",
    "솔루션",
    "문의하기",
    "다운로드",
  ];

  const titles = [
    // <p key="1">
    <>
      <p>기업 상품권 판매 / </p>
      <p>IT 서비스 운영대행</p>
    </>,
    <p key="2">상품권 시세</p>,
    <p key="3">
      <p>기업 상품권</p>
      <p>운영대행 컨설팅</p>
    </p>,
    <p key="4">
      <p>기업 상품권</p>
      <p>운영대행 컨설팅</p>
    </p>,
    <p key="5">방배사 솔루션</p>,
    <p key="6">문의하기</p>,
  ];

  const contents = [
    <p key="1">
      각 분야별 전문가들이 서비스 운영과 마케팅 홍보를 대행해
      <br />
      IT 서비스의 운영을 컨설팅합니다.
    </p>,
    <p key="2">
      <p>아래의 가격표는 수량, 권종, 상품권의</p>
      <p>상태등의 따라 변경될 수 있습니다.</p>
    </p>,
    <p key="3">
      다년간 축척 된 글로벌 서비스 운영경험과 CS대응 노하우를
      <br />
      바탕으로 국내 IT 서비스의 해외진출을 컨설팅 해드립니다.
    </p>,
    <p key="4">
      방배사는 기업을 대상으로 한 상품권 판매 온라인 광고에 최적화된
      <br />
      통합마케팅 서비스를 제공합니다.
    </p>,
    <p key="5">
      방배사는 기업상품권 판매대행 서비스를 위해
      <br />
      다양한 마케팅 솔루션을 보유하고 있습니다.
    </p>,
    <p key="6">
      <p>기업상품권 판매대행에 대하여 궁금하신 점은</p>
      <p>무엇이든 물어보세요.</p>
    </p>,
  ];

  return (
    <div className={styles.item_container}>
      <ul className={styles.item_wrap}>
        <div className={cx("item")}>
          <Content_Part title={titles[0]} content={contents[0]} />
          <div className={cx("image")}>
            <Image src="/img/bg/bg1.png" fill alt="바디 이미지" />
          </div>
        </div>
      </ul>
    </div>
  );
}
