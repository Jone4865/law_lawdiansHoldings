import { useEffect, useState } from "react";
import styles from "./Side.module.scss";

type Props = {
  modal: boolean;
  modalSet: (modal: boolean) => void;
  location: number;
  setLocation: (location: number) => void;
  positionSet: (position:boolean) => void;
};

function Side({ modal, modalSet, location, setLocation, positionSet }: Props) {
  const [none, setNone] = useState(true);
  const Buttons = ["홈", "차별성", "청약하기", "마켓거래", "배당수입"];

  if (!modal) {
    setTimeout(() => {
      setNone(true);
    }, 500);
  } else {
    setTimeout(() => {
      setNone(false);
    }, 0);
  }

  useEffect(() => {
    const htmlEle = document?.getElementsByTagName("html").item(0);
    if (modal) {
      if (htmlEle) {
        htmlEle.style.overflow = "hidden";
      }
    } else {
      if (htmlEle) {
        htmlEle.style.overflow = "unset";
      }
    }
  }, [modal]);

  return (
    <div
      className={`${none ? styles.none : ""} ${styles.side}`}
      onClick={() => {
        modalSet(false);
      }}
    >
      <div
        className={`${modal ? styles.slidein : styles.slideout} ${
          styles.side_body
        } ${none ? "none" : ""}`}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <h1>
          <img />
          <span onClick={() => modalSet(false)}>X</span>
        </h1>
        {Buttons.map((button, index) => (
          <div
            key={button}
            onClick={() => {
              setLocation(index);
              modalSet(false);
              positionSet(true);
            }}
          >
            {button}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Side;
