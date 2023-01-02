import { useState, useEffect } from "react";
import Header from "../components/Header/Header"
import Body from "../components/Body/Body"
import Side from "../components/Side/Side";

import styles from "./Landing.module.scss";

export default function Landing() {

  const [location, setLocation] = useState(0);

  useEffect(() => {
    setLocation(location);
  },[location])

  const [modal, setModal] = useState(false);
  const modalSet = (modal: boolean) => {
    setModal(modal);
  };

  return (
    <div className={styles.landing} >
        <Header setLocation={setLocation} modalSet={modalSet} modal={modal} />
        <Body location={location} />
        <Side modal={modal} modalSet={modalSet} />
    </div>
  )
}
