import router from "next/router";
import styles from "./BusinessCard.module.scss";
import className from "classnames/bind";
import Image from "next/image";
import React from "react";
import Link from "next/link";
const cx = className.bind(styles);

type Props = {
  imgName: string;
  blockchain: boolean;
  btnColor: string;
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
};

export default function BusinessCard({
  imgName,
  blockchain,
  btnColor,
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
}: Props) {
  return (
    <div className={cx("container")}>
      <div
        className={cx("top")}
        style={{
          backgroundImage: `url(/img/BusinessCard/${imgName}.png)`,
        }}
      >
        {blockchain ? <div className={cx("blockchain")} /> : <div />}
        <Link target="_blank" href={`https://${homepath}`}>
          <div className={cx(`btn_${btnColor}`)}>
            <span className={cx("homepage")}>HOMEPAGE</span>
            <div className={cx(btnColor)} />
          </div>
        </Link>
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
