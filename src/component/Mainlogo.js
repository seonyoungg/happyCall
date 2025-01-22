import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

const Mainlogo = () => {
  return (
    <div class="main-logo" data-name="main-content">
      <Container>
        <Row className='gy-3'>
            <Col xs="12" md="4" lg="6">
                <div class="logo-img">
                  <img src="/img/logo_big.png" alt=""/>
                </div>
            </Col>
            <Col xs="12" md="8" lg="6">
                <div class="logo-text">
                  <div class="text-header">
                    <div class="h3">주방의 유쾌한 큐레이터</div>
                    <div class="h2">Happy Curator</div>
                  </div>
                  <div class="text-content">
                    <p>해피콜은 행복을 떼어놓고 생각할 수 없습니다.</p>
                    <p>해피콜을 이은 HC*는 조금 더 적극적으로 고객의 행복을 만들어 보고자 합니다.</p>
                    <p>우수한 품질과 다채로운 디자인의 상품으로 고객의 주방을 아름답고 편하게 만들고, 이로써 고객의 일상에 즐거움을 선사하는 그런 큐레이터로 말이에요.</p>
                    <p class="bold">이제 주방의 유쾌한 큐레이터 HC*로 같이 걷겠습니다.</p>
                  </div>
                  <div class="text-footer">
                    <div class="btn point-btn">#HAPPY</div>
                    <div class="btn point-btn">#실속있는</div>
                    <div class="btn point-btn">#젊은HC*</div>
                    <div class="btn point-btn">#다가가는</div>
                  </div>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Mainlogo
