import { Col, Row } from 'antd'
import BounceArrow from '../../../components/BounceArrow'
import SearchAndFilter from './components/SearchAndFilter'
import './index.less'
import Home_Web from '../../../assets/video/Home-Web-1.mp4'

const WhitePapers = () => {
  return (
    <div className=" bg-111111">
      <Row>
        <Col span={24}>
          <div className=" relative">
            <div className="whitePaper-ready">
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
                      src={Home_Web}
                    />
                  </div>
                </div>
                <Col span={24} style={{ zIndex: 10, padding: '0 90px' }}>
                  <div>
                    <p className="text-white text-rc20 border-gray-rgba255 border-b pb-rc20 mb-rc200">
                      Powered by the Deloitte Digital Brain
                    </p>
                  </div>
                  <Row>
                    <Col
                      xs={{ span: 18 }}
                      sm={{ span: 16 }}
                      md={{ span: 11 }}
                      lg={{ span: 11 }}
                      xl={{ span: 11 }}
                      style={{ zIndex: 10 }}
                    >
                      <p className="text-rc72 text-white text-rc7 leading-rc75">We create awesome content.</p>
                    </Col>
                    <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 11 }} lg={{ span: 11 }} xl={{ span: 12 }}>
                      <BounceArrow type="white" />
                    </Col>
                  </Row>
                </Col>
              </div>
              <Row justify="center" className="mt-rc100  px-rc90">
                <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 11 }} lg={{ span: 11 }} xl={{ span: 6 }}>
                  <p className="text-rc45 text-white font-light">Resources</p>
                </Col>
                <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 11 }} lg={{ span: 11 }} xl={{ span: 18 }}>
                  <p className="text-rc17 text-white ">
                    Read our white papers, use cases, and reports. Filter by your industry, solution, and resource type
                    to find the content that you are looking for.
                  </p>
                </Col>
              </Row>
              <SearchAndFilter />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default WhitePapers
