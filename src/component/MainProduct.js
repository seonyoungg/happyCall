import React from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import { useState } from 'react';

const MainProduct = () => {
    const [activeTab,setActiveTab] = useState(1);
    const tabActive = (index)=>{
        setActiveTab(index)
    };
    const tabName = [
        {
            product: '프라이팬',
            id: 'a',
        },
        {
            product: '양면팬',
            id: 'b',
        },
        {
            product: '냄비',
            id: 'c',
        },
        {
            product: '블렌더',
            id: 'd',
        },
        {
            product: '소형가전',
            id: 'e',
        },
        {
            product: '주방소품',
            id: 'f',
        },
    ];
  return (
    <Container>
        <div className="main-product" data-name="main-content">
            <div className="tab" data-index="product-tab">
                <ul className="tab-group">
                    {tabName.map((tab, index) => (
                        <li 
                            className={`outline-btn btn ${activeTab === index + 1 ? 'active' : ''}`}
                            data-index={index + 1}
                            onClick={() => tabActive(index + 1)}>
                        {tab.product}
                        </li>
                    ))}
                </ul>
                <div className="underline-btn ms-auto">
                    <a href="https://hcmall.co.kr" target="_blank">VIEW MORE ＞</a>
                </div>
            </div>
            <div className="tab-content" data-index="product-tab">
                {tabName.map((tab, index) => (
                    <div className={`content ${activeTab === index + 1 ? 'active' : ''}`}
                         data-index={index + 1}>
                        <Row className="gy-3">
                            <Col xs="12" sm="6">
                                <div className="product-img">
                                    <a href="#">
                                        <img src={`/img/${tab.id}00.jpg`} alt=""/>
                                    </a>
                                </div>
                            </Col>
                            <Col xs="12" sm="6">
                                <Row className="g-3">
                                    <Col xs="6">
                                        <div className="product-img">
                                            <a href="#">
                                                <img src={`/img/${tab.id}1.jpg`} alt=""/>
                                            </a>
                                        </div>
                                    </Col>
                                    <Col xs="6">
                                        <div className="product-img">
                                            <a href="#">
                                                <img src={`/img/${tab.id}2.jpg`} alt=""/>
                                            </a>
                                        </div>
                                    </Col>
                                    <Col xs="6">
                                        <div className="product-img">
                                            <a href="#">
                                                <img src={`/img/${tab.id}3.jpg`} alt=""/>
                                            </a>
                                        </div>
                                    </Col>
                                    <Col xs="6">
                                        <div className="product-img">
                                            <a href="#">
                                                <img src={`/img/${tab.id}4.jpg`} alt=""/>
                                            </a>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                ))}
            </div>
        </div>
    </Container>
  )
}

export default MainProduct
