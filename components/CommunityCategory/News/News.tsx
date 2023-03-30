import { useState, useEffect } from "react";
import styles from "./News.module.scss";
import className from "classnames/bind";
import ComponentTop from "../../ComponentTop/ComponentTop";
import Footer from "../../Footer/Footer";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

const cx = className.bind(styles);

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

export default function News() {
  const [news, setNews] = useState<Data[]>();
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState(1);

  const pages = [];

  async function getData() {
    try {
      const response = await axios.get(
        `${
          process.env.NEXT_PUBLIC_NEWS_GET
        }/news?filter=1&search=&take=5&skip=${(page - 1) * 5}`
      );
      setNews(response.data.news);
      setTotal(Math.ceil(response.data.totalCount / 5));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, [page]);

  let num = 0;
  while (total && num < total) {
    num = num + 1;
    pages.push(num);
  }

  return (
    <div className={cx("container")}>
      <ComponentTop category="COMMUNITY" title="NEWS" />
      <div className={cx("wrap")}>
        {news?.map((item) => (
          <div key={item.no} className={cx("news_wrap")}>
            <div className={cx("left")}>
              <Link target="_blank" href={item.url}>
                <div className={cx("title")}>{item.title}</div>
              </Link>
              <Link target="_blank" href={item.url}>
                <div className={cx("summary")}>{item.summary}</div>
              </Link>
              <div className={cx("bottom_wrap")}>
                <p className={cx("date")}>{item.createdAt.split("T")[0]}</p>
                <p className={cx("sources")}>출처 {item.sources}</p>
                <p className={cx("hits")}>조회수 {item.hits}</p>
              </div>
            </div>
            <div className={cx("right")}>
              <Link target="_blank" href={item.url}>
                <div
                  className={cx("news_image")}
                  style={{
                    backgroundImage: `url(${item.thumbnailUrl})`,
                  }}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className={cx("page")}>
        <div
          className={cx("prev")}
          onClick={() => setPage(page > 1 ? page - 1 : page)}
        >
          <div className={cx("arrow_wrap")}>
            <Image fill alt="화살표" src="/img/icon/arrow.png" />
          </div>
        </div>
        <div className={cx("page_num")}>
          {pages.map((item) => (
            <div
              className={cx(item !== page ? "num_unable" : "num_able")}
              key={item}
              onClick={() => setPage(item)}
            >
              {item}
            </div>
          ))}
        </div>
        <div
          className={cx("next")}
          onClick={() => setPage(page < total ? page + 1 : page)}
        >
          <div className={cx("arrow_wrap")}>
            <Image fill alt="화살표" src="/img/icon/arrow.png" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
