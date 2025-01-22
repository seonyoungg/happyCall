import React from 'react'
import { Container } from 'react-bootstrap'

const IntroduceC = () => {
  return (
      <Container>
          <div className="sub-intro" data-name="sub-content">
              <div class="tit-wrap">
                <div className="tit">CI 및 BI 사용 가이드</div>
                <a className="btn point-btn">PDF 다운로드</a>
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
                  <p>고객의 미소를 상징하는 'H'<br/>
                    별을 향한 의지를 표현한 'C'<br/>
                    그리고 공존과 화합을 상징하는 다섯개의 손이 맞잡으면서 탄생한
                    '행복의 별'이 모여 새로운 'HC* 해피콜' 로 탄생하였습니다.</p>
                </div>
              </div>
          </div>
      </Container>
  )
}

export default IntroduceC
