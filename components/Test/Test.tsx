import { useEffect, useState } from "react";
import styles from "./Test.module.scss";

type Props = {};

function Test({}: Props) {
  return (
    <div>
      <nav className={styles.Navbar}>
        {/* <a
          href="#"
          id="toggle"
          className={styles.Toggle Navbar_toggle"
          data_toggle="collapse"
          data_target="#navbarCollapse"
        >
          <span></span>
        </a> */}

        <a className={`${styles.Navbar_brand} ${styles.u_pullRight}`} href="#link">
          Ultralinx
        </a>

        <div id="navbarCollapse" className={styles.Navbar_menu}>
          <ul className={styles.Navbar_menu_major}>
            <li>
              <a href="#link">Gear</a>
            </li>
            <li>
              <a href="#link">Music</a>
            </li>
            <li>
              <a href="#link">Travel</a>
            </li>
            <li>
              <a href="#link">Photography</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Test;
