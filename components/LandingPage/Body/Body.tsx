import { useState, useEffect, useRef } from "react";
import styles from "./Body.module.scss";
import className from "classnames/bind";
import { useMediaQuery } from "react-responsive";
import Top from "./Top/Top";
import History from "./History/History";
import Service from "./Service/Service";
import NewsPart from "./NewsPart/NewsPart";
import Contect from "../../Contect/Contect";
import Footer from "../../Footer/Footer";

const cx = className.bind(styles);

export default function Body() {
  const [pc, setPc] = useState(true);
  const isPc = useMediaQuery({
    query: "(min-width: 759px) and (max-width: 1920px)",
  });

  useEffect(() => {
    if (isPc) {
      setPc(true);
    } else {
      setPc(false);
    }
  }, [isPc]);

  return (
    <div className={cx("container")}>
      <Top />
      <History />
      <Service isPc={pc} />
      <NewsPart isPc={pc} />
      <Contect />
      <Footer />
    </div>
  );
}
