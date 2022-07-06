import { Col, Row, Tabs } from 'antd'
import digitalbrain_data from '../../../../../assets/image/digitalbrain-data.svg'
import digitalbrain_decisions from '../../../../../assets/image/digitalbrain-decisions.svg'
import digitalbrain_knowledge from '../../../../../assets/image/digitalbrain-knowledge.svg'
import './index.less'

type TabPaneContentProps = {
  title: string
  image: string
  text: string
}
const TabPaneContent = ({ image, text, title }: TabPaneContentProps) => {
  return (
    <Row justify="center" gutter={40} align="middle">
      <Col xs={{ span: 18 }} sm={{ span: 20 }} md={{ span: 20 }} lg={{ span: 12 }} xl={{ span: 8 }}>
        <img src={image} alt="" className="w-rc250 h-rc250" />
      </Col>
      <Col xs={{ span: 18 }} sm={{ span: 20 }} md={{ span: 20 }} lg={{ span: 12 }} xl={{ span: 16 }}>
        <p className="text-1A191A font-bold text-rc22">{title}</p>
        <div className="text-rc17 font-light mb-rc30">{text}</div>
      </Col>
    </Row>
  )
}

const { TabPane } = Tabs

const MyTab = () => (
  <Tabs defaultActiveKey="1" centered>
    <TabPane tab="Data and Knowledge Foundation" key="1">
      <TabPaneContent
        image={digitalbrain_data}
        text="“Digital Twin” of your business: Repository of real-time data, both internal and external, connecting the dots, and converting data to knowledge."
        title="Data and Knowledge Foundation"
      />
    </TabPane>
    <TabPane tab="AI, Analytics, and Algorithms" key="2">
      <TabPaneContent
        image={digitalbrain_knowledge}
        text="From predicting demand to balancing demand and supply, with fast scenario planning to sense opportunities & risks and enable better decision-making."
        title="AI, Analytics, and Algorithms"
      />
    </TabPane>
    <TabPane tab="Integrated planning" key="3">
      <TabPaneContent
        image={digitalbrain_decisions}
        text="Connecting all functional plans, across all horizons on one single platform to enable truly end-to-end decision-making."
        title="Integrated planning"
      />
    </TabPane>
  </Tabs>
)

export default MyTab
