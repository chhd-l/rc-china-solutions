import { Col, Row } from 'antd'
import leftArrow from '../../../../assets/image/leftArrow.png'
import rightArrow from '../../../../assets/image/rightArrow.png'
import SlickSlider from './components/SlickSlider'

const ViewThirdPart = () => {
  return (
    <div className=" text-center relative">
      <div className=" absolute left-0 top-1/3 flex flex-row">
        <div className="h-rc51 w-rc51 bg-black text-center flex items-center cursor-pointer mx-rc9 justify-center hover:bg-blue-700 ">
          <img src={leftArrow} alt="" className=" h-rc16 w-rc18   " />
        </div>
        <div className="h-rc51 w-rc51 bg-black text-center flex items-center cursor-pointer justify-center hover:bg-blue-700 ">
          <img src={rightArrow} alt="" className="h-rc16 w-rc18" />
        </div>
      </div>
      <div className=" text-rc22 font-thin bg-gray-300 leading-rc111">
        The o9 Digital Brain is uniquely tailored to your industry
      </div>
      <SlickSlider />
    </div>
  )
}

export default ViewThirdPart
