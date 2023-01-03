import styles from "./Footer.module.scss";
import Link from "next/link";

export default function Footer() {

  return (
    <div className={styles.footer}>
        <div className={styles.footer_top}>
            <div>세상 모두가 건물주가 되는 날 까지</div>
            <div>COMING SOON</div>
        </div>
        <div className={styles.footer_bottom}>
            <div>아이콘</div>
            <div><Link href={'https://www.naver.com'} className={styles.link}>(주)리얼디비전</Link> | 대표이사 김창섭 | 서울특별시 서초구 서초대로25길 55, 2층 202호(방배동) | 사업자등록번호 510-87-02262</div>
        </div>
    </div>
  );
}
