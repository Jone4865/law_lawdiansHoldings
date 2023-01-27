import styles from "./Service.module.scss";
import className from "classnames/bind";
import Image from "next/image";
import ServiceCard from "./ServiceCard/ServiceCard";

const cx = className.bind(styles);

type Props = {
  isPc: boolean;
};

export default function Service({ isPc }: Props) {
  const titles = ["로디언즈", "미아펫", "그루", "두리안", "미리내검진", "찐부"];
  const content = [
    <>
      <span>'로디언즈'</span>는<br />
      성형 전 의료기록을 미리 기록하여
      <br />
      부작용을 예방하는 서비스입니다.
    </>,
    <>
      <span>'미아펫'</span>은 미리 반려동물의
      <br />
      비문(코 주름)을 등록하여
      <br />
      미아를 방지하는 서비스입니다.
    </>,
    <>
      <span>'그루'</span>는<br />
      누구나 편리하게 쓸 수 있는
      <br />
      가상 자산 블록체인 지갑 서비스입니다.
    </>,
    <>
      <span>'두리안'</span>은 다양한 물건을
      <br />
      보다 싸게 구매 가능한
      <br />
      지갑 쇼핑몰 서비스입니다.
    </>,
    <>
      <span>'미리내검진'</span>은 건강검진을
      <br />
      쉽고 빠르게 예약할 수 있는
      <br />
      검진 예약 서비스입니다.
    </>,
    <>
      <span>'찐부'</span>는 내 실 소유의
      <br />
      매물만 확인 또는 홍보 가능한
      <br />
      부동산 정보 커뮤니티 사이트입니다.
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
            src="/img/Body/btn_white.png"
          />
        </div>
      </div>
      <div className={cx("img_wrap")}>
        {titles.map((title, idx) => (
          <div className={cx("hover")}>
            <ServiceCard
              key={idx}
              blockchain={idx < 4 ? true : false}
              title={title}
              content={content[idx]}
              bg={idx + 1}
              link={links[idx]}
              isPc={isPc}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
