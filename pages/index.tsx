import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Landing from "../components/Landing/Landing";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const content = "dadwadwadwa";
  const email = "wcaown@dawdawd.com";
  const cellPhone = "313-3333-2133";

  const Test = { content, email, cellPhone };

  const [getData, setData] = useState<[]>([]);

  //post 요청
  useEffect(() => {
    (async () => {
      const postData = await (
        await fetch("/api/postQuestion", {
          method: "POST",
          body: JSON.stringify(Test),
        })
      ).json();
      console.log(postData);
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
      setData(getData && getData?.data);
    })();
  }, []);

  return (
    <>
      <div>
        {getData?.map((data: any, index) => (
          <div key={index}>
            {/* // 상품권 이름 */}
            <span>{data?.split("\n\t\t\t\t\t\t")[1]}</span>

            {/* // 매입 가격 */}
            {/* <span>
              {Number.isNaN(
                Math.round(
                  (+data
                    ?.split("\n\t\t\t\t\t\t")[2]
                    ?.split("(")[0]
                    ?.replace(",", "") /
                    (100 -
                      parseFloat(
                        data
                          ?.split("\n\t\t\t\t\t\t")[2]
                          ?.split("(")[1]
                          ?.split("%)")
                          ?.toString()
                      ))) *
                    100
                )
              )
                ? 0
                : Math.round(
                    (+data
                      ?.split("\n\t\t\t\t\t\t")[2]
                      ?.split("(")[0]
                      ?.replace(",", "") /
                      (100 -
                        parseFloat(
                          data
                            ?.split("\n\t\t\t\t\t\t")[2]
                            ?.split("(")[1]
                            ?.split("%)")
                            ?.toString()
                        ))) *
                      100
                  )}
            </span> */}

            {/* // 매입 퍼센트 */}
            {/* <span>
              {parseFloat(
                data
                  ?.split("\n\t\t\t\t\t\t")[2]
                  ?.split("(")[1]
                  ?.split("%)")
                  ?.toString()
              )}
            </span> */}

            {/* // 판매 가격 */}
            {/* <span>
              {Number.isNaN(
                Math.round(
                  (+data
                    ?.split("\n\t\t\t\t\t\t")[3]
                    ?.split("(")[0]
                    ?.replace(",", "") /
                    (100 -
                      parseFloat(
                        data
                          .split("\n\t\t\t\t\t\t")[3]
                          .split("(")[1]
                          .replace("%)", "")
                      ))) *
                    100
                )
              )
                ? 0
                : Math.round(
                    (+data
                      ?.split("\n\t\t\t\t\t\t")[3]
                      ?.split("(")[0]
                      ?.replace(",", "") /
                      (100 -
                        parseFloat(
                          data
                            .split("\n\t\t\t\t\t\t")[3]
                            .split("(")[1]
                            .replace("%)", "")
                        ))) *
                      100
                  )}
            </span> */}

            {/* // 판매 퍼센트 */}
            {/* <span>
              {parseFloat(
                data.split("\n\t\t\t\t\t\t")[3].split("(")[1].replace("%)", "")
              )}
            </span> */}
          </div>
        ))}
      </div>
      {/* <Landing /> */}
    </>
  );
}
