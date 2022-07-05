import { Col, Row } from 'antd'
import DividerLeft from '../../../../components/DividerLeft'
import { FloatingTips } from './components/FloatingTips'
import { sightsList } from './modules'

const ViewSeventhPart = () => {
  return (
    <Row className=" bg-white">
      <Col span={16} offset={4} className='mb-rc30'>
        <DividerLeft dividerColor='rgba(0, 0, 0, 0.2)' >
          <h5 className="text-rc18 font-normal">
            <strong className=" font-semibold text-rc22">Discover</strong> our newsroom
          </h5>
        </DividerLeft>
      </Col>
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
          >
            <Row>
              {sightsList.map((item) => (
                <Col span={7} className=" bg-gray-200 group mr-8  overflow-hidden">
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
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default ViewSeventhPart
