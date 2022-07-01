import leftArrow from '../../../../assets/image/leftArrow.png'
import rightArrow from '../../../../assets/image/rightArrow.png'

const ViewThirdPart = () => {
  return (
    <div className=" text-center relative">
      <div className=" absolute left-0 top-1/3">
        <img src={leftArrow} alt="" className=" h-rc51 w-rc51 inline-block cursor-pointer mx-rc9" />
        <img src={rightArrow} alt="" className=" h-rc51 w-rc51 inline-block cursor-pointer" />
      </div>
      <div className=" text-rc22 font-thin bg-gray-300 leading-rc111">
        The o9 Digital Brain is uniquely tailored to your industry
      </div>
    </div>
  )
}

export default ViewThirdPart
