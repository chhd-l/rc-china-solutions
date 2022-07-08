import arrow_down from '../../assets/image/arrow-down.svg'
import arrow_down_white from '../../assets/image/arrow_down_white.png'
import './index.less'

type BrounceArrowProps = {
  type?: 'white' | 'black'
}
const BrounceArrow = ({ type }: BrounceArrowProps) => {
  return (
    <a href="#content" className="h-full pb-rc58 flex items-end justify-end w-full ">
      <img
        src={type === 'white' ? arrow_down_white : arrow_down}
        alt=""
        width={212}
        height={212}
        className="downarrow"
      />
    </a>
  )
}

export default BrounceArrow
