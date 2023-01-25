import { useState, useEffect } from "react";
import styles from "./News.module.scss";
import className from "classnames/bind";
import axios from "axios";
const moment = require("moment");

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
  const [nowContent, setNowContent] = useState(3);
  const [totalCount, setTotalCount] = useState(0);

  async function getData() {
    try {
      const response = await axios.get(
        `https://api.lawdians.com:54000/v1.0/api/news?filter=1&search=&take=${nowContent}&skip=`
      );
      setNews(response.data.news);
      setTotalCount(response.data.totalCount);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, [nowContent]);

  //클릭할때 const hits = axios.post(`https://api.lawdians.com:54000/v1.0/api/news/${item.no}`)

  return (
    <div className={cx("container")}>
      {/* <a href="https://www.naver.com" target="_blank">
        네이버
      </a> */}
      <div className={cx("news")}>
        {news?.map((item, idx) => (
          <div key={idx}>
            <div>{moment(item.createdAt).format("YY-MM-DD")}</div>
            <div>{item.hits}</div>
            <div>{item.no}</div>
            <div>{item.sources}</div>
            <div>{item.summary}</div>
            <div>{item.thumbnailUrl}</div>
            <div>{item.time}</div>
            <div>{item.title}</div>
            <div>{item.url}</div>
          </div>
        ))}
      </div>
      {nowContent < totalCount && (
        <button onClick={() => setNowContent((prev) => prev + 3)}>
          더보기
        </button>
      )}
    </div>
  );
}
