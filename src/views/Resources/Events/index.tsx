import { Col, Row } from 'antd'
import BrounceArrow from '../../../components/BounceArrow'
import './index.less'

const Events = () => {
  return (
    <div>
      <Row justify="center">
        <Col span={24}>
          <div className=" relative ">
            <div className="events-ready">
              <div className=" relative w-full pt-rc35 pb-rc70 z-50 mb-0 bg-100%">
                <div className="using-image">
                  <div className="img"></div>
                </div>
                {/* <div className="row-bg-overlay"></div> */}
                <Row justify="center">
                  <Col span={20} style={{ zIndex: 10 }}>
                    <p className=" text-rc20 border-black border-b pb-rc20 mb-rc100 font-bold">Events</p>
                    <Row justify="center">
                      <Col
                        xs={{ span: 18 }}
                        sm={{ span: 16 }}
                        md={{ span: 11 }}
                        lg={{ span: 11 }}
                        xl={{ span: 17 }}
                        style={{ zIndex: 10 }}
                      >
                        <p className="text-rc72  text-rc7 leading-rc75 animate__animated animate__fadeInDown font-light">
                          Come meet us <span className="animation_underline relative">digitally</span> in industry
                          events
                        </p>
                      </Col>
                      <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 11 }} lg={{ span: 11 }} xl={{ span: 7 }}>
                        <BrounceArrow type="black" />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Events
