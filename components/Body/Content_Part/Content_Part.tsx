import styles from "./Content_Part.module.scss";
import className from "classNames/bind";
import Image from "next/image";

const cx = className.bind(styles);

type Props = {
  logo_color?: "white" | "orange";
  title: React.ReactNode;
  content: React.ReactNode;
};

export default function Content_Part({
  logo_color = "white",
  title,
  content,
}: Props) {
  return (
    <div className={cx("container")}>
      <div className={cx("logo")}>
        <Image fill alt="바디 로고" src={`/img/logo/logo_${logo_color}.png`} />
      </div>
      <div className={cx("title")}>{title}</div>
      <div className={cx("content")}>{content}</div>
    </div>
  );
}
