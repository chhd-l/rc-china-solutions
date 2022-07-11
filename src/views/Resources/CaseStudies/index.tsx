import { Col, Row } from 'antd'
import BounceArrow from '../../../components/BounceArrow'
import SearchAndFilter from './components/SearchAndFilter'
import './index.less'

const CaseStudies = () => {
  return (
    <div className=" bg-111111">
      <Row>
        <Col span={24}>
          <div className=" relative px-rc90">
            <div className="modal-ready">
              <div className=" relative w-full pt-rc35 pb-rc70 z-50 mb-0 bg-100%">
                <div className="nectar-video-wrap">
                  <div className="h-full">
                    <video
                      loop
                      autoPlay
                      muted
                      playsInline
                      preload="auto"
                      className=" object-contain opacity-100"
                      width="100%"
                      height={605}
                      src="https://o9solutions.com/wp-content/uploads/2021/11/Industry-Header-1.mp4"
                    />
                  </div>
                </div>
                <Col span={24} style={{ zIndex: 10 }}>
                  <div>
                    <p className="text-white text-rc20 border-gray-rgba255 border-b pb-rc20 mb-rc60">Case Studies</p>
                  </div>
                  <Row>
                    <Col
                      xs={{ span: 18 }}
                      sm={{ span: 16 }}
                      md={{ span: 11 }}
                      lg={{ span: 11 }}
                      xl={{ span: 14 }}
                      style={{ zIndex: 10 }}
                    >
                      <p className="text-rc72 text-white text-rc7 leading-rc75">
                        Delivering value across industries with the Deloitte Digital Brain
                      </p>
                    </Col>
                    <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 11 }} lg={{ span: 11 }} xl={{ span: 10 }}>
                      <BounceArrow type="white" />
                    </Col>
                  </Row>
                </Col>
              </div>
              {/* <Row justify="center" className="mt-rc100">
                <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 11 }} lg={{ span: 11 }} xl={{ span: 4 }}>
                  <p className=" text-rc35 text-white font-light  text-left">
                    Search and <span className=" font-semibold">filter</span> case studies
                  </p>
                </Col>
              </Row> */}
              <SearchAndFilter />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default CaseStudies
