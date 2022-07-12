import { Col, Row } from 'antd'
import DividerLeft from '../../../../components/DividerLeft'
import FloadCard from '../../../../components/FloatCard'
import { Arrow } from './components/Arrow'
import { FloatingTips } from './components/FloatingTips'
import { sightsList } from './modules'

const ViewSeventhPart = () => {
  return (
    <Row className=" bg-white" justify="center">
      <Col span={16} className="mb-rc30">
        <DividerLeft dividerColor="rgba(0, 0, 0, 0.2)">
          <h5 className="text-rc18 font-normal">
            <strong className=" font-semibold text-rc22">Discover</strong> our newsroom
          </h5>
        </DividerLeft>
      </Col>
      <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 14 }} lg={{ span: 16 }} xl={{ span: 16 }}>
        <Row>
          <Col span={24}>
            <h2 className=" text-rc40 font-light">
              <strong className=" font-semibold">Get the latest insights</strong> into the world of the supply chain.
            </h2>
          </Col>
          <Col span={24}>
            <Row justify="center" align="top">
              {sightsList.map((item) => (
                <FloadCard {...item} bgColor="white" textColor="black" key={item.title} />
              ))}
            </Row>
          </Col>
        </Row>
      </Col>
      <Col
        xs={{ span: 18 }}
        sm={{ span: 16 }}
        md={{ span: 14 }}
        lg={{ span: 8 }}
        xl={{ span: 16 }}
        className=" my-rc35"
      >
        <Arrow>Read our blog</Arrow>
        <Arrow>Latest News</Arrow>
      </Col>
    </Row>
  )
}

export default ViewSeventhPart
