import { Col } from 'antd'
import { FloatingTips } from '../../views/Home/components/ViewSeventhPart/components/FloatingTips'

type FloadCardProps = {
  title: string
  path: string
  desc: string
  tip: string
  type?: 'white' | 'black'
}

const FloadCard = ({ title, path, desc, tip, type }: FloadCardProps) => {
  return (
    <Col
      xs={{ span: 20 }}
      sm={{ span: 20 }}
      md={{ span: 20 }}
      lg={{ span: 20 }}
      xl={{ span: 7 }}
      className={`group mr-8  overflow-hidden mb-rc10 `}
      key={title}
    >
      <div className={`${type === 'white' ? 'bg-gray-200' : ' bg-black'}    rounded-b-lg`}>
        <Col span={24} className="relative">
          <img src={path} alt="" className="w-full h-full rounded-t-lg" />
          <FloatingTips className=" transform -translate-y-full group-hover:translate-y-0">{tip}</FloatingTips>
        </Col>
        <Col span={24} className="px-rc30 pt-rc30">
          <div
            style={{ borderLeft: '1px solid #909090' }}
            className={`pl-2 ${type === 'white' ? 'text-black' : 'text-gray-CCCCCC'}`}
          >
            {title}
          </div>
        </Col>
        <Col
          span={24}
          className={`cursor-pointer  text-rc18 p-rc30 group-hover:underline ${
            type === 'white' ? 'text-black' : 'text-white'
          }`}
        >
          {desc}
        </Col>
      </div>
    </Col>
  )
}

export default FloadCard
