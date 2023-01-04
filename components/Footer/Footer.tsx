import styles from "./Footer.module.scss";
import Link from "next/link";
import router from "next/router";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_top}>
        <div>세상 모두가 건물주가 되는 날 까지</div>
        <span>COMING SOON</span>
      </div>
      <div className={styles.footer_bottom}>
        <div>
          <img
            src={"/img/logo/logo.webp"}
            onClick={() => router.push("/")}
          />
        </div>
        <div className={styles.footer_bottom_line2}>
          <span className={styles.bold}>
            {/* <Link href={"https://www.naver.com"} className={styles.link}>
              (주)리얼디비전{" "}
            </Link> */}
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
