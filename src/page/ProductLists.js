import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import Slider from 'react-slick';

const products = [
  {
    id: "pan",
    title: "프라이팬",
    subtitle: "대한민국 프라이팬의 자존심 소재와 코팅 재질, 형태별로 펼쳐지는 다양한 HC* 프라이팬 라인업",
    img: "../img/a0.jpg",
    lists: [
      { id: 0, title: "플렉스팬 시리즈", subtitle: "굽고, 볶고, 끓여야 하는 어떤 요리도 플렉스팬 시리즈 하나로 간편하게", img: "/img/a1.jpg" },
      { id: 1, title: "컴플리트 시리즈", subtitle: "요리의 시작부터 완성까지 어떤 요리에도 늘 찾게 되는 팬", img: "/img/a2.jpg" },
      { id: 2, title: "그래핀 시리즈", subtitle: "21세기 검은 황금 '그래핀' 신소재 그래핀, 예열시간의 놀라운 감소", img: "/img/a3.jpg" },
      { id: 3, title: "포레스트 시리즈", subtitle: "숲에서 온 디자인 주방에서 피톤치드 가득한 숲속 분위기", img: "/img/a4.jpg" },
      { id: 4, title: "티타늄 시리즈", subtitle: "2만 여개 오일 스팟을 적용 매끄러운 코팅의 실현", img: "/img/a5.jpg" },
      { id: 5, title: "몬드 시리즈", subtitle: "특수 단조 공법으로 만든 THE 튼튼한 팬", img: "/img/a6.jpg" },
      { id: 6, title: "구이팬 시리즈", subtitle: "캠핑에서도 주방에서도!  믿고 쓰는 HC해피콜", img: "/img/a7.jpg" },
      { id: 7, title: "프리핸즈 시리즈", subtitle: "편리한 보관의 가능 하나로 끝내고 싶은 분을 위한 PICK", img: "/img/a8.jpg" },
      { id: 8, title: "시그니처 시리즈", subtitle: "최고급 코팅+항균 손잡이까지 시그니처 시리즈만의 특별함!", img: "/img/a9.jpg" },
      { id: 9, title: "다이아몬드 시리즈", subtitle: "손목에 부담없는 무게+편안한 손잡이 요리의 가벼움을 더하다", img: "/img/a10.jpg" },
      { id: 10, title: "지음 시리즈", subtitle: "오브제처럼 예쁘지음 눌어붙지도 않지음", img: "/img/a11.jpg" },
      { id: 11, title: "블랑 시리즈", subtitle: "둥근 바디와 앳지 있는 손잡이의 조화 와이드하고 깊은 팬이자 냄비로의 다양성", img: "/img/a12.jpg" }, 
      { id: 12, title: "블리츠 시리즈", subtitle: "HC해피콜의 2세대 세라믹 코팅, 세라닉스 프로 적용", img: "/img/a13.jpg" },
      { id: 13, title: "아가베 시리즈", subtitle: "모래 사막에서 싱그럽게 피어난 해피콜만의 세라믹 코팅팬", img: "/img/a14.jpg" },
      { id: 14, title: "누아르 시리즈", subtitle: "누아르-레드라벨 IH프라이팬 5P세트", img: "/img/a15.jpg" }
    ]
  },
  {
    id: "pan2",
    title: "양면팬",
    subtitle: "양면팬의 원조 맛집 기름, 냄새, 연기 모두 잡아주는 HC* 양면팬",
    img: "../img/b0.jpg",
    lists: [
      { id: 0, title: "셀렉트 시리즈", subtitle: "일반 프라이팬에서 할 수 없었던 다양한 퓨전요리의 시작", img: "/img/b1.jpg" },
      { id: 1, title: "빗살 시리즈", subtitle: "특수 실리콘 양면패킹 기술로 연기와 냄새의 최소화, 쾌적한 조리 가능", img: "/img/b2.jpg" },
      { id: 2, title: "그래핀 시리즈", subtitle: "그래핀 코팅으로 더욱 업그레이드 된 HC 해피콜 베스트셀링 양면팬", img: "/img/b3.jpg" }
    ]
  },
  {
    id: "pot",
    title: "냄비",
    subtitle: "한손·양손 냄비, 전골 냄비, 곰솥 냄비 등 혼밥 요리에도 여럿이 함께하는 요리에도 안성맞춤 HC* 냄비",
    img: "../img/c0.jpg",
    lists: [
      { id: 0, title: "앳지 시리즈", subtitle: "감성지상주의 디자인 깊이감을 더하고 Z세대 감성으로 완성", img: "/img/c1.jpg" },
      { id: 1, title: "다이아몬드 시리즈", subtitle: "강력한 물성과 매끄러운 표면을 지니고 높은 열전도율로 요리 시간의 단축", img: "/img/c2.jpg" },
      { id: 2, title: "그래핀 시리즈", subtitle: "21세기 검은 황금 '그래핀' 신소재 그래핀, 예열시간의 놀라운 감소", img: "/img/c3.jpg" },
      { id: 3, title: "아르보 시리즈", subtitle: "세라믹 코팅으로 긁힘·마모에 강하고 세척력도 우수하여 이용의 편리함", img: "/img/c4.jpg" },
      { id: 4, title: "티타늄 시리즈", subtitle: "맵고 진한 양념에도 강한 코팅", img: "/img/c5.jpg" },
      { id: 5, title: "이든 시리즈", subtitle: "견고한 코팅으로 오래 쓰는 뉴트럴한 컬러, 모던한 디자인", img: "/img/c6.jpg" },
      { id: 6, title: "지음 시리즈", subtitle: "내 요리에 담긴 정성이 온전히 전해질 수 있도록", img: "/img/c7.jpg" },
      { id: 7, title: "스텐 시리즈", subtitle: "바닥은 물론, 측면까지 통 3중 넘침 방지 기능까지", img: "/img/c8.jpg" },
      { id: 8, title: "가마솥 시리즈", subtitle: "가마솥의 맥을 잇다 예로부터 한 가정의 주방을 대표하는 솥", img: "/img/c9.jpg" },
      { id: 9, title: "프리핸즈 시리즈", subtitle: "편리한 보관의 가능 하나로 끝내고 싶은 분을 위한 PICK", img: "/img/a8.jpg" }
    ]
  },
  {
    id: "blender",
    title: "블렌더",
    subtitle: "국내 최초 특허기술 '스마트 블렌딩™' 뿐만 아니라 독보적이고 강력한 분쇄기술과 편리한 자동메뉴를 갖춘 HC* 라인업",
    img: "../img/d0.jpg",
    lists: [
      { id: 0, title: "스마트 엑슬림", subtitle: "버튼 하나로 쉽고 편리하게 스마트 모드 + 6가지 오토 블렌딩", img: "/img/d1.jpg" },
      { id: 1, title: "엑슬림 컴포트", subtitle: "블렌딩을 더욱 편안하게 라운드 컨테이너의 시작", img: "/img/d2.jpg" },
      { id: 2, title: "브리즈 TAP", subtitle: "디자인도 성능도 완벽! 최대 1.64마력의 고성능 모터 적용", img: "/img/d3.jpg" }
    ]
  },
  {
    id: "oven",
    title: "소형가전",
    subtitle: "편리함으로 주방에 머무는 시간을 더욱 즐겁게 '오드 아담한 가전', '홈카페 메이트' 등 다양한 HC* 소형가전",
    img: "../img/e0.jpg",
    lists: [
      { id: 0, title: "와플메이커", subtitle: "빠릿하고 빠삭하게 알아서 손쉽게 간편한 따끈따끈한 빵 만들기", img: "/img/e1.jpg" },
      { id: 1, title: "듀얼 스마트팟", subtitle: "멀티쿠커와 에어프라이어를 한 번에! 높은 열전도율로 요리 시간의 단축", img: "/img/e2.jpg" },
      { id: 2, title: "브루디 캡슐커피머신", subtitle: "곁에 두고 즐기는 가장 가까운 우리집 홈 카페", img: "/img/e3.jpg" },
      { id: 3, title: "브루디 밀크프로더", subtitle: "우유만 넣어주세요! 버튼 하나로 밀크폼의 자동 완성", img: "/img/e4.jpg" },
      { id: 4, title: "음식물처리기", subtitle: "음식물쓰레기를 치워서 주방을 깨끗하게 해주는 착한 친구", img: "/img/e5.jpg" },
      { id: 5, title: "전기그릴", subtitle: "위에서 광파로 아래에서 IH로, 위-아래 동시 가열", img: "/img/e6.jpg" }
    ]
  },
  {
    id: "kitchen",
    title: "주방소품",
    subtitle: "우리집 주방 속 숨은 그림 찾기 실속있고 실용적인 HC* 아이템",
    img: "../img/f0.jpg",
    lists: [
      { id: 0, title: "넛지텀블러", subtitle: "멸종 위기종 에디션 캠페인 HC*와 함께하는 환경보호의 시작", img: "/img/f1.jpg" },
      { id: 1, title: "채칼 & 믹싱볼 세트", subtitle: "최고급 소재 스테인리스 304 3종 채칼로 손질, 뚜껑으로 보관까지", img: "/img/f2.jpg" },
      { id: 2, title: "인덕션 보호매트", subtitle: "인덕션 상판보호 스크래치 방지 최대 250℃까지 유리섬유 실리콘 소재", img: "/img/f3.jpg" },
      { id: 3, title: "포레스트 우드 조리도구", subtitle: "요리하는 시간이 소박한 '쉼'으로 리얼우드만의 감성을 담다", img: "/img/f4.jpg" },
      { id: 4, title: "실리콘 조리도구", subtitle: "풀 커버 실리콘으로 깔끔하게 VIVA 필요한 구성으로 실속있게 VIVA", img: "/img/f5.jpg" },
      { id: 5, title: "양면 스텐도마", subtitle: "식재료에 따라 골라쓰기 좋은 양면스텐도마로 주방을 청결하게", img: "/img/f6.jpg" },
      { id: 6, title: "프로페셔녈 나이프", subtitle: "전문가처럼 칼질하는 가장 쉬운 방법", img: "/img/f7.jpg" }
    ]
  },
];

