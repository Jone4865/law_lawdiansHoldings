import { useState } from "react";

import Header from "../Header/Header";
import Side from "../Side/Side";
import Body from "./Body/Body";
import styles from "./Landing.module.scss";
import Footer from "../Footer/Footer";
import News from "../News/News";
import { KakaoMap } from "../KakaoMap/KakaoMap";
import Test from "../Test/Test";

export default function Landing() {
  const [modal, setModal] = useState(false);

  const setModalState = (modal: boolean) => {
    setModal(modal);
  };

  return (
    <div className={styles.landing}>
      {/* <Test /> */}
      <Header setModalState={setModalState} />
      <KakaoMap />
      <Body />
      <Side modal={modal} setModalState={setModalState} />
      <Footer />
      <News />
    </div>
  );
}
