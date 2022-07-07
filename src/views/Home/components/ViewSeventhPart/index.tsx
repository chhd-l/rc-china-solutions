import { Col, Row } from 'antd'
import DividerLeft from '../../../../components/DividerLeft'
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
                <Col
                  xs={{ span: 20 }}
                  sm={{ span: 20 }}
                  md={{ span: 20 }}
                  lg={{ span: 20 }}
                  xl={{ span: 7 }}
                  className="  group mr-8  overflow-hidden"
                  key={item.title}
                >
                  <div className="bg-gray-200    rounded-b-lg">
                    <Col span={24} className="relative">
                      <img src={item.img} alt="" className="w-full h-full rounded-t-lg" />
                      <FloatingTips className=" transform -translate-y-full group-hover:translate-y-0">
                        {item.tip}
                      </FloatingTips>
                    </Col>
                    <Col span={24} className="px-rc30 pt-rc30">
                      <div className="pl-2" style={{ borderLeft: '1px solid #909090' }}>
                        {item.title}
                      </div>
                    </Col>
                    <Col span={24} className="cursor-pointer  text-rc18 p-rc30 group-hover:underline">
                      {item.desc}
                    </Col>
                  </div>
                </Col>
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
