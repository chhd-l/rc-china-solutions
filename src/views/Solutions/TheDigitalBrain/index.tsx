import { Col, Row } from 'antd'
import EKG_3D_cube_animation from '../../../assets/video/EKG-3D-cube-animation-5.mp4'
import the_digital_brain_bussiness from '../../../assets/image/the-digital-brain-bussiness.png'
import { brainData } from '../modules/TheDigitalBrain'
import MyTab from './components/MyTab'
import './index.less'

const TheDigitalBrain = () => {
  return (
    <>
      <Row gutter={[0, 80]} justify="center">
        <Col span={24}>
          <div className=" relative px-rc90">
            <div className="modal-ready">
              <div className=" relative w-full pt-rc35 pb-rc70 z-50 mb-0 bg-100%">
                <div className="video-color-overlay"></div>
                <div className="nectar-video-wrap">
                  <div className="h-full">
                    <video
                      loop
                      autoPlay
                      muted
                      playsInline
                      preload="auto"
                      className=" object-cover opacity-100"
                      width="100%"
                      height={700}
                      src={EKG_3D_cube_animation}
                    />
                  </div>
                </div>
                <Col span={24} style={{ zIndex: 10 }}>
                  <Row>
                    <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 11 }} lg={{ span: 12 }} xl={{ span: 7 }}>
                      <div className=" text-rc65 text-white text-rc7 leading-rc75 mt-rc100">
                        The Deloitte Digital Brain
                      </div>
                    </Col>
                    <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 11 }} lg={{ span: 12 }} xl={{ span: 20 }}>
                      <p className="text-2vh text-white opacity-50 mt-2">
                        The digital brain is powered by our patented Enterprise Knowledge Graph (EKG)
                      </p>
                    </Col>
                  </Row>
                </Col>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 14 }} lg={{ span: 20 }} xl={{ span: 20 }}>
          <p className="text-rc22 font-light  text-center mb-rc50">
            Are you also facing these common challenges in planning and decision-making?
          </p>
          <div className=" grid grid-cols-1 gap-4  lg:grid-cols-3">
            {brainData.map((item) => (
              <div className="border-gray-E4E4E4 border p-rc35 " key={item.strong}>
                <img src={item.img} alt="" className=" w-rc40 h-rc40 mb-rc30" />
                <p className="text-rc17">
                  <strong className=" font-semibold">{item.strong}</strong>
                  {item.span}
                  <span>{item.href1}</span>
                  <span>{item.href2}</span>
                  {item.rest}
                </p>
              </div>
            ))}
          </div>
        </Col>
        <Col span={12}>
          <h3 className="text-rc22 font-light pb-rc_7">
            The solution: Next-generation Integrated Business Planning (IBP) capabilities enabled by a platform like
            Deloitte’s Digital Brain. The human brain was our inspiration.
          </h3>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 14 }} lg={{ span: 18 }} xl={{ span: 20 }}>
          <div className="border-b border-gray-E4E4E4" />
        </Col>
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 14 }} lg={{ span: 18 }} xl={{ span: 13 }}>
          <iframe
            title="video"
            height={540}
            className="w-full mt-rc_5 "
            src="https://fast.wistia.net/embed/iframe/vjop3ng9cl?dnt=1&wvideo=vjop3ng9cl#?secret=3Yjk7CBwwq"
          />
        </Col>
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 14 }} lg={{ span: 18 }} xl={{ span: 13 }}>
          <p className=" text-rc17 my-rc35">
            Watch{' '}
            <strong>
              <span className=" font-medium cursor-pointer">Chakri</span> Gottemukkala
            </strong>{' '}
            (CEO and founder – Deloitte Solutions) on “Why every business needs a digital brain”
          </p>
        </Col>
      </Row>
      <Row justify="center" className=" bg-gray-F7F7F7 ">
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 14 }} lg={{ span: 16 }} xl={{ span: 13 }}>
          <h2 className=" text-rc40 mt-rc112">
            Capabilities of the <strong font-bold>Deloitte Digital Brain</strong>
          </h2>
        </Col>
        <Col span={22}>
          <MyTab />
        </Col>
      </Row>
      <Row justify="center" className=" bg-black pb-rc_7">
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 14 }} lg={{ span: 16 }} xl={{ span: 13 }}>
          <h2 className=" text-white text-rc40 font-light  mt-rc_10">
            How to build a digital brain – a technology view
          </h2>
          <p className="text-white text-rc17 font-light  ">How to build a digital brain – a technology view</p>
        </Col>
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 14 }} lg={{ span: 16 }} xl={{ span: 13 }}>
          {/* <div className=" bg-white h-rc500 mt-rc56"></div> */}
          <img src={the_digital_brain_bussiness} alt="" width={869} height={469} className="mt-rc56" />
        </Col>
      </Row>
      <Row justify="center" className="">
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 14 }} lg={{ span: 16 }} xl={{ span: 17 }}>
          <h2 className="text-rc40 font-light mt-rc_10">Future-proof platform</h2>
          <p className="text-rc17 font-light leading-rc32">
            As a cloud-native application running on any of the 3 major cloud providers, the Deloitte platform can{' '}
            <strong className=" font-semibold">scale</strong> without constraints. Furthermore, the Deloitte platform
            was designed as an <strong className=" font-semibold">open platform</strong>, allowing companies to leverage
            new sources of data – from customer data coming from smart phone apps to IoT data from connected machines –
            and new algorithms for completely new use cases.
          </p>
          <p className="text-rc17 font-light leading-rc32 mb-rc_10">
            The Deloitte Digital Brain is the <strong className=" font-semibold">Most Valuable Platform (MVP)</strong>{' '}
            for companies. It allows non digital-native companies to also leverage the power of data – both to
            digitalize their existing business and for the future digital operating models that are emerging.
          </p>
        </Col>
      </Row>
    </>
  )
}

export default TheDigitalBrain
