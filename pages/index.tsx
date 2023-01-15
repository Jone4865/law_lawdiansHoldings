import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Landing from "../components/Landing/Landing";
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const content = "dadwadwadwa";
  const email = "wcaown@dawdawd.com";
  const cellPhone = "313-3333-2133";

  const Test = { content, email, cellPhone };

  //post 요청
  useEffect(() => {
    (async () => {
      const data = await (
        await fetch("/api/postQuestion", {
          method: "POST",
          body: JSON.stringify(Test),
        })
      ).json();
    })();
  }, []);

  //get 요청
  useEffect(() => {
    (async () => {
      const getData = await (
        await fetch("/api/getData", {
          method: "GET",
        })
      ).json();
      console.log(getData && getData.data[0]);
    })();
  }, []);

  return (
    <>
      <Landing />
    </>
  );
}
