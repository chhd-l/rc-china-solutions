import { Col, Row } from 'antd'
import { MyImage } from './components/MyImage'
import MyTab from './components/MyTab'
import hiring_home from '../../../../assets/image/o9-hiring-home.jpg'

const ViewFifthPart = () => {
  return (
    <>
      <Row className=" bg-white text-rc40 font-light text-left">
        <Col
          xs={{ span: 18, offset: 3 }}
          sm={{ span: 16, offset: 4 }}
          md={{ span: 14, offset: 5 }}
          lg={{ span: 8, offset: 3 }}
          xl={{ span: 16, offset: 4 }}
        >
          Why are global companies partnering with :o9 for their Digital Transformation?
        </Col>
        <Col
          xs={{ span: 18, offset: 3 }}
          sm={{ span: 16, offset: 4 }}
          md={{ span: 14, offset: 5 }}
          lg={{ span: 8, offset: 3 }}
          xl={{ span: 16, offset: 4 }}
        >
          <MyTab />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="w-full h-full">
            <MyImage image={hiring_home}>1111</MyImage>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>Amazing and growing network coming together to deliver to our global clients</Col>
        <Col></Col>
      </Row>
    </>
  )
}

export default ViewFifthPart
