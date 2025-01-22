import React from 'react'
import { Container } from 'react-bootstrap'

const IntroduceB = () => {
  return (
      <Container>
          <div className="sub-intro" data-name="sub-content">
              <div className="tit">HC*의 중요한 가치</div>
              <div className="sub-inner">
                <img class="d-none d-md-block" src="/img/page2.png" alt=""/>
                <img class="d-block d-md-none" src="/img/page22.png" alt=""/>
              </div>
          </div>
      </Container>
  )
}

export default IntroduceB
