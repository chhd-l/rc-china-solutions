import arrow_down from '../../assets/image/arrow-down.svg'
import './index.less'
const BrounceArrow = () => {
  return (
    <a href="#content" className="h-full pb-rc58 flex items-end justify-end w-full ">
      <img src={arrow_down} alt="" width={212} height={212} className="downarrow" />
    </a>
  )
}

export default BrounceArrow
