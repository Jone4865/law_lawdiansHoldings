import { useEffect, useState } from "react";
import styles from "./Greetings.module.scss";
import className from "classnames/bind";
import ComponentTop from "../../ComponentTop/ComponentTop";
import Footer from "../../Footer/Footer";
import { useMediaQuery } from "react-responsive";

const cx = className.bind(styles);

export default function Greetings() {
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

  return (
    <div className={cx("container")}>
      <ComponentTop title="GREETINGS" category="COMPANY" />
      <div>
        <div className={cx("top_content_wrap")}>
          {pc ? (
            <>
              <div className={cx("line_one")}>
                <div className={cx("bold")}>로디언즈 홀딩스</div>는 2016년에
                설립하여
                <div className={cx("bold")}>
                  &apos;시스템 개발&apos;및 &apos;운영 관리 시스템&apos;
                </div>
                을 자체적으로 개발, 운영해왔으며,
                <br />
              </div>
              <div className={cx("line_one")}>
                <div className={cx("bold")}>
                  &apos;블록체인 R&D 2회 선정&apos;
                </div>
                의 이력을 통해
                <div className={cx("bold")}>
                  블록체인에 대한 이해도가 높은 기업
                </div>
                입니다.
              </div>
            </>
          ) : (
            <div className={cx("top")}>
              <div className={cx("top_top")} />
              <div className={cx("top_center")}>
                <div className={cx("line_one")}>안녕하십니까?</div>
                <div className={cx("line_two")}>
                  <p className={cx("blue")}>로디언즈 홀딩스</p>를
                </div>
                <p className={cx("line_three")}>방문해주셔서 감사합니다.</p>
              </div>
              <div className={cx("top_bottom")} />
              <div className={cx("line")} />
            </div>
          )}
        </div>
        <div className={cx("top_wrap")}>
          {pc && (
            <div className={cx("top")}>
              <div className={cx("top_top")} />
              <div className={cx("top_center")}>
                <div className={cx("line_one")}>안녕하십니까?</div>
                <div className={cx("line_two")}>
                  <p className={cx("blue")}>로디언즈 홀딩스</p>를
                </div>
                <p className={cx("line_three")}>방문해주셔서 감사합니다.</p>
              </div>
              <div className={cx("top_bottom")} />
              <div className={cx("line")} />
            </div>
          )}
          <div className={cx("bottom")}>
            국내에서 블록체인 기술을 활용한 서비스는
            <br />
            각종 규제와 불법 자금의 문제로
            <br />
            아직 부정적인 이미지를 가지고 있다고 생각합니다.
            <br />
            <br />
            그러나 이러한 서비스는
            <div className={cx("mobile")}>
              <br />
            </div>{" "}
            마치 기름을 사용하는 자동차가
            <br />
            친환경 자동차로 변해가는 것과 같은
            <div className={cx("mobile")}>
              <br />
            </div>{" "}
            세상의 변화와
            <div className={cx("pc")}>
              <br />
            </div>
            다르지 않다고 생각합니다.
            <br />
            <br />
            로디언즈 홀딩스의 전 임직원은
            <br />
            세상을 더 좋게 바꾸는 것을 목표로
            <div className={cx("mobile")}>
              <br />
            </div>{" "}
            끊임없이 노력하고 성장하겠습니다.
            <br />
            <br />
            감사합니다.
          </div>
          <div className={cx("sign")}>
            (주) 로디언즈 홀딩스
            <div className={cx("sign_bold")}> 대표 윤창기 올림</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
