import { Col, Row } from 'antd'
import { MyImage } from './components/MyImage'
import MyTab from './components/MyTab'
import hiring_home from '../../../../assets/image/o9-hiring-home.jpg'
import { NectarButton } from '../../../../components/common/NectarButton'

const ViewFifthPart = () => {
  return (
    <>
      <Row className=" bg-white text-rc40 font-light text-left mt-rc_10" gutter={[0, 48]} justify="center">
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 18 }} lg={{ span: 16 }} xl={{ span: 16 }}>
          Why are global companies partnering with :Deloitte for their Digital Transformation?
        </Col>
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 18 }} lg={{ span: 16 }} xl={{ span: 16 }}>
          <MyTab />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <MyImage image={hiring_home}>
            <Row align="bottom">
              <Col
                xs={{ span: 18, offset: 3 }}
                sm={{ span: 16, offset: 4 }}
                md={{ span: 14, offset: 5 }}
                lg={{ span: 16, offset: 3 }}
                xl={{ span: 12, offset: 1 }}
                className="text-rc40 text-white"
              >
                <div style={{}}></div>
                <div className="  font-bold ">Want to make a difference?</div>
                <div className=" font-light">Join one of the fastest growing companies in enterprise software.</div>
                <span>Want to make a difference?</span>
              </Col>
              <Col
                xs={{ span: 18, offset: 3 }}
                sm={{ span: 16, offset: 4 }}
                md={{ span: 14, offset: 5 }}
                lg={{ span: 8, offset: 3 }}
                xl={{ span: 4, offset: 4 }}
              >
                <NectarButton>See jobs</NectarButton>
              </Col>
            </Row>
          </MyImage>
        </Col>
      </Row>
    </>
  )
}

export default ViewFifthPart
