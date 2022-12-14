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
  hiderMask?: boolean
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
  titleBtn,
  hiderMask = false,
}: SolutionsHeaderType) => {
  return (
    <header
      className={`pb-rc100 px-rc90 pt-rc35 relative SolutionsHeader ${headerClassName}`}
      style={{ backgroundColor: headBg ? (hiderMask ? '' : 'rgba(0, 0, 0, 0.4)') : '' }}
    >
      <img style={{ zIndex: '-1' }} className="absolute top-0 left-0 w-full h-full" src={headBg} alt="" />
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
          {titleBtn || (
            <div className="mt-rc35 font-bold text-rc16 cursor-pointer flex items-center">
              <div className="flex items-center WhyChooseDeloitte w-rc230">
                <span className={`leftArrow ${headBg ? '' : 'leftArrowAfiter'}`}>
                  <div className='flex justify-between items-center'>
                    <i className="flex-1" />
                    <i className="flex-1" />
                  </div>
                </span>
                <span
                  className="ml-rc15"
                  onClick={() => {
                    let anchorElement = document.getElementById('WhyDeloitte')
                    if (anchorElement) {
                      anchorElement.scrollIntoView({ inline: 'start', block: 'start', behavior: 'smooth' })
                    }
                  }}
                >
                  Why choose Deloitte?
                </span>
              </div>
              <NectarButton
                onClick={() => {
                  let anchorElement = document.getElementById('RelatedSolutions')
                  if (anchorElement) {
                    anchorElement.scrollIntoView({ inline: 'center', block: 'center', behavior: 'smooth' })
                  }
                }}
                className="ml-rc6"
                color={borderColor}
              >
                Talk to an expert
              </NectarButton>
            </div>
          )}
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
