import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

import Content from "./ItemText/Content";
import styles from "./Item.module.scss";

import "animate.css";

type Props = {
  location: number;
  setLocation: (location: number) => void;
  position: boolean;
  positionSet: (position: boolean) => void;
};

export default function Item({
  location,
  setLocation,
  position,
  positionSet,
}: Props) {
  const [scrollY, setScrollY] = useState(0);

  const [aniTop, setAniTop] = useState(true);
  const [ani1, setAni1] = useState(false);
  const [ani2, setAni2] = useState(false);
  const [ani3, setAni3] = useState(false);
  const [ani4, setAni4] = useState(false);

  const isPc = useMediaQuery({
    query: "(min-width : 760px) and (max-width :1920px)",
  });
  const [pc, setPc] = useState(true);

  useEffect(() => {
    if (isPc) {
      setPc(true);
    } else {
      false;
    }
  }, [isPc]);

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
        setAniTop(window.pageYOffset >= 1 ? false : false)
        if (isPc) {
          setAni1(window.pageYOffset >= 450 ? true : false);
          setAni2(window.pageYOffset >= 1385 ? true : false);
          setAni3(window.pageYOffset >= 2370 ? true : false);
          setAni4(window.pageYOffset >= 3345 ? true : false);
        } else {
          setAni1(window.pageYOffset >= 215 ? true : false);
          setAni2(window.pageYOffset >= 1180 ? true : false);
          setAni3(window.pageYOffset >= 2170 ? true : false);
          setAni4(window.pageYOffset >= 3130 ? true : false);
        }
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
          <div className={styles.img_top}>
            <div className={styles.img_top_body}>
              <Content
                title="소액으로 시작하는"
                subTitle="부동산 조각 투자"
                contentLine1="투자를 시작하고 건물주가 되어보세요"
                contentLine2=""
                name={""}
              />
              <div
                className={`${styles.item_img_top} ${
                  aniTop ? " animate__animated animate__fadeInRight animate__repeat-0" : ""
                }`}
              >
                <img src={`/img/body_img/body_img1.png`} />
              </div>
            </div>
          </div>
        </li>
        {Item.map((item, index) => (
          <li ref={Item[index]} key={index} className={styles.img_size}>
            <div
              style={{
                backgroundImage: pc
                  ? `url(/img/background/bg${+index + 2}.png)`
                  : `url(/img/background/bg${+index + 2}_m.png)`,
              }}
              className={styles.img_background}
            >
              <div
                className={index % 2 === 0 ? styles.img_left : styles.img_right}
              >
                <Content
                  title={title[index]}
                  subTitle={subTitle[index]}
                  contentLine1={contentLine1[index]}
                  contentLine2={contentLine2[index]}
                  name={
                    index == 0
                      ? ani1
                      : index == 1
                      ? ani2
                      : index == 2
                      ? ani3
                      : index == 3
                      ? ani4
                      : ""
                  }
                />
                <div
                  className={`${styles.item_img} 
                  `}
                >
                  <img src={`/img/body_img/body_img${index + 2}.png`} />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
