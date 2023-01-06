import styles from "./Footer.module.scss";
import router from "next/router";
import { useState, useEffect } from "react";

export default function Footer() {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    (() => {
      window.addEventListener("scroll", () => {
        setScrollY(window.scrollY);
      });
    })();
  }, []);

  return (
    <div className={styles.footer}>
      <div className={styles.footer_top}>
        <div>세상 모두가 건물주가 되는 날 까지</div>
        <span className={scrollY >= 4280 ? "animate__animated animate__bounceIn" : ""}>COMING SOON</span>
      </div>
      <div className={styles.footer_bottom}>
        <div>
          <img
            src={"/img/logo/logo.png"}
            onClick={() => router.push("/")}
          />
        </div>
        <div className={styles.footer_bottom_line2}>
          <span className={styles.bold}>
            <span className={styles.link}>
              (주)리얼디비전{" "}
            </span>
            | 대표이사 김창섭 |
          </span>
          <span> 서울특별시 서초구 서초대로25길 55, 2층 202호(방배동) |</span>
          <span> 사업자등록번호 510-87-02262</span>
        </div>
      </div>
    </div>
  );
}
