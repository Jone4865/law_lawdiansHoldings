import router from "next/router";
import styles from "./Business.module.scss";
import className from "classnames/bind";
import Image from "next/image";
import ComponentTop from "../ComponentTop/ComponentTop";
import BusinessCard from "./BusinessCard/BusinessCard";
import Footer from "../Footer/Footer";

const cx = className.bind(styles);

export default function Business() {
  const title = ["로디언즈", "미아펫", "그루", "두리안", "미리내검진", "찐부"];
  const sub_title = [
    <span>
      블록체인 기반 의료정보 보호 /<br /> 안심의료 서비스
    </span>,
    <span>
      블록체인 기반 반려동물 등록 /<br /> 유기방지 서비스
    </span>,
    <span>블록체인 기반 가상자산 금융 플랫폼</span>,
    <span>
      블록체인 기반
      <br /> 선불지급 포인트 쇼핑몰 서비스
    </span>,
    <span>전국건강검진센터 예약 플랫폼</span>,
    <span>진짜 부자들의 진짜 정보 커뮤니티 서비스</span>,
  ];
  const content = [
    <span>
      '로디언즈'는 회원의 수술 전/후 사진과 의료 자료를 보관하고, 부작용 발생
      시로디언즈에 선임된 안심변호사가 사고대응을 진행하는 특허 등록된 서비스
      입니다.
    </span>,
    <span>
      대한민국의 유기동물을 없애고 따뜻한 캠페인을 통해 모든 반려동물과 반려인이
      행복한 세상! 함께 살아가는 '반려'의 의미를 찾아갑니다.
    </span>,
    <span>
      '그루'는 부담없이 자유롭게 이용할 수 있는 TRX 기반 블록체인 암호화폐 지갑
      서비스 입니다.
    </span>,
    <span>
      '두리안'은 다양한 물건을 보다 싸게 구매 가능한 지갑 쇼핑몰 서비스입니다.
    </span>,
    <span>
      '미리내검진'은 자신의 위치를 기반으로 보다 가까운 곳에서 건강검진을 받을
      수 있도록 지역별 병원 정보를 제공하는 건강검진센터 예약 서비스입니다.
    </span>,
    <span>
      '찐부'는 실소유의 매물들을 확인 또는 홍보 가능한 정보 커뮤니티
      사이트입니다.
    </span>,
  ];
  const imgname = ["lawdians", "miapet", "gru", "durian", "mirinae", "jjinbu"];
  const blockchane = [true, true, true, true, false, false];
  const btncolor = ["white", "black", "white", "white", "black", "white"];
  const kakao = ["pf.kakao.com/_xmbekxl", "", "", "", "", ""];
  const insta = [
    "www.instagram.com/lawdians_official/",
    "www.instagram.com/miapet.kr/?hl=ko",
    "www.instagram.com/gru.krwg/",
    "",
    "www.instagram.com/mirinecare/",
    "",
  ];
  const facebook = [
    "www.facebook.com/Lawdians/",
    "www.facebook.com/Animal.miapet/",
    "www.facebook.com/Gru2021",
    "",
    "",
    "",
  ];
  const youtube = [
    "www.youtube.com/channel/UCsGBQPD4GhXbDI1Z84Izz6A/featured",
    "www.youtube.com/@user-uc3wy6lb3g",
    "www.youtube.com/@krwg4685",
    "",
    "",
    "",
  ];
  const naver = [
    "blog.naver.com/ruvbmk80",
    "blog.naver.com/miapet",
    "blog.naver.com/nettongrung",
    "",
    "blog.naver.com/mirinaecare",
    "",
  ];
  const band = ["", "", "", "", "band.us/@mirinecare", ""];
  const homepath = [
    "www.lawdians.com",
    "miapet.kr",
    "www.gru.lawdians.com",
    "www.durian.im",
    "www.mirinecare.com",
    "www.zzinbu.com",
  ];
  return (
    <div className={cx("container")}>
      <ComponentTop category="BUSINESS" title="BUSINESS" />
      <div className={cx("wrap")}>
        {title.map((item, idx) => (
          <BusinessCard
            imgName={imgname[idx]}
            blockchain={blockchane[idx]}
            btnColor={btncolor[idx]}
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
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
