import { Col, Row } from 'antd'

const WhitePapers = () => {
  return (
    <div>
      <Row>
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 19 }} lg={{ span: 18 }} xl={{ span: 24 }}>
          <video
            loop
            autoPlay
            muted
            playsInline
            preload="auto"
            className="w-full h-full"
            src="https://o9solutions.com/wp-content/uploads/2020/08/Home-Web-1.mp4"
          />
        </Col>
      </Row>
    </div>
  )
}

export default WhitePapers
