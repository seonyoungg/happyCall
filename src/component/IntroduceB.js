import React from 'react'
import { Container } from 'react-bootstrap'

const IntroduceB = () => {
  return (
      <Container>
          <div className="sub-inner" data-name="sub-content">
              <div className="h1">HC*의 중요한 가치</div>
              <div className="sub-img">
                <img class="d-none d-sm-block" src="/img/page2.png" alt=""/>
                <img class="d-block d-sm-none" src="/img/page22.png" alt=""/>
              </div>
          </div>
      </Container>
  )
}

export default IntroduceB
