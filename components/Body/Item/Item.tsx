import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

import Content from "./ItemText/Content";
import styles from "./Item.module.scss";

type Props = {
  location: number;
  setLocation: (location: number) => void;
  position: boolean;
  positionSet: (position: boolean) => void;
};

export default function Item({ location, setLocation, position, positionSet }: Props) {
  const [scrollY, setScrollY] = useState(0);
  const isPc = useMediaQuery ({
    query : "(min-width : px) and (max-width :1920px)"
    });

  const one = useRef<any>(null);
  const two = useRef<any>(null);
  const three = useRef<any>(null);
  const four = useRef<any>(null);
  const five = useRef<any>(null);

  const Item = [two, three, four, five];
  const title = [
    "전문가가 엄선한",
    "건물주가 되는",
    "주식처럼",
    "정기 배당 수익을 통해",
  ];
  const subTitle = [
    "차별화 된 부동산 IP",
    "가장 빠른 방법",
    "손쉽게 거래가 가능해요",
    "13번째 월급을 만들어봐요",
  ];
  const contentLine1 = [
    "전문가 그룹이 깐깐하게 선정한",
    "5천원 부터 선착순 방식으로",
    "주식만큼 편리하게",
    "보유한 지분만큼 높은 수준의",
  ];
  const contentLine2 = [
    "진짜 상품성 있는 부동산 IP만 취급해요.",
    "누구나 쉽게 청약이 가능해요.",
    "수익증권을 사고 팔아 보세요.",
    "배당 수익을 기대할 수 있어요.",
  ];

  useEffect(() => {
    if (location) {
      Item[location - 1]?.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else {
      one.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [position]);

  useEffect(() => {
    (() => {
      window.addEventListener("scroll", () => {
        setScrollY(window.scrollY);
      });
    })();
  }, []);

  useEffect(() => {
    if (scrollY === 0) {
      setLocation(0);
    }
  }, [scrollY]);

  return (
    <div className={styles.item}>
      <ul className={styles.item_body}>
        <li ref={one} className={styles.img_size}>
          <div
            style={{ backgroundImage: isPc ? `url(/img/background/bg1.webp)` : `url(/img/background/bg1_m.webp)` }}
            className={styles.img_right_top}
          >
            <Content
              title="소액으로 시작하는"
              subTitle="부동산 조각 투자"
              contentLine1="투자를 시작하고 건물주가 되어보세요"
              contentLine2=""
            />
            <div className={styles.item_img_top}>
              <img src={`/img/body_img/body_img1.webp`} />
            </div>
          </div>
        </li>
        {Item.map((item, index) => (
          <li ref={Item[index]} key={index} className={styles.img_size}>
            <div
              style={{
                backgroundImage: isPc ? `url(/img/background/bg${index + 2}.webp)` : `url(/img/background/bg${index + 2}_m.webp)`
              }}
              className={index % 2 === 0 ? styles.img_left : styles.img_right}
            >
              <Content
                title={title[index]}
                subTitle={subTitle[index]}
                contentLine1={contentLine1[index]}
                contentLine2={contentLine2[index]}
              />
              <div className={styles.item_img}>
                <img src={`/img/body_img/body_img${index + 2}.webp`} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
