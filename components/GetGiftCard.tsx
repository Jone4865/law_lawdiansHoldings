import { useEffect, useState } from "react";

type Data = {
  name: string;
  buyPercentage: number;
  sellPercentage: number;
  originBuyPrice: number;
  originSellPrice: number;
};

export default function GetGiftCard() {
  const [data, setData] = useState<Data[]>([]);

  //get 요청
  useEffect(() => {
    (async () => {
      const data = await (
        await fetch("/api/getData", {
          method: "GET",
        })
      ).json();

      const newData: Data[] = data.data.map((v: any) => {
        const originBuyPrice = Math.round(
          (+v?.split("\n\t\t\t\t\t\t")[3]?.split("(")[0]?.replaceAll(",", "") /
            (100 -
              parseFloat(
                v.split("\n\t\t\t\t\t\t")[3].split("(")[1].replaceAll("%)", "")
              ))) *
            100
        );
        const originSellPrice = Math.round(
          (+v?.split("\n\t\t\t\t\t\t")[3]?.split("(")[0]?.replaceAll(",", "") /
            (100 -
              parseFloat(
                v.split("\n\t\t\t\t\t\t")[3].split("(")[1].replaceAll("%)", "")
              ))) *
            100
        );

        return {
          name: v.split("\n\t\t\t\t\t\t")[1],
          originBuyPrice: isNaN(originBuyPrice) ? 0 : originBuyPrice,
          buyPercentage: parseFloat(
            v
              ?.split("\n\t\t\t\t\t\t")[2]
              ?.split("(")[1]
              ?.split("%)")
              ?.toString()
          ),
          originSellPrice: isNaN(originSellPrice) ? 0 : originSellPrice,
          sellPercentage: parseFloat(
            v.split("\n\t\t\t\t\t\t")[3].split("(")[1].replaceAll("%)", "")
          ),
        };
      });
      setData(newData);
    })();
  }, []);
  return (
    <div>
      {data?.map((data, index) => (
        <div key={index}>
          {/* // 상품권 이름 */}
          <span>{data?.name}</span>

          {/* // 매입 가격 */}
          <span>{data?.originBuyPrice}</span>

          {/* // 매입 퍼센트 */}
          <span>{data.buyPercentage}</span>

          {/* // 판매 가격 */}
          <span>{data.originSellPrice}</span>

          {/* // 판매 퍼센트 */}
          <span>{data.sellPercentage}</span>
        </div>
      ))}
    </div>
  );
}
