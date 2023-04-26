import React, { useState, useEffect, useRef } from "react";
import router from "next/router";
import className from "classnames/bind";
import styles from "./NewsPart.module.scss";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const cx = className.bind(styles);

type Data = {
  id: number;
  sum: string;
  title: string;
  url: string;
};

export default function NewsPart() {
  const isPc = useMediaQuery({
    query: "(min-width: 1520px) and (max-width: 10000px)",
  });
  const [news, setNews] = useState<Data[]>();

  async function getNews() {
    try {
      const response = await axios.get(`/api/getNews?page=1&limit=3`);
      setNews(response.data.news);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getNews();
  }, []);

  //스크롤기능
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
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className={cx("news_container")}
      >
        {news?.map((item, idx) => (
          <Link key={idx} target="_blank" href={item.url}>
            <div key={item.id} className={cx("news_wrap")}>
              <div
                className={cx("news_image")}
                style={{
                  backgroundImage: `url(/img/news/${item.id}.png)`,
                }}
              />
              <div className={cx("news_title")}>{item.title}</div>
              <div className={cx("news_content")}>{item.sum}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
