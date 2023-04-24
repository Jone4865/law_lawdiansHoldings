import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  news: any;
  totalCount: number;
};

const allNews = [
  {
    id: 1,
    title: "로디언즈, 국내 최초 '안심 의료(성형)서비스' 제공",
    url: "https://news.mt.co.kr/mtview.php?no=2017112013177499263&outlink=1&ref=https%3A%2F%2Fsearch.naver.com",
    createdAt: "2017-11-20 T18:20:00",
    sum: '숭실대학교 창업지원단 벤처중소기업센터 우수기업(1) 윤창기 대표 "성형 부작용, 의료사고 등을 예방·대응하는 소비자형 의료서비스 시작"',
    sources: "머니투데이",
  },
  {
    id: 2,
    title: "숭실대 창업지원단, 로디언즈, ‘안심병원’ 의료 서비스 신뢰↑",
    url: "http://www.viva100.com/main/view.php?key=20180831010009801",
    createdAt: "2018-08-31 T01:51:00",
    sum: "안전이 검증된 병원에서 의료 서비스를 받고, 혹시 모를 의료사고를 예방·대응할 수 있는 서비스가 있어 눈길을 끌고 있다. ",
    sources: "브릿지경제",
  },
  {
    id: 3,
    title: "로디언즈, 성형 부작용 예방·대응 서비스로 안전하게 예뻐지자",
    url: "https://news.mt.co.kr/mtview.php?no=2018091114057443466",
    createdAt: "2018-09-11 T14:36:00",
    sum: `숭실대학교 창업지원단 우수기업 윤창기 대표  "'안심 의료 서비스'로 의료분쟁 가능성 최소화"`,
    sources: "머니투데이",
  },
  {
    id: 4,
    title: "안심의료 서비스' 로디언즈 윤창기 대표, 청년혁신가 30인에 선정",
    url: "https://news.mt.co.kr/mtview.php?no=2019012515507461355",
    createdAt: "2019-01-25 T16:45:00",
    sum: `숭실대학교 창업지원단 우수기업 로디언즈 "블록체인 기술로 고객 의료정보 암호화 기술 고도화 추진"`,
    sources: "",
  },
  {
    id: 5,
    title: "블록체인 안전자산보관 서비스 '그루/GRU(KRWG)'",
    url: "https://www.fnnews.com/news/202101181516472007",
    createdAt: "2021-01-18 T8:00:00",
    sum: "2021년을 기점으로 비트코인, 이더리움 등의 가상자산이 연일 최고기록을 경신하며 급등하고 미국 통화감독청이 은행의 스테이블 코인을 활용한 결제 업무를 승인하는 등 가상자산의 현실화 이슈가 주목받기 시작했다.",
    sources: "파이낸셜뉴스",
  },
  {
    id: 6,
    title:
      "블록체인 안전자산 보관서비스 ‘그루’ 버그바운티 ‘Hack the Gru 2021’ 시상식 개최",
    url: "http://www.businesskorea.co.kr/news/articleView.html?idxno=60180",
    createdAt: "2021-02-09 T8:00:00",
    sum: "트론(TRON) 기반의 탈중앙화 가상자산 안전 보관 서비스 '그루(GRU, KRWG)'가 안전성 검증의 일환으로 진행한 총 상금 1,000만원 규모의 버그바운티 이벤트 ‘Hack the Gru 2021’의 시상식을 개최해 관심을 모았다.",
    sources: "비지니스코리아",
  },
  {
    id: 7,
    title: "델리오·로디언즈·블록체인컴퍼니 등 43개 업체 ,ISMS 획득",
    url: "https://it.chosun.com/site/data/html_dir/2021/09/22/2021092200419.html",
    createdAt: "2021-09-22 T8:00:00",
    sum: "임시 인증위원회에서는 델리오, 로디언즈, 블록체인컴퍼니 등 3개 업체가 추가로 ISMS 인증을 획득했다. 이에 따라 ISMS 인증을 획득한 가상자산사업자는 총43곳으로 늘어났다.",
    sources: "IT조선",
  },
  {
    id: 8,
    title: "㈜로디언즈, 국내 800여개 병원과 안심의료서비스 제휴",
    url: "https://www.itbiznews.com/news/articleView.html?idxno=73727",
    createdAt: "2022-07-01 T8:00:00",
    sum: "㈜로디언즈는 2016년 런칭한 AtoZ 안심의료서비스를 제공하는 기업이다. 로디언즈의 안심의료서비스란 고객의 수술 전·후의 사진, 진료기록, 수술부위 등 정보를 어플리케이션 내 개인 다이어리에 등록하고",
    sources: "IT비즈뉴스",
  },
  {
    id: 9,
    title: "로디언즈 안심의료서비스, 부작용 피해자 위한 지원 나서",
    url: "https://www.sisamagazine.co.kr/news/articleView.html?idxno=458318",
    createdAt: "2022-08-10 T8:00:00",
    sum: "[시사매거진] ㈜로디언즈는 의료사고 및 시술 부작용에 대한 피해자 구제를 위한 특허서비스를 런칭한 곳으로 병원들에게 안심병원이라는 타이틀을 제공함으로서",
    sources: "시사매거진",
  },
  {
    id: 10,
    title: "㈜로디언즈-㈜오케이시스템, 임직원 대상 복지서비스 MOU체결",
    url: "https://www.job-post.co.kr/news/articleView.html?idxno=61301",
    createdAt: "2022-09-20 T16:38:00",
    sum: "㈜로디언즈(대표 윤창기)와 전국 아파트 및 주택 등 집합건물 관리를 위한 인력파견 서비스를 하고 있는 ㈜오케이시스템(대표 임치성)이 임직원와 가족들을 대상으로 복지서비스를 제공하는 업무협약을 2022년 9월 20일 체결해 눈길을 끌었다.",
    sources: "잡포스트",
  },
  {
    id: 11,
    title:
      "㈜로디언즈, 성형부작용 피해자의 일상회복 위한 간담회 ‘토닥토닥’ 개최예정",
    url: "https://www.itbiznews.com/news/articleView.html?idxno=78683",
    createdAt: "2022-10-18 T8:00:00",
    sum: "㈜로디언즈(대표: 윤창기)는 의료사고 및 부작용 피해자의 권익보호를 위한 솔루션업체로, 지금까지 수많은 성형 및 기타 의료사고 피해자들과 상담했던 노하우를 살려 오는 11월 2일, 본사 사옥에서 ‘제1회 성형부작용 피해자 일상회복 프로젝트, 토닥토닥’을 개최한다고 밝혔다.",
    sources: "IT비즈뉴스",
  },
  {
    id: 12,
    title:
      "로디언즈 성형부작용 안심의료서비스, 2022년 산학연 우수과제 표창 수상",
    url: "http://www.e2news.com/news/articleView.html?idxno=248150",
    createdAt: "2022-11-29 T10:26:00",
    sum: "로디언즈는 25일 열린 ‘2022년 산학연 서울지역협회 우수과제 전시회’에서 산학연 협력 우수과제 포상 수상자로 선정되어 서울지방중소벤처기업청장 표창을 수상했다고 밝혔다.",
    sources: "이투뉴스",
  },
  {
    id: 13,
    title: "로디언즈홀딩스, STO로 탄소배출권 시장 활성화 MOU 체결",
    url: "http://www.e2news.com/news/articleView.html?idxno=252475",
    createdAt: "2023-04-05 T8:00:00",
    sum: "㈜로디언즈홀딩스(대표 윤창기)는 ㈜페트라인터내셜널컴퍼니, ㈜그린사이언스파워, ㈜리얼디비젼과 함께 4개사의 역량을 모아 ‘석탄 대신 그린수소를 활용하여 탄소배출 없는 친환경 전기를 생산하는 플라즈마 발전소를 통해 발생된 탄소배출권을 디지털 유동화 수익증권인 토큰증권(STO)으로 연구 개발 및 시장 유통’을 위한 업무협약을 체결했다고 밝혔다.",
    sources: "이투뉴스",
  },
  {
    id: 14,
    title: "리얼디비젼, 국회세미나 참여로 글로벌 STO 발전에 이바지",
    url: "https://www.itbiznews.com/news/articleView.html?idxno=95317",
    createdAt: "2023-04-06 T13:44:00",
    sum: "4월 6일 오늘 오전 10시 국회의사당 국회의원회관 제2세미나실에서 ‘글로벌 STO 규제 현황과 제도 도입 방향에 대한 논의’를 주제로 세미나가 개최됐다. 이날 세미나에는 토큰증권에 관심 있는 150여명의 관계자가 참여해 객석을 가득 채워 성황을 이루었다. ",
    sources: "IT비즈뉴스",
  },
];

const PAGE_SIZE = 5;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const page = parseInt(req.query.page as string, 5) || 1;
  const limit = parseInt(req.query.limit as string, 5) || PAGE_SIZE;
  const offset = (page - 1) * limit;

  const reversedNews = allNews.slice().reverse(); // 배열 복사 후 뒤집기
  const news = reversedNews.slice(offset, offset + limit);
  const totalCount = reversedNews.length;

  res.status(200).json({ news, totalCount });
}
