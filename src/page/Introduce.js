import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import KakaoMap from '../component/KakaoMap';

const Introduce = () => {
  const [location, setLocation] = useState({ lat: 35.214967, lng: 128.830375}); // 김해 본사 좌표
  const [activeTab, setActiveTab] = useState("click"); 

  const historyData = {
    "2022년~현재": [
      {
        date: "2022-06",
        texts: ["CI 및 BI 리뉴얼 완료", "신규사명 (주)HC컴퍼니와 브랜드명 HC* 공표"],
        images: ["/img/a1.jpg", "/img/a2.jpg", "/img/a3.jpg", "/img/a4.jpg"],
      },
      {
        date: "2022-05",
        texts: ["3구 인덕션 레인지 플렉스/일반형 론칭", "비스티브 수비드 머신 및 진공 포장기 론칭","브루디캡슐커피머신 및 밀크프로더 론칭"],
      },
      {
        date: "2022-04",
        texts: ["국내 최초 특허기술 ‘스마트 블렌딩’탑재", "프리미엄 초고속 블렌더 ‘스마트 엑슬림 시그니처’ 론칭","2세대 세라믹 코팅 ‘세라닉스 프로’ 적용된 ‘아가베 IH 프라이팬’ 론칭"],
      },
      {
        date: "2022-03",
        texts: ["세계 여성의 날 기념, NGO 지파운데이션에 2000만원 상당 냄비 기부", "가야고분군 UNESCO 세계유산 등재 기원 관련 경상남도청 등 홍보 업무협약 체결","컴플리트 IH 프라이팬 론칭"],
      },
      {
        date: "2022-01",
        texts: ["EV온도센서 탑재된 팬, 옵티브 센서 IH 프라이팬 론칭", "넛지 텀블러 바다거북 에디션 론칭"],
      },
    ],
    "2021년": [
      {
        date: "2021-11",
        texts: ["해피콜X곰표 협업 ‘넛지 텀블러 곰표 에디션’ 론칭", "텀블러 수익금 기부 캠페인 ‘plastic Zero Fantastic Hero’ 전개","제 26회 한국유통대상 ‘대한상공회의소회장표창’ 수상"],
        images: ["/img/b1.jpg", "/img/b2.jpg", "/img/b3.jpg", "/img/b4.jpg"],
      },
      {
        date: "2021-10",
        texts: ["진공냄비 ‘ZIN IN’ 론칭"],
      },
      {
        date: "2021-09",
        texts: ["‘오드 아담한 가전 핑크’ 론칭", "‘블리츠 IH’ 프라이팬 론칭","‘크리스비 에어프라이어 시리즈’ 론칭","NGO 지파운데이션에 2900만원 상당 프라이팬 기부"],
      },
      {
        date: "2021-08",
        texts: ["해피콜XCGV 협업 ‘파코니 플렉스팬’ 론칭", "2nd 광복절 특별판 ‘플렉스팬 별 헤는 밤 에디션 IH’ 론칭","‘플랑 주물 냄비 IH’ 론칭"],
      },
      {
        date: "2021-07",
        texts: ["실속형 초고속 블렌더 ‘브리즈 시리즈’ 론칭"],
      },
      {
        date: "2021-06",
        texts: ["해피콜X브레이브걸스 협업 ‘팬심저격 쁘라이팬’ 론칭","‘액슬림 시리즈’ 누적 판매량 110만대, 누적 판매 4000억원 기록","‘듀얼 스마트팟’ 론칭"],
      },
      {
        date: "2021-04",
        texts: ["‘액슬림 큐브·글램·퀀텀2’ 론칭"],
      },
      {
        date: "2021-03",
        texts: ["‘플렉스팬 블랑 IH 와이드’ 론칭"],
      },
      {
        date: "2021-01",
        texts: ["해피콜X곰표 협업 ‘곰표플렉스팬’ 론칭","메쏘 인덕션 레인지 프레임론칭","‘엑슬림 뉴트로’ 론칭"],
      },
    ],
    "2020년": [
      {
        date: "2020-12",
        texts: ["소형가전 라인 '오드 아담한 가전' 론칭"],
        images: ["/img/c1.jpg", "/img/c2.jpg", "/img/c3.jpg", "/img/c4.jpg"],
      },
      {
        date: "2020-11",
        texts: ["'앳지 블랑 IH' 팬 & 냄비 론칭"],
      },
      {
        date: "2020-08",
        texts: ["'엑슬림 퀀텀' 론칭","'플렉스팬 IH 롤리팝' 론칭","해피콜·네오플램·삼광글라스 3사 1억원 상당 주방용품 공동 기부"],
      },
      {
        date: "2020-07",
        texts: ["1st 광복절 특별판 '플렉스팬 무궁무진무궁화 에디션 IH' 론칭","'누아르·아티젠 IH' 프라이팬 론칭"],
      },
      {
        date: "2020-06",
        texts: ["'포레스트 우드·비바·엣지' 조리도구 3종 론칭","김해공장 스마트 팩토리 고도화 사업 완료"],
      },
      {
        date: "2020-01",
        texts: ["'플렉스팬 IH' 론칭"],
      },
    ],
    "2015~2019년": [
      {
        date: "2019-11",
        texts: ["'포레스트 우드 IH' 팬 & 냄비 론칭"],
        images: ["/img/d1.jpg", "/img/d2.jpg", "/img/d3.jpg", "/img/d4.jpg"],
      },
      {
        date: "2019-04",
        texts: ["인도네시아 오프라인, 슬로베니아, 카자흐스탄, 키르키스탄 수출"],
      },
      {
        date: "2018-11",
        texts: ["'싱크로 IH 양면팬' 2018 굿 디자인·우수 디자인 상품 선정","'IH 진공냄비' 싱가포르 도메스틱 디바 어워즈 수상"],
      },
      {
        date: "2018-07",
        texts: ["'싱크로 IH 양면팬' 론칭"],
      },
      {
        date: "2018-02",
        texts: ["독일 암비안테 출품","베트남, 러시아, 폴란드, 모로코 수출"],
      },
      {
        date: "2017-12",
        texts: ["'크로커다일 IH' 론칭","'IH 플라즈마 시리즈' 싱가포르 도메스틱 디바 어워즈 수상"],
      },
      {
        date: "2017-02",
        texts: ["독일 암비안테 출품","독일, 이탈리아, 리투아니아 수출"],
      },
      {
        date: "2016-12",
        texts: ["한중경제교류 증진 관련 산업통산자원부 장관상 수상"],
      },
      {
        date: "2016-08",
        texts: ["'다이아몬드 시리즈' 싱가포르 도메스틱 디바 어워즈 수상"],
      },
      {
        date: "2016-02",
        texts: ["독일 암비안테 출품","폴란드, 호주수출"],
      },
      {
        date: "2015-12",
        texts: ["'다이아몬드 프라이팬' 누적 판매액 2500억원 기록"],
      },
      {
        date: "2015-07",
        texts: ["초고속 블렌더 '엑슬림 론칭"],
      },
      {
        date: "2015-02",
        texts: ["'독일 암비안테 출품"],
      },
      {
        date: "2015-01",
        texts: ["'티타늄 IH' 팬 & 냄비 론칭","러시아, 몽골, 이스라엘 수출"],
      },
    ],
    "2010~2014년": [
      {
        date: "2014-08",
        texts: ["김해 본사 및 공장 준공, 이전"],
        images: ["/img/e1.jpg", "/img/e2.jpg", "/img/e3.jpg", "/img/e4.jpg"],
      },
      {
        date: "2014-07",
        texts: ["양면팬 누적 판매량 2000만대 돌파"],
      },
      {
        date: "2014-02",
        texts: ["독일 암비안테 출품","인도네시아 양면팬 100만개 판매 달성","홍콩 수출"],
      },
      {
        date: "2013-06",
        texts: ["'IH 진공냄비' 론칭"],
      },
      {
        date: "2013-02",
        texts: ["독일 암비안테 출품"],
      },
      {
        date: "2012-12",
        texts: ["제 49회 무역의 날 '수출 2000만불탑' 수상"],
      },
      {
        date: "2012-07",
        texts: ["해피콜 대만 법인 설립","인도네시아 홈쇼핑, 대만, 미국, 싱가포르, 뉴질랜드 수출"],
      },
      {
        date: "2011-12",
        texts: ["태국, 말레이시아, 필리핀, 베트남 홈쇼핑, UAE 수출"],
      },
      {
        date: "2010-11",
        texts: ["제 47회 무역의 날 '수출 1000만불탑' 수상"],
      },
      {
        date: "2010-07",
        texts: ["해피콜 중국 법인 설립"],
      },
      {
        date: "2010-05",
        texts: ["'아르마이드 세라믹 냄비'론칭","중국, 일본, 인도 수출"],
      },
    ],
    "1999~2009년": [
      {
        date: "2009-07",
        texts: ["'직화오븐' 론칭"],
        images: ["/img/f1.jpg", "/img/f2.jpg", "/img/f3.jpg", "/img/f4.jpg"],
      },
      {
        date: "2008-05",
        texts: ["'다이아몬드 프라이팬' 론칭"],
      },
      {
        date: "2003-01",
        texts: ["'양면팬' CJ홈쇼핑 2002년도 히트상품 선정"],
      },
      {
        date: "2001-10",
        texts: ["'양면팬' 론칭"],
      },
      {
        date: "1999-06",
        texts: ["해피콜 설립"],
      },
    ],
  };

  const [activeTabHistory, setActiveTabHistory] = useState("2022년~현재");
    
  return (
    <div className="subpage">
      
      <Container id="location1">
          <div className="sub-logo" data-name="sub-content">
              <div className="page-logo">
                  <img src="/img/logo_big.png" alt=""/>
              </div>
              <div className="tit">
                  해피콜로 만들어 온 주방의 행복,<br/>
                  HC*로 함께할 당신의 더 나은 매일 그리고 내일
              </div>
              <div className='text-wrap'>
                  <p>1999년 첫 걸음을 뗀 후 양면팬, 프라이팬, 냄비, 초고속 블렌더, 소형 가전까지<br/>
                  날개를 차근차근 펼치며 집집마다 하나씩 있는 해피콜이 되었습니다.</p>
                  <p>그리고 더도 말고 덜도 말고 사부작사부작 요리해 맛있는 밥을 먹는 매일의 행복을 항상 여러분에게 나누고자 했습니다.</p>
                  <p>그 행복을 제대로 전하기 위해 한결같이 지켜 온 원칙이 있어요.</p>
                  <p>작은 프라이팬을 하나 만들어도 최고 순도의 판재, 독보적인 코팅 공정, 엄격한 품질테스트를 고집했습니다.<br/>
                  고객 만족을 위한 연구·개발에 늘 부단했고, “조금 더 좋게, 좋게”를 되뇌이며 까다로운 초고속 블렌딩 구현기술에 대한 집념도 놓치지 않았습니다.</p>
                  <p>때로는 어렵게 가도 품질만은 양보가 없는 해피콜만의 깐깐함.<br/>
                  23년 간의 남다른고집을 써본 분들은 알아주셨기에 양면팬 누적 2000만개, 다이아몬드 프라이맨 2500만개,<br/>
                  누적 120만대에 육박하는 초고속 블렌서 ‘엑슬림’ 시리즈 등이 해피콜의 역사에 자리할 수 있게 되었어요.</p>
                  <p>일상 속 빼놓을 수 없는 식(食)행복을 함께 만들어 온 품질만큼은 양보없이 23년 간 최고를 고집해 온 여러분 주방 속 해피콜이 HC*로 새롭게 태어납니다.</p>
              </div>
          </div>
      </Container>
      
      <Container id="location2">
          <div className="sub-intro" data-name="sub-content">
              <div className="tit">HC*의 중요한 가치</div>
              <div className="sub-inner">
                <img className="d-none d-md-block" src="/img/page2.png" alt=""/>
                <img className="d-block d-md-none" src="/img/page22.png" alt=""/>
              </div>
          </div>
      </Container>
      
      <Container id="location3">
          <div className="sub-intro" data-name="sub-content">
              <div class="tit-wrap">
                <div className="tit">CI 및 BI 사용 가이드</div>
                <a className="btn point-btn"
                    href="/img/HC_LOGO.pdf" target="_blank">
                  PDF 다운로드
                  </a>
              </div>
              <div className="sub-inner">
                <div className="sub-guide">
                  <div className="sub-item">
                    <div className="btn point-btn">CI</div>
                    <p>기본 사용 원칙 : 법적으로 (주)에이치씨컴퍼니를 명시해야 하는 경우를 제외하고는 CI는 모두 (주)HC컴퍼니를 사용합니다.</p>
                    <div className="item-inner">
                        <div class="d-flex">
                          <div class="text-box">
                            <p>SUIT Font_R</p>
                            <p>주식회사 HC컴퍼니</p>
                            <p>(주)HC컴퍼니</p>
                            <p>HC Company</p>
                          </div>
                          <div class="text-box">
                            <p className="bold">SUIT Font_R</p>
                            <p className="bold">주식회사 HC컴퍼니</p>
                            <p className="bold">(주)HC컴퍼니</p>
                            <p className="bold">HC Company</p>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="sub-item">
                    <div className="btn point-btn">BI</div>
                    <div className="item-inner">
                        <div className="d-flex">
                          <div className="img">
                            <img src="/img/page31.png" alt="" />
                            <p>기본형</p>
                          </div>
                          <div className="img">
                            <img src="/img/page32.png" alt="" />
                            <p>응용형</p>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="sub-item">
                    <div className="btn point-btn">COLOR</div>
                    <p>빨간색의 활기와 노란색의 친근함, 따뜻함을 결합하여 열과 에너지를 발산하는 역동적 에너지를 불어넣습니다.</p>
                  </div>

                </div>
                <div className="sub-text">
                  <p>'행복을 부르는' 이란 의미로 시작된 해피콜
                  '행복'은 해피콜이 추구하는 대표 키워드입니다.</p>
                  <p>고객의 미소를 상징하는 'H'와 별을 향한 의지를 표현한 'C'<br/>
                    그리고 공존과 화합을 상징하는 다섯개의 손이 맞잡으면서 탄생한
                    '행복의 별'이 모여 새로운 'HC* 해피콜' 로 탄생하였습니다.</p>
                </div>
              </div>
          </div>
      </Container>

      <Container id="location4">
          <div className="sub-intro" data-name="sub-content">
            <div className="tit">안전보건 경영방침</div>
              <div className="sub-inner">
                <div className="sub-guide border">
                (주)에이치씨컴퍼니는 기업 경영활동 전반에 전 사원의 안전과 보건을 기업의 최우선 가치로 인식하고, 법규 및 기준을 준수하는 안전보건관리체계를 구축하여 전 직원이 안전하고 쾌적한 환경에서 근무할 수 있도록 최선을 다한다.
                </div>
                <div className="text-wrap">
                  <p>1. 회사의 모든 활동에 안전보건경영을 최우선으로 실행한다</p>
                  <p>2. 안전보건 목표와 가치를 경영층, 직원, 협력사 및 근로자와 상시 공유하고 상생 협력한다.</p>
                  <p>3. 안전보건 관련 법규와 회사 규정을 명확히 인지하고 철저히 준수한다.</p>
                  <p>4. 주기적으로 안전보건 RISK를 사전에 파악하여 조치한다.</p>
                  <p>5. 안전보건 업무 프로세스를 지속적으로 점검하고 개선하여 운영한다.</p>
                  <p>6. 감염병 예방 및 건강증진활동을 실행하고 참여한다.</p>
                  <p>7. 근로자가 안전보건활동에 참여하고 협의할 수 있도록 보장한다.</p>
                </div>
                <div className="sub-sign">
                  <div className="sub-text">
                    <p className="h5">2023년 01월 01일</p>
                    <p className="h5">(주)에이치씨컴퍼니 대표이사 배수찬</p>
                  </div>
                  <div className="img">
                    <img src="/img/sign.jpg" alt=""/>
                  </div>
                </div>
              </div>
          </div>
      </Container>
      
      <Container id="location5">
        <div className="sub-intro" data-name="sub-content">
          <div className="tit">HC*의 역사</div>
          <div className="sub-history">
            {/* 연도별 버튼 */}
            <div className="history-btn">
              {Object.keys(historyData).map((year) => (
                <button
                  key={year}
                  className={`btn outline-btn ${activeTabHistory === year ? "active" : ""}`}
                  onClick={() => setActiveTabHistory(year)}
                >
                  {year}
                </button>
              ))}
            </div>
            <div className="history-inner">
            {/* 이미지가 있는 경우, 연도별로 이미지 먼저 표시 */}
            {historyData[activeTabHistory].some(item => item.images) && (
              <div className="history-img">
                {historyData[activeTabHistory].map((item, idx) => 
                  item.images?.map((img, imgIdx) => (
                    <img key={`${idx}-${imgIdx}`} src={img} alt={`history-${imgIdx}`} />
                  ))
                )}
              </div>
            )}

            {/* 선택된 연도의 히스토리 목록 */}
            <div className="history-content">
              {historyData[activeTabHistory].map((item, index) => (
                <div key={index} className="content-inner">
                  <div className="content-date">{item.date}</div>
                  <ul className="content-text">
                    {item.texts.map((text, idx) => (
                      <li key={idx}>{text}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            </div>
          </div>
        </div>
      </Container>


      <Container id="location6">
          <div className="sub-intro" data-name="sub-content">
            <div className="tit">HC* 찾아오시는 길</div>
            <div className="sub-inner">
              <div className="map-btn" data-index="mab-tab">
                <button className={`btn outline-btn ${activeTab === "click"? "active":""}`} 
                  onClick={() => {
                    setLocation({ lat: 35.214967, lng: 128.830375})
                    setActiveTab('click');
                    }}>
                  김해 본사
                </button>
                <button className={`btn outline-btn ${activeTab === "clickSeoul"? "active":""}`}
                  onClick={() => {
                    setLocation({ lat: 37.515891, lng: 127.037977})
                    setActiveTab('clickSeoul');
                  }}>
                  서울 사무소
                </button>
              </div>
              <div className="kakao-map">
                <KakaoMap lat={location.lat} lng={location.lng} />
              </div>
            </div>
          </div>
      </Container>
    </div>
  )
}

export default Introduce
