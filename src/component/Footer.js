import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-wrap">
          <div className="footer-top">
          <Container>
            <Row className="gy-5">
              <Col xs="12" md="6">
                <div className="footer-item">
                  <div className="logo-img">
                    <img src="/img/logo_b.png" alt=""></img>
                  </div>
                  <div className="text">
                    <p>(주)HC컴퍼니 | 대표 : 배수찬 | 사업자등록번호 : 607-81-45068</p>
                    <p>광고/제휴 문의 : mkt@hccompany.co.kr</p>
                    <p>본사 : 50969, 경상남도 김해시 주촌면 골든루트로 104-2</p>
                    <p>서울 : 06098, 서울시 강남구 학동로 318 유경빌딩 1층</p>
                    <p>Copyright © HC Company CO., Ltd. All rights reserved.</p>
                  </div>
                </div>
              </Col>
              <Col xs="6" md="3">
                <div className="footer-item">
                  <div className='footer-header'>
                    <div className='subtit'>CS CENTER</div>
                    <div className='tit'>1688-8460</div>
                  </div>
                  <div className="text">
                    <p>상담시간 : 오전 10:00 ~ 오후 05:00</p>
                    <p>점심시간 : 12:00~01:00</p>
                    <p>업무휴무 : 토, 일, 공휴일 휴무</p>
                  </div>
                </div>
              </Col>
              <Col xs="6" md="3">
                <div className="footer-item">
                  <div className='footer-header'>
                    <div className='subtit'>COMMUNITY BOARD</div>
                    <div className='tit'></div>
                  </div>
                  <div className="text">
                    <p>
                      <a href="#">자주찾는질문</a>
                    </p>
                    <p>
                      <a href="#">고객문의</a>
                    </p>
                    <p>
                      <a href="#">공지사항</a>
                    </p>
                    <p>
                      <a href="#">제품설명서</a>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="sns-wrap mt-3">
              <a className="text-icon" href="https://hcmall.co.kr" target="_blank">HC해피콜 공식쇼핑몰</a>
              <a className="insta icon" href="https://www.instagram.com/hc.happycall_official/" target="_blank"></a>
              <a className="fb icon" href="https://www.facebook.com/happycall.kr" target="_blank"></a>
              <a className="blog icon" href="https://blog.naver.com/happycall_kr" target="_blank"></a>
              <a className="ytb icon" href="https://www.youtube.com/channel/UCCKH6yHXkR3mdhrg6CMv7Yg" target="_blank"></a>
            </div>
          </Container>
          </div>
          <div className="footer-bottom">
          <Container>
            <div class="footer-inner">
              <ul>
                <li><a href="#">회사소개</a></li>
                <li><a href="#">오시는 길</a></li>
                <li><a href="#">개인정보처리방침</a></li>
                <li><a href="#">이용약관</a></li>
              </ul>
              <select className="form-select"
                      onChange={(e)=>{
                        const value = e.target.value;
                        if(value){
                          window.open(value,"_blank");
                        }
                }}>
                <option value="">Family-site</option>
                <option value="https://hcmall.co.kr/">해피콜공식쇼핑몰</option>
                <option value="https://store.kakao.com/happycallmall">해피콜카카오톡쇼핑하기</option>
                <option value="https://www.instagram.com/hc.happycall_official/">해피콜인스타그램</option>
                <option value="https://www.facebook.com/happycall.kr">해피콜페이스북</option>
                <option value="https://blog.naver.com/happycall_kr">해피콜블로그</option>
                <option value="https://www.youtube.com/channel/UCCKH6yHXkR3mdhrg6CMv7Yg">해피콜유튜브</option>
              </select>
            </div>
          </Container>
          </div>
        </div>
    </div>
  )
}

export default Footer
