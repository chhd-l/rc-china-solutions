import blue_left_icon from '../../../assets/image/blue_left_icon@2x.png'
import SupplyChainControlTowerLogo from '../../../assets/image/SupplyChainControlTower_logo@2x.png'
import BounceArrow from '../../../components/BounceArrow'
import SolutionSEcyion3s from '../../../components/Solutions/SolutionSEcyion3s/SolutionSEcyion3s'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import UserSubmission from '../../../components/Solutions/UserSubmission/UserSubmission'
import WpbWrapper from '../../../components/Solutions/WpbWrapper/WpbWrapper'
import { Bule_footerIcons } from '../modules/footerIcons'
import { ReplenishmentPlanning_Ecyion3s_2, ReplenishmentPlanning_Ecyion3s_3 } from '../modules/ReplenishmentPlanning'

const ReplenishmentPlanning = () => {
  return (
    <div className="ReplenishmentPlanning">
      <SolutionsHeader
        borderColor="#000"
        headerTilte={<strong className="text-rc20">Replenishment Planning</strong>}
        logoImg={SupplyChainControlTowerLogo}
        titleRight={<BounceArrow />}
        title={
          <div className="w-rc_120 w-rc_120 -mt-rc80 mb-rc60 letterSpacing-rc5">
            <span className="border-b-4 border-blue-900 border-solid inline-block">Responsive</span>, multi-tier aware replenishments
          </div>
        }
        titleBtn={<div></div>}
      />
      <main>
        <SolutionSEcyion3s
          section_01_title="Multi-echelon Inventory Optimization and replenishment "
          section_01_title2="based on future demand, current plans and other factors to improve service levels, grow sales, and optimize inventory"
          section_01_span="Deloitte replenishment solution offers a comprehensive multi echelon inventory optimization for cost to serve, inventory and service level tradeoffs compared to traditional replenishment approaches."
          section_02_title="Top reasons organizations are upgrading"
          section_02_title2=" their retail analytics capabilities"
          section_02_spans={ReplenishmentPlanning_Ecyion3s_2}
          section_03_img={<div />}
          section_03_title={
            <div>
              Use cases favored by our
              <br />
              clients
            </div>
          }
          section_03_spans={ReplenishmentPlanning_Ecyion3s_3}
        />
        <UserSubmission
          title={<strong>Looking for a next-generation Replenishment Planning solution?</strong>}
        />
        <WpbWrapper
          leftIcon={blue_left_icon}
          footerClassName="Bule_Footer_hover"
          footerHover={Bule_footerIcons}
        />
      </main>
    </div>
  )
}

export default ReplenishmentPlanning
