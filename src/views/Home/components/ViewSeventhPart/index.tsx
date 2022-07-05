import { Col, Row } from 'antd'

const ViewSeventhPart = () => {
  return (
    <Row className=" bg-white">
      <Col
        xs={{ span: 18, offset: 3 }}
        sm={{ span: 16, offset: 4 }}
        md={{ span: 14, offset: 5 }}
        lg={{ span: 8, offset: 3 }}
        xl={{ span: 16, offset: 4 }}
      >
        <Row>
          <Col
            xs={{ span: 18, offset: 3 }}
            sm={{ span: 16, offset: 4 }}
            md={{ span: 16, offset: 4 }}
            lg={{ span: 16, offset: 4 }}
            xl={{ span: 24, offset: 0 }}
          >
            <h2 className=" text-rc40 font-light">
              <strong className=" font-semibold">Get the latest insights</strong> into the world of the supply chain.
            </h2>
          </Col>
          <Col
            xs={{ span: 18, offset: 3 }}
            sm={{ span: 16, offset: 4 }}
            md={{ span: 16, offset: 4 }}
            lg={{ span: 16, offset: 4 }}
            xl={{ span: 24, offset: 0 }}
          ></Col>
        </Row>
      </Col>
    </Row>
  )
}

export default ViewSeventhPart
