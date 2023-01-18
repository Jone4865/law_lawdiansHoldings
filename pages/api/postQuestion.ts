import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: string;
};

export default function postQuestion(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    service: process.env.NEXT_PUBLIC_SEND_SITE,
    auth: {
      user: process.env.NEXT_PUBLIC_SEND_ADDRESS,
      pass: process.env.NEXT_PUBLIC_SEND_PASSWORD,
    },
  });

  if (req.body) {
    const mailOptions = {
      from: req.body.email,
      to: process.env.NEXT_PUBLIC_SEND_ADDRESS,
      subject: `${process.env.NEXT_PUBLIC_SURVICE_NAME} 문의 메일`,
      html: `<p><div>문의 내용 : ${JSON.parse(req.body).content}</div>
    <div>연락처 : ${JSON.parse(req.body).cellPhone}</div></p>`,
    };

    transporter.sendMail(mailOptions, (err: any) => {
      if (err) {
        return res.status(500).json({ status: "500" });
      } else {
        return res.status(200).json({ status: "200" });
      }
    });
  }
  return res.status(200).json({ status: res.statusCode.toString() });
}
