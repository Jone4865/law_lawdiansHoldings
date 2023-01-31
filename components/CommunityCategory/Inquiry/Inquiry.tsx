import styles from "./Inquiry.module.scss";
import className from "classnames/bind";
import ComponentTop from "../../ComponentTop/ComponentTop";
import Footer from "../../Footer/Footer";
import PostQuestion from "../../PostQuestion/PostQuestion";

const cx = className.bind(styles);

export default function Inquiry() {
  return (
    <div className={cx("container")}>
      <ComponentTop category="COMMUNITY" title="INQUIRY" />
      <PostQuestion />
      <Footer />
    </div>
  );
}
