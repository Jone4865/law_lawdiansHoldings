import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Side from "../Side/Side";
import Body from "./Body/Body";
import styles from "./Landing.module.scss";

export default function Landing() {
  const [modal, setModal] = useState(false);

  const setModalState = (modal: boolean) => {
    setModal(modal);
  };

  return (
    <div className={styles.landing}>
      <Header setModalState={setModalState} />
      <Body />
      {/* <Side modal={modal} setModalState={setModalState} /> */}
    </div>
  );
}
