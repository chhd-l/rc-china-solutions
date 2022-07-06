import { Col, Row } from 'antd'

const BrainSecondPart = () => {
  return (
    <Row>
      <Col
        xs={{ span: 18, offset: 3 }}
        sm={{ span: 16, offset: 4 }}
        md={{ span: 14, offset: 5 }}
        lg={{ span: 8, offset: 3 }}
        xl={{ span: 20, offset: 2 }}
        className="border-b border-gray-E4E4E4"
      />
      <Col
        xs={{ span: 18, offset: 3 }}
        sm={{ span: 16, offset: 4 }}
        md={{ span: 14, offset: 5 }}
        lg={{ span: 8, offset: 3 }}
        xl={{ span: 12, offset: 6 }}
        className="bg-black h-rc479 mt-rc60 "
      ></Col>

      <Col
        xs={{ span: 18, offset: 3 }}
        sm={{ span: 16, offset: 4 }}
        md={{ span: 14, offset: 5 }}
        lg={{ span: 8, offset: 3 }}
        xl={{ span: 12, offset: 6 }}
      >
        <p className=" text-rc17 my-rc35">
          Watch{' '}
          <strong>
            <span className=" font-medium cursor-pointer">Chakri</span> Gottemukkala
          </strong>{' '}
          (CEO and founder – o9 Solutions) on “Why every business needs a digital brain”
        </p>
      </Col>
    </Row>
  )
}

export default BrainSecondPart
