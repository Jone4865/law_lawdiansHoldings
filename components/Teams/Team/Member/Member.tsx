import styles from "./Member.module.scss";
import className from "classnames/bind";

const cx = className.bind(styles);

type Props = {
  name: React.ReactNode;
  bottom: React.ReactNode;
  imgNumber: number;
  polderName: string;
};

function Member({ name, bottom, imgNumber, polderName }: Props) {
  return (
    <div className={cx("container")}>
      <div
        className={cx("wrap")}
        style={{
          backgroundImage: `url('/img/Teams/${polderName}/${imgNumber}.png')`,
        }}
      />
      <div>
        {name}
        {bottom}
      </div>
    </div>
  );
}

export default Member;
