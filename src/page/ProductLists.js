import React from 'react';
import {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ProductLists = () => {

  const [products, setProducts] = useState([]); 
  const [selectProduct, setSelectProduct] = useState(null);

  const getProductData = async () => {
    try {
      const response = await fetch("https://my-json-server.typicode.com/seonyoungg/happyCall/products");
      const data = await response.json();
      if (Array.isArray(data)) {
        setProducts(data);
        setSelectProduct(data.length > 0 ? data[0] : null);
      } else {
        throw new Error("Fetched data is not an array");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

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
