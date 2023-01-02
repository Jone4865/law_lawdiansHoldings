import { useEffect, useRef, useState } from "react";

import styles from "./Item.module.scss";

type Props = {
  location: number;
};

export default function Item({ location }: Props) {
  const ItemTop = [1, 2, 3];

  const top = useRef<any>(null);
  const one = useRef<any>(null);
  const two = useRef<any>(null);
  const three = useRef<any>(null);
  const four = useRef<any>(null);
  const five = useRef<any>(null);
  const six = useRef<any>(null);

  const ItemBottom = [one, two, three, four, five, six];

  useEffect(() => {
    if (location === 0) {
      top?.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else {
      ItemBottom[location - 1]?.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [location]);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    (() => {
      window.addEventListener("scroll", () => {
        setScrollY(window.scrollY);
      });
    })();
  }, []);

  return (
    <div className={styles.item}>
      <ul ref={top} className={styles.item_top}>
        {ItemTop.map((item) => (
          <li key={item} className={styles.img_size}>
            <img src={`/img/item/item${item}.jpg`} className={styles.img_top} />
          </li>
        ))}
      </ul>
      <ul className={styles.item_bottom}>
        {ItemBottom.map((item, index) => (
          <li
            ref={ItemBottom[index]}
            key={index}
            className={
              index == 2
                ? scrollY >= 2090
                  ? `${styles.img_size} ${styles.slide}`
                  : styles.img_size
                : index == 4 ? scrollY >= 4090
                ? `${styles.img_size} ${styles.slide}`
                : styles.img_size : styles.img_size
            }
          >
            <img
              src={`/img/item/item${index + 3}.jpg`}
              className={styles.img_bottom}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
