import styles from "./BICI.module.scss";
import className from "classnames/bind";
import ComponentTop from "../../ComponentTop/ComponentTop";
import Footer from "../../Footer/Footer";

const cx = className.bind(styles);

export default function BICI() {
  return (
    <div className={cx("container")}>
      <ComponentTop category="COMPANY" title="BI/CI" />
      <div className={cx("wrap")}>
        <div className={cx("top")}>
          <div className={cx("symbol")}>
            <p className={cx("title")}>Symbol Mark</p>
            <div className={cx("symbol_img")} />
          </div>
          <div className={cx("word_mark")}>
            <p className={cx("title")}>Word Mark</p>
            <p className={cx("sub")}>English</p>
            <div className={cx("title_wrap")}>
              <div className={cx("wordmark_img")} />
              <div className={cx("wordmark_img_ko")}>
                <p className={cx("sub_ko")}>Korean</p>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("second")}>
          <div className={cx("color")}>
            <p className={cx("title")}>Color System</p>
            <div className={cx("color_img")} />
          </div>
          <div className={cx("font")}>
            <p className={cx("title")}>Font System</p>
            <div className={cx("font_img")} />
          </div>
        </div>
        <div className={cx("horizon")}>
          <p className={cx("title")}>Horizontal Version</p>
          <div className={cx("horizon_img")} />
        </div>
        <div className={cx("vertical")}>
          <p className={cx("title")}>Vertical Version</p>
          <div className={cx("vertical_img")} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
