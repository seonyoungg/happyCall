import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const MainSns = () => {
  return (
    <Container>
        <div class="main-sns" data-name="main-content">
            <div class="insta">
                <div class="sns-tit h4">@hc.happycall_official</div>
                <Row className="gy-3">
                    <Col xs="6" md="3">
                        <div class="sns-img">
                            <a href="https://www.instagram.com/p/C6Cpt7qv6T6/?igsh=MTlwaXB6M3ZrMjN1aQ==" target="_blank">
                                <img src="./img/s1.jpg" alt=""/>
                            </a>
                        </div>
                    </Col>
                    <Col xs="6" md="3">
                        <div class="sns-img">
                            <a href="https://www.instagram.com/p/C6Cpt7qv6T6/?igsh=MTlwaXB6M3ZrMjN1aQ==" target="_blank">
                                <img src="./img/s2.jpg" alt=""/>
                            </a>
                        </div>
                    </Col>
                    <Col xs="6" md="3">
                        <div class="sns-img">
                            <a href="https://www.instagram.com/p/C6Cpt7qv6T6/?igsh=MTlwaXB6M3ZrMjN1aQ==" target="_blank">
                                <img src="./img/s3.jpg" alt=""/>
                            </a>
                        </div>
                    </Col>
                    <Col xs="6" md="3">
                        <div class="sns-img">
                            <a href="https://www.instagram.com/p/C6Cpt7qv6T6/?igsh=MTlwaXB6M3ZrMjN1aQ==" target="_blank">
                                <img src="./img/s4.jpg" alt=""/>
                            </a>
                        </div>
                    </Col>
                </Row>
            </div>
            <div class="blog mt-5">
                <Row>
                    <Col xs="12" md="6">
                        <div class="sns-content">
                            <div class="sns-text">
                                <div class="sns-tit h4">따끈따끈 HC*해피콜 소식</div>
                                <div class="h3">갑진년 맞이 청룡 에디션 드래곤<br/>다이아몬드 IH 세트 출시</div>
                                <p>갑진년을 맞아 제작된 스페셜 청룡 에디션, 드래곤 IH 2세트는 팬 위에 힘차게 날아오르는 청룡을 그려 넣었어요.</p>
                                <p>가장 많이 사용하는 사이즈인 프라이팬 28cm과 궁중팬 28cm 구성으로 만나볼 수 있답니다.</p>
                                <div className="d-block d-md-none my-3">
                                    <a href="https://blog.naver.com/happycall_kr/223347984250" target="_blank">
                                        <img src="./img/blog1.jpg" alt=""/>
                                    </a>
                                </div> 
                            </div>
                            <a class="underline-btn"
                                href="https://blog.naver.com/happycall_kr" 
                                target="_blank">VIEW MORE ＞
                            </a>
                        </div>
                    </Col>
                    <Col xs="12" md="6">
                        <div class="sns-img">
                            <a href="https://blog.naver.com/happycall_kr/223347984250" target="_blank">
                                <img src="./img/blog1.jpg" alt=""/>
                            </a>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </Container>
  )
}

export default MainSns
