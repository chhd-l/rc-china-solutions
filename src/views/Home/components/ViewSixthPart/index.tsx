import { Col, Row } from 'antd'
import { NectarButton } from '../../../../components/common/NectarButton'
import Partner_logos from '../../../../assets/image/Partner-logos.svg'

const ViewSixthPart = () => {
  return (
    <div className=" mb-rc_10">
      <Row className=" mt-rc_7">
        <Col
          xs={{ span: 18, offset: 3 }}
          sm={{ span: 16, offset: 4 }}
          md={{ span: 14, offset: 5 }}
          lg={{ span: 8, offset: 3 }}
          xl={{ span: 8, offset: 3 }}
        >
          <h2 className=" text-rc40 font-light">
            Amazing and growing <strong className=" font-semibold">network</strong> coming together to deliver to our
            global clients
          </h2>
          <p className=" text-rc20 font-light">growing network coming together to deliver to our global clients</p>
          <p className=" text-rc20 font-light">
            Our partner ecosystem combines industry-leading expertise and technology to help you achieve your digital
            transformation goals.
          </p>
          <NectarButton color="#000000">View all partners</NectarButton>
        </Col>
        <Col
          xs={{ span: 18, offset: 3 }}
          sm={{ span: 16, offset: 4 }}
          md={{ span: 14, offset: 5 }}
          lg={{ span: 8, offset: 3 }}
          xl={{ span: 8, offset: 1 }}
        >
          <img src={Partner_logos} alt="" className=" w-rc521 h-rc272" />
        </Col>
      </Row>
      <Row className="mt-rc_7">
        <Col
          xs={{ span: 18, offset: 3 }}
          sm={{ span: 16, offset: 4 }}
          md={{ span: 14, offset: 5 }}
          lg={{ span: 16, offset: 4 }}
          xl={{ span: 16, offset: 4 }}
          className=" bg-black"
        >
          <Row justify="space-around" className="p-rc84 " gutter={69}>
            <Col span={12} className=" bg-white"></Col>
            <Col span={12}>
              <h3 className="text-white  text-rc28 font-light">
                <strong className=" font-bold">aim</strong> for <strong className="font-bold  text-yellow">10x</strong>{' '}
                value improvement.
              </h3>
              <p className=" text-white text-rc20 font-light">
                Join the global community for digital transformation leaders in planning and decision-making.
              </p>
              <NectarButton borderColor="#ffe400">Visit aim10x community</NectarButton>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default ViewSixthPart
