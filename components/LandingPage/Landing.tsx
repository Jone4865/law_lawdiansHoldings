import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Side from "../Side/Side";
import Body from "./Body/Body";
import styles from "./Landing.module.scss";

export default function Landing() {
  return (
    <div className={styles.home}>
      <Body />
    </div>
  );
}
