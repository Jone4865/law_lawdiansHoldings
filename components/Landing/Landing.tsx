import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Side from "../Side/Side";
import Body from "../Body/Body";
import styles from "./Landing.module.scss";
import Footer from "../Footer/Footer";

export default function Landing() {
  const [location, setLocation] = useState(0);
  const [position, setPosition] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setLocation(location);
    setPosition(false);
  }, [position]);

  const setModalState = (modal: boolean) => {
    setModal(modal);
  };

  const setContentClick = (position: boolean) => {
    setPosition(position);
  };

  return (
    <div className={styles.landing}>
      <Header setModalState={setModalState} />
      <Body />
      <Side modal={modal} setModalState={setModalState} />
      <Footer />
    </div>
  );
}
