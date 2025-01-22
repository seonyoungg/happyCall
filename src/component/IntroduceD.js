import React from 'react'
import { Container } from 'react-bootstrap'

const IntroduceD = () => {
  return (
      <Container>
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
  )
}

export default IntroduceD
