import styles from "./Location.module.scss";
import className from "classnames/bind";
import ComponentTop from "../../ComponentTop/ComponentTop";
import Footer from "../../Footer/Footer";
import Contect from "../../Contect/Contect";

const cx = className.bind(styles);

export default function Location() {
  return (
    <div className={cx("container")}>
      <ComponentTop category="COMPANY" title="LOCATION" />
      <Contect />
      <Footer />
    </div>
  );
}
