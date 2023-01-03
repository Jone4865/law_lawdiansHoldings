import { useEffect, useState } from "react";
import styles from "./Side.module.scss";

import More from "./More/More";
import MoreItem from "./MoreItem/MoreItem";

type Props = {
  modal: boolean;
  modalSet: (modal: boolean) => void;
};

function Side({ modal, modalSet }: Props) {
  const [none, setNone] = useState(true);
  const [more, setMore] = useState("");

  if (!modal) {
    setTimeout(() => {
      setNone(true);
    }, 500);
  } else {
    setTimeout(() => {
      setNone(false);
    }, 0);
  }

  const care = ["안심의료서비스", "안심변호사"];

  const global = ["KOR", "ENG", "CHN", "JPN"];

  const center = ["공지사항", "FAQ", "이벤트", "오류제보"];

  useEffect(() => {
    const htmlEle = document?.getElementsByTagName("html").item(0);
    if (modal) {
      if (htmlEle) {
        htmlEle.style.overflow = "hidden";
      }
    } else {
      if (htmlEle) {
        htmlEle.style.overflow = "unset";
      }
    }
  }, [modal]);

  return (
    <div className={`${none ? styles.none : ""} ${styles.side}`} onClick={() => { modalSet(false); setMore(""); }}  >
      <div
        className={`${modal ? styles.slidein : styles.slideout} ${
          styles.side_body
        } ${none ? "none" : ""}`}
        onClick={(event) => { event.stopPropagation() }}  
      >
        <h1>
          <img src="/img/icon/home.png" onClick={() => modalSet(false)} />
          <span onClick={() => modalSet(false)}>X</span>
        </h1>
        <div>안심병원</div>
        <More more={more} setMore={setMore} title="안심케어" />
        <MoreItem more={more} title="안심케어" items={care} />
        <div>NEWS</div>
        <More more={more} setMore={setMore} title="글로벌 안심의료예약플랫폼" />
        <MoreItem
          more={more}
          title="글로벌 안심의료예약플랫폼"
          items={global}
        />
        <More more={more} setMore={setMore} title="고객센터" />
        <MoreItem more={more} title="고객센터" items={center} />
        <div>온라인 제휴문의</div>
        <div>로그인</div>
        <div>회원가입</div>
      </div>
    </div>
  );
}

export default Side;
