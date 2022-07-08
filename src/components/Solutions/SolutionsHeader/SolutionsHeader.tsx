import { NectarButton } from '../../common/NectarButton'
import './indes.less'

type SolutionsHeaderType = {
  headerClassName?: string
  TopDividerColor?: string
  headerTilteRight?: any
  borderColor?: string
  logoImg: string
  footerColor?: string
  footerDiviDerColor?: string
  headBg?: string
  title: any
  titleRight?: any
  titleBtn?: any
  headerTilte: any
}

const SolutionsHeader = ({
  headerClassName,
  TopDividerColor,
  headerTilteRight,
  borderColor,
  logoImg,
  footerColor,
  footerDiviDerColor,
  headBg,
  title,
  titleRight,
  headerTilte,
  titleBtn
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
        {headerTilte}
        {headerTilteRight}
      </div>
      <div className="text-rc66 leading-rc1_2 headerTitle_1 flex items-end">
        <div className="max-w-rc820 mt-rc180 pr-rc60">
          {title}
          {
            titleBtn || <div className="mt-rc18 font-bold text-rc16 cursor-pointer">
              <span>——</span>
              <span className="ml-rc10">Why choose Deloitte?</span>
              <NectarButton className="ml-rc25" color={borderColor}>
                Talk to an expert
              </NectarButton>
            </div>
          }
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
