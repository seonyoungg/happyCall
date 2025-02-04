import React from 'react';
import {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ProductLists = () => {
  
  const [products, setProducts] = useState([]); 
  const [selectProduct, setSelectProduct] = useState(null);

  const getProductData = async () => {
      const response = await fetch("https://my-json-server.typicode.com/seonyoungg/happyCall/products");
      const data = await response.json();
      setSelectProduct(data[0]);  
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="subpage">
      <Container>
        
        <div data-name="sub-content">
          <div className="product-btn">
            <button className="btn btn-ratio active">
              <img src="../img/pan.png" alt="#" />
              <span>프라이팬</span>
            </button>
            <button className="btn btn-ratio">
              <img src="../img/pan2.png" alt="#" />
              <span>양면팬</span>
            </button>
            <button className="btn btn-ratio">
              <img src="../img/pot.png" alt="#" />
              <span>냄비</span>
            </button>
            <button className="btn btn-ratio">
              <img src="../img/blender.png" alt="#" />
              <span>블렌더</span>
            </button>
            <button className="btn btn-ratio">
              <img src="../img/oven.png" alt="#" />
              <span>소형가전</span>
            </button>
            <button className="btn btn-ratio">
              <img src="../img/kitchen.png" alt="#" />
              <span>주방소품</span>
            </button>

          </div>
          <Row className='gy-3'>
            <Col xs="12">
              <Row className='gy-3'>
                <Col xs="6">
                  <div className="main-img">
                      <img src="../img/a0.jpg" alt=""/>
                  </div>
                </Col>
                <Col xs="6">
                  <div className="main-info">
                      <h3 className="main-title">
                        <span>프라이팬</span>
                        <span>
                          <a href="https://hcmall.co.kr/product/list.html?cate_no=24" target="_blank">쇼핑몰 이동하기＞</a>
                        </span>
                      </h3>
                      <p className="main-subtitle">대한민국 프라이팬의 자존심<br/>
                          소재와 코팅 재질, 형태별로 펼쳐지는 다양한 HC* 프라이팬 라인업</p>
                  </div>
                </Col> 
              </Row>
            </Col>
            <Col xs="12">
            <Row className='gy-3'>
              <Col xs="12">
                <Row className="g-3">
                  <Col xs="6" sm="3">
                    <div className="product-img">
                        <a href="#">
                            <img src="/img/a1.jpg" alt=""/>
                        </a>
                        <p>그래핀시리즈</p>
                    </div>
                  </Col>
                  <Col xs="6" sm="3">
                    <div className="product-img">
                        <a href="#">
                            <img src="/img/a1.jpg" alt=""/>
                        </a>
                        <p>그래핀시리즈</p>
                    </div>
                  </Col>
                  <Col xs="6" sm="3">
                    <div className="product-img">
                        <a href="#">
                            <img src="/img/a1.jpg" alt=""/>
                        </a>
                        <p>그래핀시리즈</p>
                    </div>
                  </Col>
                  <Col xs="6" sm="3">
                    <div className="product-img">
                        <a href="#">
                            <img src="/img/a1.jpg" alt=""/>
                        </a>
                        <p>그래핀시리즈</p>
                    </div>
                  </Col>
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
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default ProductLists
