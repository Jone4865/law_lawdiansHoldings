import styles from "./Service.module.scss";
import className from "classnames/bind";
import Image from "next/image";
import ServiceCard from "./ServiceCard/ServiceCard";
import router from "next/router";
import { useMediaQuery } from "react-responsive";

const cx = className.bind(styles);

type Props = {
  isPc: boolean;
};

export default function Service() {
  const titles = ["로디언즈", "미아펫", "그루", "두리안", "미리내검진", "찐부"];
  const content = [
    <>
      <span>&apos;로디언즈&apos;</span>는<br />
      성형 전 의료기록을 미리 기록하여
      <br />
      부작용을 예방하는 서비스입니다.
    </>,
    <>
      <span>&apos;미아펫&apos;</span>은 미리 반려동물의
      <br />
      비문(코 주름)을 등록하여
      <br />
      미아를 방지하는 서비스입니다.
    </>,
    <>
      <span>&apos;그루&apos;</span>는<br />
      누구나 편리하게 쓸 수 있는
      <br />
      가상 자산 블록체인 지갑 서비스입니다.
    </>,
    <>
      <span>&apos;두리안&apos;</span>은 블록체인 분산원장
      <br />
      기술이 적용된 포인트로
      <br />
      다양한 물건을 보다
      <br />
      저렴하게 구매 가능한
      <br />
      쇼핑몰 서비스입니다.
    </>,
    <>
      <span>&apos;미리내검진&apos;</span>은 건강검진을
      <br />
      쉽고 빠르게 예약할 수 있는
      <br />
      검진 예약 서비스입니다.
    </>,
    <>
      <span>&apos;찐부&apos;</span>는 내 소유의 자산을
      <br />
      소유자인증 제도를 통해
      <br />
      홍보가 가능한 허위매물 없는
      <br />
      부동산 정보 커뮤니티
      <br />
      사이트입니다.
    </>,
  ];
  const links = [
    "www.lawdians.com",
    "miapet.kr",
    "www.gru.lawdians.com",
    "www.durian.im",
    "www.mirinecare.com",
    "www.zzinbu.com",
  ];
  const isPc = useMediaQuery({
    query: "(min-width: 1520px) and (max-width: 10000px)",
  });

  return (
    <div className={cx("container")}>
      <div className={cx("title_wrap")}>
        <div className={cx("title")}>DEVELOPMENT SERVICE</div>
        <div className={cx("title_btn_wrap")}>
          <Image
            className={cx("title_btn")}
            width={isPc ? 35 : 25}
            height={isPc ? 35 : 25}
            alt="버튼 흰색"
            src="/img/body/btn_white.png"
            onClick={() => router.push("/business")}
          />
        </div>
      </div>
      <div className={cx("img_wrap")}>
        {titles?.map((title, idx) => (
          <div key={idx} className={cx("hover")}>
            <ServiceCard
              key={title}
              blockchain={idx < 4 ? true : false}
              title={title}
              content={content[idx]}
              bg={idx + 1}
              link={links[idx]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