const ProductLists = () => {

  const location=useLocation();
  const productId = location.state?.product || 'pan';

  const [selectProduct, setSelectProduct] = useState(
    ()=>{    
    const product = products.find(p => p.id === productId);
    return product || products[0]; 
  });


  useEffect(()=>{
    const product =  products.find(p=>p.id === productId);
    if(product){
      setSelectProduct(product);
    }
  },[productId])

  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    fade: false,
    adaptiveHeight: false,
    swipe: false,      
    draggable: false,  
    responsive: [
      {
      breakpoint: 768,
      settings: {
        slidesToShow: 2, 
        slidesToScroll: 2, 
        swipe: true, 
        draggable: true, 
      }
      }
    ]
  };
  
  const TabClick = (product) => {
    setSelectProduct(product);
    setTimeout(() => {
      sliderRef.current?.slickGoTo(0); // 슬라이드 초기화
    }, 100);
  };

  return (
    <div className="subpage">
      <div className="products-bg">
         상품 소개
      </div>
      <Container>
        <div data-name="sub-content" className="products">
          <div className="product-btn">
            {products.map((product)=>(
              <button
                key={product.id} 
                className={`btn btn-ratio ${selectProduct.id === product.id ? "active":""}`}
                onClick={()=>TabClick(product)}>
                <img src={`../img/${product.id}.png`} alt={product.title} />
                <span>{product.title}</span>
              </button>
            ))}
          </div>
          
          {selectProduct && (
            <Row className='gy-3'>
              <Col xs="12">
                <Row className='gy-3'>
                  <Col xs="6">
                    <div className="main-img">
                        <img src={selectProduct.img} 
                            alt={selectProduct.title}/>
                    </div>
                  </Col>
                  <Col xs="6">
                    <div className="main-info">
                        <h3 className="main-title">
                          <span className="title">{selectProduct.title}</span>
                          <span>
                            <a href={selectProduct.url} target="_blank">쇼핑몰 이동하기＞</a>
                          </span>
                        </h3>
                        <p className="main-subtitle">{selectProduct.subtitle}</p>
                    </div>
                  </Col> 
                </Row>
              </Col>

              {selectProduct.lists?.length > 0 && (
                <Col xs="12">
                    <Slider ref={sliderRef} {...settings}>
                      {selectProduct.lists.map((list) => (
                        <div className="product-img">
                            <a href="#">
                              <img src={list.img} alt={list.title} />
                            </a>
                            <p className="lists-title">{list.title}</p>
                            <p>{list.subtitle}</p>
                        </div>
                      ))}
                    </Slider>
                </Col>
              )}
            </Row>
          )}
        </div>
      </Container>
    </div>
  )
}

export default ProductLists
