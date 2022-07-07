import { NectarButton } from '../../common/NectarButton'
import './indes.less'

type SolutionsHeaderType = {
  headerClassName?: string
  TopDividerColor?: string
  HidentilteRightText?: boolean
  borderColor?: string
  logoImg: string
  footerColor?: string
  footerDiviDerColor?: string
  headBg?: string
  title: any
  titleRight?: any
}

const SolutionsHeader = ({
  headerClassName,
  TopDividerColor,
  HidentilteRightText,
  borderColor,
  logoImg,
  footerColor,
  footerDiviDerColor,
  headBg,
  title,
  titleRight,
}: SolutionsHeaderType) => {
  return (
    <header
      className={`pb-rc132 px-rc90 pt-rc35 relative SolutionsHeader ${headerClassName}`}
      style={{ backgroundColor: headBg ? 'rgba(0, 0, 0, 0.4)' : '' }}
    >
      <img style={{ zIndex: '-1' }} className="absolute top-0 left-0 h-full" src={headBg} alt="" />
      <div
        className={`flex items-center justify-between text-rc14 border-b ${
          TopDividerColor || 'border-gray-400'
        } border-solid pb-rc14`}
      >
        <div className="text-rc28 font-bold">Supply Chain Control Tower Software</div>
        {!HidentilteRightText && (
          <div>
            <span className="cursor-pointer">Supply Chain Control Tower</span> —
            <span className="text-black font-bold"> Supply Chain Control Tower</span>
          </div>
        )}
      </div>
      <div className="text-rc66 leading-rc1_2 headerTitle_1 flex items-end">
        <div className="max-w-rc820 mt-rc180 pr-rc60">
          {title}
          <div className="mt-rc18 font-bold text-rc16 cursor-pointer">
            <span>——</span>
            <span className="ml-rc10">Why choose Deloitte?</span>
            <NectarButton className="ml-rc25" color={borderColor}>
              Talk to an expert
            </NectarButton>
          </div>
        </div>
        <div className="flex-1">{titleRight}</div>
      </div>
      <div>
        <img className="mt-rc65" src={logoImg} alt="" />
        <div
          className="border-t border-solid mt-rc15 mb-rc10"
          style={{ borderColor: footerDiviDerColor || '#616161' }}
        />
        <div className="text-rc14" style={{ color: footerColor || '#999' }}>
          Trusted by leaders across industry verticals.
        </div>
      </div>
    </header>
  )
}

export default SolutionsHeader
