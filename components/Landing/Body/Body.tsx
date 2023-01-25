import { useState, useEffect, useRef } from "react";
import styles from "./Body.module.scss";
import className from "classnames/bind";
import Item from "./Item/Item";
import Solution from "./Solution/Solution";
import { useMediaQuery } from "react-responsive";
import PostQuestion from "./PostQuestion/PostQuestion";
import Download_Part from "./Download_Part/Download_Part";

const cx = className.bind(styles);

export default function Body() {
  const [middle, setMiddle] = useState(false);
  const isMiddle = useMediaQuery({
    query: "(min-width: 1300px) and (max-width: 1920px)",
  });

  useEffect(() => {
    if (isMiddle) {
      setMiddle(true);
    } else {
      setMiddle(false);
    }
  }, [isMiddle]);

  const [pc, setPc] = useState(true);
  const isPc = useMediaQuery({
    query: "(min-width: 759px) and (max-width: 1920px)",
  });

  useEffect(() => {
    if (isPc) {
      setPc(true);
    } else {
      setPc(false);
    }
  }, [isPc]);

  const titles = [
    <>
      <p>기업 상품권 판매 / </p>
      <p>IT 서비스 운영대행</p>
    </>,
    <>상품권 시세</>,
    <>
      <p>기업 상품권</p>
      <p>운영대행 컨설팅</p>
    </>,
    <>
      <p>고객맞춤 서비스</p>
    </>,
    <>방배사 솔루션</>,
    <>문의하기</>,
  ];

  const contents = [
    <>
      각 분야별 전문가들이 서비스 운영과 마케팅 홍보를 대행해
      <br />
      IT 서비스의 운영을 컨설팅합니다.
    </>,
    <>
      <p>아래의 가격표는 수량, 권종, 상품권의</p>
      <p>상태등의 따라 변경될 수 있습니다.</p>
    </>,
    <>
      다년간 축척 된 글로벌 서비스 운영경험과 CS대응 노하우를
      <br />
      바탕으로 국내 IT 서비스의 해외진출을 컨설팅 해드립니다.
    </>,
    <>
      방배사는 기업을 대상으로 한 상품권 판매 온라인 광고에 최적화된
      <br />
      통합마케팅 서비스를 제공합니다.
    </>,
    <>
      방배사는 기업상품권 판매대행 서비스를 위해
      <br />
      다양한 마케팅 솔루션을 보유하고 있습니다.
    </>,
    <>
      <p>기업상품권 판매대행에 대하여 궁금하신 점은</p>
      <p>무엇이든 물어보세요.</p>
    </>,
  ];

  return (
    <div className={cx("container")}>
      <div className={cx("home_wrap")}>
        <div id="홈">
          <Item
            title={titles[0]}
            content={contents[0]}
            logo_color={"white"}
            img_name={pc && pc ? "bg1" : "bg1_m"}
            item_name="home"
          />
        </div>
        <div id="컨설팅">
          <Item
            title={titles[2]}
            content={contents[2]}
            logo_color={"white"}
            img_name={pc && pc ? "bg3" : "bg3_m"}
            item_name="consulting"
          />
        </div>
        <div id="서비스">
          <Item
            title={titles[3]}
            content={contents[3]}
            logo_color={"orange"}
            img_name={middle ? "bg4" : "bg4_m"}
            item_name="service"
          />
        </div>
        <div id="솔루션">
          <Solution
            title={titles[4]}
            content={contents[4]}
            logo_color={"orange"}
          />
        </div>
        <div id="문의하기">
          <PostQuestion />
        </div>
        <div id="다운로드">
          <Download_Part />
        </div>
      </div>
    </div>
  );
}
