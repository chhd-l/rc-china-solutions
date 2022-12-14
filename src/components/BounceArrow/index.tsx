import arrow_down from '../../assets/image/arrow-down.svg'
import arrow_down_white from '../../assets/image/arrow_down_white.png'
import './index.less'

type BounceArrowProps = {
  type?: 'white' | 'black'
  isPaddingBottom?: boolean
}
const BounceArrow = ({ type, isPaddingBottom }: BounceArrowProps) => {
  return (
    <a onClick={() => {
      let anchorElement = document.getElementById('content')
                  if (anchorElement) {
                    anchorElement.scrollIntoView({ inline: 'start', block: 'start', behavior: 'smooth' })
                  }
    }} className={`h-full ${isPaddingBottom ? '' : 'pb-rc58'} flex items-end justify-end w-full`}>
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

export default BounceArrow
