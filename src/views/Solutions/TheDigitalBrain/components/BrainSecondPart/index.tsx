import { Col, Row } from 'antd'
import MyTab from './components/MyTab'

const BrainSecondPart = () => {
  return (
    <>
      <Row justify="center">
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 14 }} lg={{ span: 18 }} xl={{ span: 20 }}>
          <div className="border-b border-gray-E4E4E4" />
        </Col>
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 14 }} lg={{ span: 18 }} xl={{ span: 13 }}>
          <div className="bg-black h-rc479 mt-rc60 " />
        </Col>
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 14 }} lg={{ span: 18 }} xl={{ span: 13 }}>
          <p className=" text-rc17 my-rc35">
            Watch{' '}
            <strong>
              <span className=" font-medium cursor-pointer">Chakri</span> Gottemukkala
            </strong>{' '}
            (CEO and founder – o9 Solutions) on “Why every business needs a digital brain”
          </p>
        </Col>
      </Row>
      <Row justify="center" className=" bg-gray-F7F7F7 ">
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 14 }} lg={{ span: 8 }} xl={{ span: 13 }}>
          <h2 className=" text-rc40 mt-rc112">
            Capabilities of the <strong font-bold>Deloitte Digital Brain</strong>
          </h2>
        </Col>
        <Col span={22}>
          <MyTab />
        </Col>
      </Row>
      <Row justify="center" className=" bg-black pb-rc_7">
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 14 }} lg={{ span: 18 }} xl={{ span: 13 }}>
          <h2 className=" text-white text-rc40 font-light  mt-rc_10">
            How to build a digital brain – a technology view
          </h2>
          <p className="text-white text-rc17 font-light  ">How to build a digital brain – a technology view</p>
        </Col>
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 14 }} lg={{ span: 18 }} xl={{ span: 13 }}>
          <div className=" bg-white h-rc500 mt-rc56"></div>
        </Col>
      </Row>
      <Row justify="center" className="">
        <Col span={18}>
          <h2 className="text-rc40 font-light mt-rc_10">Future-proof platform</h2>
          <p className="text-rc17 font-light leading-rc32">
            As a cloud-native application running on any of the 3 major cloud providers, the o9 platform can{' '}
            <strong className=" font-semibold">scale</strong> without constraints. Furthermore, the o9 platform was
            designed as an <strong className=" font-semibold">open platform</strong>, allowing companies to leverage new
            sources of data – from customer data coming from smart phone apps to IoT data from connected machines – and
            new algorithms for completely new use cases.
          </p>
          <p className="text-rc17 font-light leading-rc32 mb-rc_10">
            The o9 Digital Brain is the <strong className=" font-semibold">Most Valuable Platform (MVP)</strong> for
            companies. It allows non digital-native companies to also leverage the power of data – both to digitalize
            their existing business and for the future digital operating models that are emerging.
          </p>
        </Col>
      </Row>
    </>
  )
}

export default BrainSecondPart
