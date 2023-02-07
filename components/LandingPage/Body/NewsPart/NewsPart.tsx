import React, { useState, useEffect } from "react";
import router from "next/router";
import className from "classnames/bind";
import styles from "./NewsPart.module.scss";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const cx = className.bind(styles);

type Props = {
  isPc: boolean;
};

type Data = {
  createdAt: string;
  hits: number;
  no: number;
  sources: string;
  summary: string;
  thumbnailUrl: string;
  time: any;
  title: string;
  url: string;
};

export default function NewsPart({ isPc }: Props) {
  const [news, setNews] = useState<Data[]>();

  async function getData() {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_NEWS_GET}/news?filter=1&search=&take=3&skip=`
      );
      setNews(response.data.news);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={cx("container")}>
      <div className={cx("title_wrap")}>
        <div className={cx("title")}>NEWS</div>
        <div className={cx("title_btn_wrap")}>
          <Image
            className={cx("title_btn")}
            width={isPc ? 35 : 25}
            height={isPc ? 35 : 25}
            alt="버튼 검은색"
            src="/img/body/btn_black.png"
            onClick={() => router.push("/community/news")}
          />
        </div>
      </div>
      <div className={cx("news_container")}>
        {news?.map((item, idx) => (
          <Link key={idx} target="_blank" href={item.url}>
            <div key={item.no} className={cx("news_wrap")}>
              <div
                className={cx("news_image")}
                style={{
                  backgroundImage: `url(${item.thumbnailUrl})`,
                }}
              />
              <div className={cx("news_title")}>{item.title}</div>
              <div className={cx("news_content")}>{item.summary}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
