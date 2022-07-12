import { useRef, useState } from 'react'
import Slider from 'react-slick'
import leftArrow from '../../../../assets/image/leftArrow.png'
import rightArrow from '../../../../assets/image/rightArrow.png'
import { NectarButton } from '../../../../components/common/NectarButton'
import SlickSlider from './components/SlickSlider'

const ViewThirdPart = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const slider = useRef<Slider | undefined>()

  return (
    <div className=" text-center relative">
      <div className=" absolute left-0 top-rc30 flex flex-row">
        <div
          onClick={() => slider.current!.slickGoTo(slideIndex + 1)}
          className="h-rc51 w-rc51 bg-black text-center flex items-center cursor-pointer mx-rc9 justify-center hover:bg-blue-700 "
        >
          <img src={leftArrow} alt="" className=" h-rc16 w-rc18" />
        </div>
        <div
          onClick={() => slider.current!.slickGoTo(slideIndex - 1)}
          className="h-rc51 w-rc51 bg-black text-center flex items-center cursor-pointer justify-center hover:bg-blue-700 "
        >
          <img src={rightArrow} alt="" className=" h-rc16 w-rc18" />
        </div>
      </div>

      <div className=" text-rc22 font-thin bg-gray-300 ">
        <span className="leading-rc111">The Deloitte Digital Brain is uniquely tailored to your industry</span>
        <SlickSlider sliderRef={slider} setSlideIndex={setSlideIndex} />
        <NectarButton color="#000000" hoverBorderColor="#000000" className=" mt-rc30 mb-rc80">
          View all industries
        </NectarButton>
      </div>
    </div>
  )
}

export default ViewThirdPart
