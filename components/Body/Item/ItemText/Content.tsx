import styles from "./Content.module.scss";

type Props = {
  title: string;
  subTitle: string;
  contentLine1: string;
  contentLine2: string;
};

export default function Content({
  title,
  subTitle,
  contentLine1,
  contentLine2,
}: Props) {
  return (
    <div className={styles.content}>
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
