import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export default function Body() {
  const [state, setState] = useState("");

  const isMiddle = useMediaQuery({
    query: "(min-width: 761px) and (max-width: 1029px)",
  });

  const isMobile = useMediaQuery({
    query: "(min-width: 0px) and (max-width: 760px)",
  });

  useEffect(() => {
    if (isMiddle) {
      setState("middle");
    } else if (isMobile) {
      setState("mobile");
    } else {
      setState("pc");
    }
  }, [isMiddle, isMobile]);

  return state;
}
