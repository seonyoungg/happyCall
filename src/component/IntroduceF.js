import React from 'react'
import { Container } from 'react-bootstrap'
import KakaoMap from './KakaoMap'

const IntroduceF = () => {

  return (
      <Container>
          <div className="sub-intro" data-name="sub-content">
            <div className="tit">HC* 찾아오시는 길</div>
              <div className="sub-inner">
                <div className="btn-group" data-index="mab-tab">
                    <div className="btn">김해 본사</div>
                    <div className="btn">서울 사무소</div>
                </div>
                <div className="map-wrap" data-index="mab-tab">
                    <KakaoMap/>
                </div>
              </div>
          </div>
      </Container>
  )
}

export default IntroduceF
