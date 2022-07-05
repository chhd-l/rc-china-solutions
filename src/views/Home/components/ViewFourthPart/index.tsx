import { Col, Collapse, Row } from 'antd'
import { useState } from 'react'
import { Icon } from './components/Icon'
import { data } from './module'
import './index.less'
const { Panel } = Collapse
const ViewFourthPart = () => {
  const [open, setOpen] = useState('')
  return (
    <Row className=" bg-gray-700 py-rc152 text-white">
      <Col
        xs={{ span: 18, offset: 3 }}
        sm={{ span: 16, offset: 4 }}
        md={{ span: 14, offset: 5 }}
        lg={{ span: 8, offset: 3 }}
        xl={{ span: 6, offset: 1 }}
      >
        <div className=" text-rc24 font-thin leading-6">Aim big, start small, iterate rapidly.</div>
        <div className=" text-rc40 font-thin">Top 5 :o9 use cases that clients are starting with</div>
      </Col>
      <Col
        xs={{ span: 18, offset: 3 }}
        sm={{ span: 16, offset: 4 }}
        md={{ span: 14, offset: 5 }}
        lg={{ span: 8, offset: 3 }}
        xl={{ span: 15, offset: 1 }}
      >
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => <Icon isActive={isActive} />}
          expandIconPosition="right"
          className="site-collapse-custom-collapse"
        >
          {data.map((item) => (
            <Panel header={item.title} key={item.title} className="site-collapse-custom-panel">
              <p>{item.desc}</p>
              <p className="cursor-pointer opacity-70 transition hover:text-white hover:opacity-100 font-semibold text-rc18">
                Learn more
              </p>
            </Panel>
          ))}
        </Collapse>
      </Col>
    </Row>
  )
}

export default ViewFourthPart
