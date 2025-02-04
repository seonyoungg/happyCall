import React from 'react';
import {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const products = [
  {
    id: "pan",
    title: "프라이팬",
    subtitle: "대한민국 프라이팬의 자존심<br/> 소재와 코팅 재질, 형태별로 펼쳐지는 다양한 HC* 프라이팬 라인업",
    img: "../img/a0.jpg",
    lists: [
      { id: 0, title: "플렉스팬 시리즈", subtitle: "굽고, 볶고, 끓여야 하는 어떤 요리도 플렉스팬 시리즈 하나로 간편하게", img: "/img/a1.jpg" },
      { id: 1, title: "컴플리트 시리즈", subtitle: "요리의 시작부터 완성까지 어떤 요리에도 늘 찾게 되는 팬", img: "/img/a2.jpg" },
      { id: 2, title: "그래핀 시리즈", subtitle: "21세기 검은 황금 '그래핀' 신소재 그래핀, 예열시간의 놀라운 감소", img: "/img/a3.jpg" },
      { id: 3, title: "포레스트 시리즈", subtitle: "숲에서 온 디자인 주방에서 피톤치드 가득한 숲속 분위기", img: "/img/a4.jpg" }
    ]
  },
  {
    id: "pot",
    title: "냄비",
    subtitle: "다양한 크기와 깊이로 요리를 더욱 편리하게",
    img: "../img/b0.jpg",
    lists: [
      { id: 0, title: "스테인리스 냄비", subtitle: "내구성이 뛰어난 스테인리스 냄비", img: "/img/b1.jpg" },
      { id: 1, title: "양수 냄비", subtitle: "국물 요리에 최적화된 디자인", img: "/img/b2.jpg" },
      { id: 2, title: "전골 냄비", subtitle: "전골 요리에 적합한 얇고 넓은 냄비", img: "/img/b3.jpg" }
    ]
  }
];

const ProductLists = () => {

  const [selectProduct, setSelectProduct] = useState(products[0]); // 기본값: 프라이팬

  return (
    <div className="subpage">
      <Container>
        
        <div data-name="sub-content">
          <div className="product-btn">
            {products.map((product)=>(
              <button
                key={product.id} 
                className={`btn btn-ratio ${selectProduct.id === product.id ? "active":""}`}
                onClick={()=>setSelectProduct(product)}>
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
                          <span>{selectProduct.title}</span>
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
                <Row className='gy-3'>
                  <Col xs="12">
                    <Row className="g-3">

                      {selectProduct.lists.map((list) => (
                      <Col xs="6" sm="3">
                        <div className="product-img">
                            <a href="#">
                              <img src={list.img} alt={list.title} />
                            </a>
                            <p>{list.title}</p>
                        </div>
                      </Col>
                      ))}
                    </Row>
                  </Col>
                  <Col xs="12">                    
                    <div class="tab-page">
                      <button class="btn left-tab">
                        <p>＜</p></button>
                      <span>1</span>
                      <span>/</span>
                      <span>4</span>
                      <button class="btn right-tab">
                        <p>＞</p>
                      </button>
                    </div>
                  </Col>
                  </Row>
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
