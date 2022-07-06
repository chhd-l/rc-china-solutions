import { Col, Row, Tabs } from 'antd'
import digital_platform from '../../../../../../assets/image/EKG-3D-cube-v1-1.svg'
import time_to_value from '../../../../../../assets/image/time-to-value.jpg'
import Adoption_and_chage from '../../../../../../assets/image/Adoption-and-chage.jpg'
import { NectarButton } from '../../../../../../components/common/NectarButton'
import './index.less'

type TabPaneContentProps = {
  // tabTitle: string
  image: string
  text: string
  buttonText: string
}
const TabPaneContent = ({ image, text, buttonText }: TabPaneContentProps) => {
  return (
    <Row justify="center" gutter={40}>
      <Col xs={{ span: 18 }} sm={{ span: 20 }} md={{ span: 20 }} lg={{ span: 12 }} xl={{ span: 13 }}>
        <img src={image} alt="" />
      </Col>
      <Col xs={{ span: 18 }} sm={{ span: 20 }} md={{ span: 20 }} lg={{ span: 12 }} xl={{ span: 10 }}>
        <div className="text-rc17 font-light mb-rc30">{text}</div>
        <NectarButton color="#000000">{buttonText}</NectarButton>
      </Col>
    </Row>
  )
}

const { TabPane } = Tabs

const MyTab = () => (
  <Tabs defaultActiveKey="1" centered>
    <TabPane tab="The Deloitte digital brain platform" key="1">
      <TabPaneContent
        image={digital_platform}
        text="The Deloitte platform uniquely enables companies to make fast and better decisions – by providing one single
          platform for commercial, forecasting, supply chain, and financial planning. All powered by real-time data,
          from internal and external sources."
        buttonText="About the platform"
      />
    </TabPane>
    <TabPane tab="Fastest time-to-value" key="2">
      <TabPaneContent
        image={time_to_value}
        text="Who has time for multi-year, big bang transformations? Deloitte makes transformation real with its agile, rapid and iterative delivery methodology supported by world class services and partners"
        buttonText="Why Deloitte"
      />
    </TabPane>
    <TabPane tab="Adoption & Change made simpler" key="3">
      <TabPaneContent
        image={Adoption_and_chage}
        text="User adoption, process changes, global rollouts are never easy. The Deloitte platform with amazing usability, embedded training features, makes global rollouts and enterprise wide adoption easier."
        buttonText="View solutions"
      />
    </TabPane>
  </Tabs>
)

export default MyTab
