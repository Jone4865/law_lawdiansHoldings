import { useRouter } from "next/router";
import styles from "./ComponentTop.module.scss";
import className from "classnames/bind";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const cx = className.bind(styles);

type Props = {
  category: string;
  title: string;
};

export default function ComponentTop({ category, title }: Props) {
  const router = useRouter();

  const [cateName, setCateName] = useState(category);
  const [cateView, setCateView] = useState(false);
  const [moreName, setMoreName] = useState("");
  const [moreView, setMoreView] = useState(false);

  const nowMore = router.pathname.split(`/${category.toLowerCase()}/`)[1];

  const [pc, setPc] = useState(true);
  const isPc = useMediaQuery({
    query: "(min-width: 759px) and (max-width: 1920px)",
  });

  useEffect(() => {
    if (isPc) {
      setPc(true);
    } else {
      setPc(false);
    }
  }, [isPc]);

  useEffect(() => {
    nowMore === "greetings" && setMoreName("인사말");
    nowMore === "introduce" && setMoreName("회사소개");
    nowMore === "history" && setMoreName("회사연혁");
    nowMore === "BICI" && setMoreName("BI/CI");
    nowMore === "location" && setMoreName("찾아오시는 길");
    nowMore === "news" && setMoreName("언론보도");
    nowMore === "inquiry" && setMoreName("문의");
  }, []);

  const cateDropDown = ["COMPANY", "BUSINESS", "COMMUNITY"];

  const companyDropDown = [
    "인사말",
    "회사소개",
    "회사연혁",
    "BI/CI",
    "찾아오시는 길",
  ];
  const companyPath = ["greetings", "introduce", "history", "BICI", "location"];
  const moreDropDown = ["언론보도", "문의"];
  const morePath = ["news", "inquiry"];

  return (
    <div className={cx("container")}>
      <div className={cx("image_wrap")}>
        <Image fill alt="탑 이미지" src={`/img/ComponentTop/${category}.png`} />
      </div>
      <div className={cx(pc ? "center" : "none")}>
        <Image
          width={13.8}
          height={16.5}
          alt="홈 아이콘"
          src="/img/ComponentTop/home.png"
        />
        <div
          onClick={() => setCateView((prev) => !prev)}
          className={cx("category")}
        >
          <p>{cateName}</p>
          <Image
            src="/img/ComponentTop/down_btn.png"
            alt="아래 버튼"
            width={10}
            height={7}
          />
          {cateView && (
            <div
              onMouseLeave={() => {
                setCateView(false);
              }}
              className={cx(`cate_dropdown_container`)}
            >
              <div className={cx(`mask`)} />
              <div className={cx("dropdown_content_wrap")}>
                {cateDropDown.map((item, idx) => (
                  <div
                    key={idx}
                    className={cx("active")}
                    onClick={() => {
                      item !== "BUSINESS"
                        ? setCateName(item)
                        : router.push("/business");
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {cateName !== "BUSINESS" && (
          <div
            className={cx("category")}
            onClick={() => setMoreView((prev) => !prev)}
          >
            <div>{moreName === "" ? "선택해주세요." : moreName}</div>
            <Image
              src="/img/ComponentTop/down_btn.png"
              alt="아래 버튼"
              width={10}
              height={7}
            />
            {moreView && (
              <div
                onMouseLeave={() => {
                  setMoreView(false);
                }}
                className={cx(
                  cateName !== "COMPANY"
                    ? `cate_dropdown_container`
                    : `more_dropdown_container`
                )}
              >
                <div className={cx(`mask`)} />
                <div className={cx("dropdown_content_wrap")}>
                  {cateName === "COMPANY"
                    ? companyDropDown.map((item, idx) => (
                        <div
                          key={idx}
                          className={cx("active")}
                          onClick={() =>
                            router.push(`/company/${companyPath[idx]}`)
                          }
                        >
                          {item}
                        </div>
                      ))
                    : moreDropDown.map((item, idx) => (
                        <div
                          key={idx}
                          className={cx("active")}
                          onClick={() =>
                            router.push(`/community/${morePath[idx]}`)
                          }
                        >
                          {item}
                        </div>
                      ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <div className={cx("bottom")}>
        <div>{title}</div>
        {moreName === "회사연혁" && (
          <div className={cx("sub_title")}>
            2016
            <div className={cx("line")} />
            2023
          </div>
        )}
      </div>
    </div>
  );
}
