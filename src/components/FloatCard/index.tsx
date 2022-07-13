import { Col } from 'antd'
import { FloatingTips } from '../../views/Home/components/ViewSeventhPart/components/FloatingTips'

type FloadCardProps = {
  title: string
  path: string
  desc: string
  tip: string
  bgColor?: 'white' | 'black'
  textColor?: 'white' | 'black'
}

const FloadCard = ({ title, path, desc, tip, bgColor, textColor }: FloadCardProps) => {
  return (
    <Col
      xs={{ span: 20 }}
      sm={{ span: 20 }}
      md={{ span: 12 }}
      lg={{ span: 8 }}
      xl={{ span: 8 }}
      className={`group mb-rc50  `}
      key={title}
    >
      <div
        className={`   relative  rounded-lg ${bgColor === 'white' ? 'bg-gray-200' : 'bg-black'} overflow-hidden w-full`}
      >
        <img src={path} alt="" className="w-full h-full rounded-t-lg  " />
        <div className="px-rc30 pt-rc30">
          <div
            style={{ borderLeft: '1px solid #909090' }}
            className={`pl-2   ${textColor === 'white' ? 'text-white opacity-70' : 'text-black'} `}
          >
            {title}
          </div>
        </div>
        <div
          className={`cursor-pointer  text-rc18 p-rc30 group-hover:underline 
          ${textColor === 'white' ? 'text-white' : 'text-black'}`}
        >
          {desc}
        </div>
        <FloatingTips className=" transform -translate-y-full group-hover:translate-y-0">{tip}</FloatingTips>
      </div>
    </Col>
  )
}

export default FloadCard
