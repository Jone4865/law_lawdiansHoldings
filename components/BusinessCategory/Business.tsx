import styles from "./Business.module.scss";
import className from "classnames/bind";
import ComponentTop from "../ComponentTop/ComponentTop";
import BusinessCard from "./BusinessCard/BusinessCard";
import Footer from "../Footer/Footer";
import { useRef, useState } from "react";

const cx = className.bind(styles);

export default function Business() {
  const title = ["로디언즈", "미아펫", "그루", "두리안", "미리내검진", "찐부"];
  const sub_title = [
    <span key={1}>
      블록체인 기반 의료정보 보호 /<br /> 안심의료 서비스
    </span>,
    <span key={2}>
      블록체인 기반 반려동물 등록 /<br /> 유기방지 서비스
    </span>,
    <span key={3}>블록체인 기반 가상자산 금융 플랫폼</span>,
    <span key={4}>
      블록체인 기반
      <br /> 선불지급 포인트 쇼핑몰 서비스
    </span>,
    <span key={5}>전국건강검진센터 예약 플랫폼</span>,
    <span key={6}>진짜 부자들의 진짜 정보 커뮤니티 서비스</span>,
  ];
  const content = [
    <span key={7}>
      &apos;로디언즈&apos;는 회원의 수술 전/후 사진과 의료 자료를 보관하고,
      부작용 발생 시로디언즈에 선임된 안심변호사가 사고대응을 진행하는 특허
      등록된 서비스 입니다.
    </span>,
    <span key={8}>
      대한민국의 유기동물을 없애고 따뜻한 캠페인을 통해 모든 반려동물과 반려인이
      행복한 세상! 함께 살아가는 &apos;반려&apos;의 의미를 찾아갑니다.
    </span>,
    <span key={9}>
      &apos;그루&apos;는 부담없이 자유롭게 이용할 수 있는 TRX 기반 블록체인
      암호화폐 지갑 서비스 입니다.
    </span>,
    <span key={10}>
      &apos;두리안&apos;은 블록체인 분산원장 기술이 적용된 포인트로 다양한
      물건을 보다 저렴하게 구매 가능한 쇼핑몰 서비스입니다.
    </span>,
    <span key={11}>
      &apos;미리내검진&apos;은 자신의 위치를 기반으로 보다 가까운 곳에서
      건강검진을 받을 수 있도록 지역별 병원 정보를 제공하는 건강검진센터 예약
      서비스입니다.
    </span>,
    <span key={12}>
      &apos;찐부&apos;는 내 소유의 자산을 소유자인증 제도를 통해 홍보가 가능한
      허위매물 없는 부동산 정보 커뮤니티 사이트입니다.
    </span>,
  ];
  const blockchane = [true, true, true, true, false, false];
  const kakao = [
    "pf.kakao.com/_xmbekxl",
    "",
    "",
    "",
    "",
    "pf.kakao.com/_xlhBxixj/98428373",
  ];
  const insta = [
    "www.instagram.com/lawdians_official/",
    "www.instagram.com/miapet.kr/?hl=ko",
    "www.instagram.com/gru.krwg/",
    "",
    "www.instagram.com/mirinecare/",
    "www.instagram.com/zzinbu_official/",
  ];
  const facebook = [
    "www.facebook.com/Lawdians/",
    "www.facebook.com/Animal.miapet/",
    "www.facebook.com/Gru2021",
    "",
    "",
    "www.facebook.com/profile.php?id=100089426176220",
  ];
  const youtube = [
    "www.youtube.com/channel/UCsGBQPD4GhXbDI1Z84Izz6A/featured",
    "www.youtube.com/@user-uc3wy6lb3g",
    "www.youtube.com/@krwg4685",
    "",
    "",
    "www.youtube.com/@zzinbu",
  ];
  const naver = [
    "blog.naver.com/ruvbmk80",
    "blog.naver.com/miapet",
    "blog.naver.com/nettongrung",
    "",
    "blog.naver.com/mirinaecare",
    "blog.naver.com/zzinbu",
  ];
  const band = ["", "", "", "", "band.us/@mirinecare", "band.us/page/90035703"];
  const homepath = [
    "www.lawdians.com",
    "miapet.kr",
    "www.gru.lawdians.com",
    "www.durian.im",
    "www.mirinecare.com",
    "www.zzinbu.com",
  ];

  //스크롤 기능
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<any>(null);

  const handleMouseDown = (e: any) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: any) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  return (
    <div className={cx("container")}>
      <ComponentTop category="BUSINESS" title="BUSINESS" />
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className={cx("wrap")}
      >
        {title.map((item, idx) => (
          <BusinessCard
            key={idx}
            blockchain={blockchane[idx]}
            title={item}
            sub_title={sub_title[idx]}
            content={content[idx]}
            kakao={kakao[idx]}
            insta={insta[idx]}
            facebook={facebook[idx]}
            youtube={youtube[idx]}
            naver={naver[idx]}
            band={band[idx]}
            homepath={homepath[idx]}
            bgNum={idx + 1}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
