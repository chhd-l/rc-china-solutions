import SMI_section_03_img from '../../../assets/image/SMI_section_03_img.png'
import DemandPlanning_leftIcon from '../../../assets/image/DemandPlanning_leftIcon.png'
import SupplyChainControlTowerLogo from '../../../assets/image/SupplyChainControlTower_logo@2x.png'
import BounceArrow from '../../../components/BounceArrow'
import SolutionSEcyion3s from '../../../components/Solutions/SolutionSEcyion3s/SolutionSEcyion3s'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import UserSubmission from '../../../components/Solutions/UserSubmission/UserSubmission'
import { SMI_Ecyion3s_2, SMI_Ecyion3s_3 } from '../modules/SMI'
import WpbWrapper from '../../../components/Solutions/WpbWrapper/WpbWrapper'
import { Red_footerIcons } from '../modules/footerIcons'
import { DrawLineLabel } from '../../../components/DrawLineLabel'

const SMI = () => {
  return (
    <div className="SMI">
      <SolutionsHeader
        TopDividerColor="border-black"
        headerTilte={<strong className="text-rc20">Sales & Marketing Initiatives</strong>}
        titleBtn={<div></div>}
        headerClassName="pb-rc65"
        logoImg={SupplyChainControlTowerLogo}
        title={
          <div className="w-rc_120 -mt-rc90">
            Deploy effective <DrawLineLabel backGroundColor='rgb(255, 115, 17)'>marketing</DrawLineLabel> <br />
            initiatives
          </div>
        }
        titleRight={<BounceArrow />}
      />
      <main>
        <SolutionSEcyion3s
          section_01_title="Use a smart, analytics powered system of record "
          section_01_title2="for all Spend and Sales & Marketing initiatives (Marketing, Trade Promotions, Pricing, Distribution, and more)."
          section_01_span="Move various marketing, trade promotion, pricing, distribution and other sales initiatives from scattered spreadsheets to a system of record. Use it for ideation, planning and post execution ROI measurement"
          section_02_title="Top reasons organizations are upgrading "
          section_02_title2=" their marketing initiatives management capabilities"
          section_02_spans={SMI_Ecyion3s_2}
          section_03_img={SMI_section_03_img}
          section_03_title={
            <div>
              Use cases favored by our
              <br />
              clients
            </div>
          }
          section_03_spans={SMI_Ecyion3s_3}
        />
        <UserSubmission title="Looking for solution to optimize your sales & marketing initiatives management?" />
        <WpbWrapper
          leftIcon={DemandPlanning_leftIcon}
          footerClassName="Red_Footer_hover"
          footerHover={Red_footerIcons}
        />
      </main>
    </div>
  )
}

export default SMI
