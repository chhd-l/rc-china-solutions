import { Col, Row } from 'antd'
import BounceArrow from '../../../components/BounceArrow'
import SearchAndFilter from './components/SearchAndFilter'
import './index.less'
import Industry_Header from '../../../assets/video/Industry-Header-1.mp4'

const CaseStudies = () => {
  return (
    <div className=" bg-111111">
      <Row>
        <Col span={24}>
          <div className=" relative ">
            <div className="CaseStudies-ready">
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
                      src={Industry_Header}
                    />
                  </div>
                </div>
                <Row justify="center">
                  <Col span={21} style={{ zIndex: 10 }}>
                    <div>
                      <p className="text-white text-rc20 border-gray-rgba255 border-b pb-rc20 mb-rc60">Case Studies</p>
                    </div>
                    <Row>
                      <Col
                        xs={{ span: 18 }}
                        sm={{ span: 24 }}
                        md={{ span: 24 }}
                        lg={{ span: 24 }}
                        xl={{ span: 14 }}
                        style={{ zIndex: 10 }}
                      >
                        <p className="text-rc72 text-white text-rc7 leading-rc75">
                          Delivering value across industries with the Deloitte Digital Brain
                        </p>
                      </Col>
                      <Col xs={{ span: 18 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 11 }} xl={{ span: 10 }}>
                        <BounceArrow type="white" />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <SearchAndFilter />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default CaseStudies
