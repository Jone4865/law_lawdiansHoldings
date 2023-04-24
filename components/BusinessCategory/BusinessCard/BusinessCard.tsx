import styles from "./BusinessCard.module.scss";
import className from "classnames/bind";
import React from "react";
import Link from "next/link";
import Image from "next/image";
const cx = className.bind(styles);

type Props = {
  imgName: string;
  blockchain: boolean;
  title: string;
  sub_title: React.ReactNode;
  content: React.ReactNode;
  kakao: string;
  insta: string;
  facebook: string;
  youtube: string;
  naver: string;
  band: string;
  homepath: string;
  bgNum: number;
};

export default function BusinessCard({
  imgName,
  blockchain,
  title,
  sub_title,
  content,
  kakao,
  insta,
  facebook,
  youtube,
  naver,
  band,
  homepath,
  bgNum,
}: Props) {
  console.log(title, imgName);
  return (
    <div className={cx("container")}>
      <div
        className={cx("top")}
        style={{
          backgroundImage: `url(/img/Service/bg${bgNum}_m.png)`,
        }}
      >
        <div className={cx("service_icon")}>
          <Image
            alt="서비스 이미지 아이콘"
            src={`/img/ServiceIcon/${title}.webp`}
            fill
          />
        </div>
        <div className={cx("card_bottom_wrap")}>
          {blockchain ? <div className={cx("blockchain")} /> : <div />}
          <Link target="_blank" href={`https://${homepath}`}>
            <div className={cx(`btn`)}>
              <span className={cx("homepage")}>HOMEPAGE</span>
              <div className={cx("white")} />
            </div>
          </Link>
        </div>
      </div>
      <div className={cx("center")}>
        <p className={cx("title")}>{title}</p>
        <p className={cx("sub_title")}>{sub_title}</p>
        <p className={cx("content")}>{content}</p>
      </div>
      <div className={cx("icon_wrap")}>
        {kakao && (
          <Link target="_blank" href={`https://${kakao}`}>
            <div className={cx("kakao")} />
          </Link>
        )}
        {insta && (
          <Link target="_blank" href={`https://${insta}`}>
            <div className={cx("insta")} />
          </Link>
        )}
        {facebook && (
          <Link target="_blank" href={`https://${facebook}`}>
            <div className={cx("facebook")} />
          </Link>
        )}
        {youtube && (
          <Link target="_blank" href={`https://${youtube}`}>
            <div className={cx("youtube")} />
          </Link>
        )}
        {band && (
          <Link target="_blank" href={`https://${band}`}>
            <div className={cx("band")} />
          </Link>
        )}
        {naver && (
          <Link target="_blank" href={`https://${naver}`}>
            <div className={cx("naver")} />
          </Link>
        )}
      </div>
    </div>
  );
}
