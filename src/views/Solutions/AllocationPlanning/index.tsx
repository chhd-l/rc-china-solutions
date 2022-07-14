import blue_left_icon from '../../../assets/image/blue_left_icon@2x.png'
import SupplyChainControlTowerLogo from '../../../assets/image/SupplyChainControlTower_logo@2x.png'
import BounceArrow from '../../../components/BounceArrow'
import { DrawLineLabel } from '../../../components/DrawLineLabel'
import SolutionSEcyion3s from '../../../components/Solutions/SolutionSEcyion3s/SolutionSEcyion3s'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import UserSubmission from '../../../components/Solutions/UserSubmission/UserSubmission'
import WpbWrapper from '../../../components/Solutions/WpbWrapper/WpbWrapper'
import { AllocationPlanning_Ecyion3s_2, AllocationPlanning_Ecyion3s_3 } from '../modules/AllocationPlanning'
import { Bule_footerIcons } from '../modules/footerIcons'

const AllocationPlanning = () => {
  return (
    <div className="AllocationPlanning">
      <SolutionsHeader
        borderColor="#000"
        headerTilte={<strong className="text-rc20">Allocation Planning</strong>}
        logoImg={SupplyChainControlTowerLogo}
        titleRight={<BounceArrow />}
        title={
          <div className="w-rc_120 w-rc_120 -mt-rc80 mb-rc60 letterSpacing-rc5">
            Optimal allocations to improve the{' '}
            <DrawLineLabel backGroundColor='rgb(0, 55, 255)'>bottom</DrawLineLabel>{' '}
            <DrawLineLabel backGroundColor='rgb(0, 55, 255)'>line</DrawLineLabel>
          </div>
        }
        titleBtn={<div></div>}
      />
      <main>
        <SolutionSEcyion3s
          section_01_title="Maximize profit with Smart Allocations "
          section_01_title2="to maintain optimized inventory levels for all stages of product lifecycle."
          section_01_span={<span className='text-white'>Deloitte replenishment solution offers a comprehensive multi echelon inventory optimization for cost to serve, inventory and service level tradeoffs compared to traditional replenishment approaches.</span>}
          section_02_title="Top reasons organizations are upgrading"
          section_02_title2=" their retail analytics capabilities"
          section_02_spans={AllocationPlanning_Ecyion3s_2}
          section_03_img={<div />}
          section_03_title={
            <div>
              Use cases favored by our
              <br />
              clients
            </div>
          }
          section_03_spans={AllocationPlanning_Ecyion3s_3}
        />
        <UserSubmission
          title={<strong>Looking for a next-generation Allocation Planning solution?</strong>}
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

export default AllocationPlanning
