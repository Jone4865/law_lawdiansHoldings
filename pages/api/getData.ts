import type { NextApiRequest, NextApiResponse } from "next";

const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");

type Data = {
  data: any;
};

var dataArr: any = [];

const getHTML = async () => {
  try {
    return await axios({
      url: process.env.NEXT_PUBLIC_DATA_FROM,
      method: "get",
      responseType: "arraybuffer",
    });
  } catch (error) {
    console.log(error);
  }
};

const parsing = async () => {
  const html = await getHTML();
  const $ = cheerio.load(iconv.decode(html.data, "euc-kr"));

  const tableData = $(
    `body > table > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr > td:nth-child(2) > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td > div > table > tbody`
  );

  var num;
  for (num = 0; num <= 96; num++) {
    if (num > 3) {
      dataArr.push(tableData.find(`tr:nth-of-type(${num})`).text());
    }
  }
};

export default function getData(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (res.statusCode === 200) {
    parsing();
    res.status(200).json({
      data: dataArr && dataArr,
    });
  }
}
