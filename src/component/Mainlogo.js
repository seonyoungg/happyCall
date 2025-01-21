import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

const Mainlogo = () => {
  return (
    <div class="main-content" data-name="main-content">
      <Container>
        <Row>
            <Col xs="12" md="6">
                <div class="logo-img"></div>
            </Col>
            <Col xs="12" md="6">
                <div class="logo-text"></div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Mainlogo
