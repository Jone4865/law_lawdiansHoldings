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
  const [pc, setPc] = useState(true);

  const nowMore = router.pathname.split(`/${category.toLowerCase()}/`)[1];

  const cateDropDown = ["COMPANY", "TEAMS", "BUSINESS", "COMMUNITY"];

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

  const isPc = useMediaQuery({
    query: "(min-width: 759px) and (max-width: 10000px)",
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

  return (
    <div className={cx("container")}>
      <div className={cx("image_wrap")}>
        <Image
          className={cx("bg")}
          fill
          alt="탑 이미지"
          src={`/img/ComponentTop/${
            pc
              ? `${category.toLowerCase()}.webp`
              : `${category.toLowerCase()}_m.png`
          }`}
          priority
        />
      </div>
      <div className={cx(pc ? "center" : "none")}>
        <Image
          onClick={() => router.push("/")}
          width={13.8}
          height={16.5}
          alt="홈 아이콘"
          src="/img/ComponentTop/home.png"
          priority
          style={{ cursor: "pointer" }}
        />
        <div
          onClick={() => setCateView((prev) => !prev)}
          className={cx("category")}
        >
          <p>{cateName}</p>
          <Image
            className={cx(cateView && "up")}
            src="/img/ComponentTop/down_btn.png"
            alt="아래 버튼"
            width={10}
            height={7}
            priority
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
                        ? item === "COMMUNITY"
                          ? router.push(`/${item.toLowerCase()}/news`)
                          : item === "TEAMS"
                          ? router.push(`/${item.toLowerCase()}`)
                          : router.push(`/${item.toLowerCase()}/greetings`)
                        : router.push("/business");
                      setCateName(item);
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {cateName !== "BUSINESS" && cateName !== "TEAMS" && (
          <div
            className={cx("category")}
            onClick={() => setMoreView((prev) => !prev)}
          >
            <div>{moreName === "" ? "선택해주세요." : moreName}</div>
            <Image
              className={cx(moreView && "up")}
              src="/img/ComponentTop/down_btn.png"
              alt="아래 버튼"
              width={10}
              height={7}
              priority
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
      <div
        className={cx(nowMore !== "greetings" ? "bottom" : "bottom_greetings")}
      >
        <div className={cx(nowMore === "greetings" ? "greeting_title" : "")}>
          {title}
        </div>
        {moreName === "회사연혁" && (
          <div className={cx("sub_title")}>
            2016
            <div className={cx("line")} />
            2023
          </div>
        )}
        {nowMore === "greetings" && (
          <div className={cx("greetings_wrap")}>
            <div className={cx("body")}>
              <div className={cx("greetings_title")}>{title}</div>
              <div className={cx("greetings_content")}>
                <div className={cx("flex")}>
                  <div className={cx("bold")}>로디언즈 홀딩스</div>
                  <div>는 2016년에 설립하여</div>
                  <br />
                </div>
                <div className={cx("flex")}>
                  <div className={cx("bold")}>
                    &apos;플랫폼 시스템 개발&apos; 및 &apos;IT 운영 관리
                    시스템&apos;
                  </div>
                  <div>을</div>
                  <br />
                </div>
                자체적으로 개발/운영해왔으며,
                <br />
                <div className={cx("flex")}>
                  <div className={cx("bold")}>
                    &apos;블록체인 R&D 2회 선정&apos;
                  </div>
                  <div>의 이력을 통해</div>
                  <br />
                </div>
                <div className={cx("flex")}>
                  <div className={cx("bold")}>
                    국내 최고의 블록체인기술을 보유한 기업
                  </div>
                  <div>입니다.</div>
                </div>
              </div>
            </div>
            <div className={cx("greetings_logo")} />
          </div>
        )}
      </div>
    </div>
  );
}
