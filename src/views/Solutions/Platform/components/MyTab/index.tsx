import { Tabs } from 'antd'
import './index.less'

const { TabPane } = Tabs

type Item = {
  img: string
  title: string
}

type MyTabProps = {
  paneData: Item[]
}
const MyTab = ({ paneData }: MyTabProps) => {
  return (
    <Tabs defaultActiveKey="1" centered className="tab">
      {paneData.map((item) => (
        <TabPane tab={item.title} key={item.title}>
          <img src={item.img} alt="" className="w-full h-full" />
        </TabPane>
      ))}
    </Tabs>
  )
}

export default MyTab
