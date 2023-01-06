import styles from "./Content.module.scss";
import { useState, useEffect } from "react";

type Props = {
  title: string;
  subTitle: string;
  contentLine1: string;
  contentLine2: string;
  name: string | boolean;
};

export default function Content({
  title,
  subTitle,
  contentLine1,
  contentLine2,
  name
}: Props) {

  const [scrollY, setScrollY] = useState(0);
  console.log(title,
    subTitle,
    contentLine1,
    contentLine2,
    name)
  useEffect(() => {
    (() => {
      window.addEventListener("scroll", () => {
        setScrollY(window.pageYOffset)
      });
    })();
  }, []);

  return (
    <div className={`${styles.content} ${scrollY == 0 ? " animate__animated animate__fadeIn" : ""} ${name ? "animate__animated animate__fadeIn" : "" }`}>
      <div className={styles.content_body}>
        {contentLine2 === "" ? <div className={styles.coming}>COMING SOON</div> : ""}
        <h2>{title}</h2>
        <div>{subTitle}</div>
        <span>{contentLine1}</span>
        <span>{contentLine2}</span>
      </div>
    </div>
  );
}
