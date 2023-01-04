import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Side from "../Side/Side";

import styles from "./Landing.module.scss";

export default function Landing() {
  const [location, setLocation] = useState(0);
  const [position, setPosition] = useState(false);

  useEffect(() => {
    setLocation(location);
    setPosition(false);
  }, [position]);

  const [modal, setModal] = useState(false);
  const modalSet = (modal: boolean) => {
    setModal(modal);
  };

  const positionSet = (position: boolean) => {
    setPosition(position);
  };

  return (
    <div className={styles.landing}>
      <Header
        setLocation={setLocation}
        modalSet={modalSet}
        positionSet={positionSet}
      />
      <Body
        location={location}
        setLocation={setLocation}
        position={position}
        positionSet={positionSet}
      />
      <Side
        modal={modal}
        modalSet={modalSet}
        location={location}
        setLocation={setLocation}
        positionSet={positionSet}
      />
    </div>
  );
}
