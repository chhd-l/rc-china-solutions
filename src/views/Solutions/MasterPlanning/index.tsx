import MasterPlanning_Sections_02 from '../../../assets/image/MasterPlanning_Sections_02.png'
import SupplyChainControlTower_leftIcon from '../../../assets/image/SupplyChainControlTower_leftIcon.png'
import SupplyChainControlTowerLogo from '../../../assets/image/SupplyChainControlTower_logo@2x.png'
import BounceArrow from '../../../components/BounceArrow'
import SolutionSEcyion3s from '../../../components/Solutions/SolutionSEcyion3s/SolutionSEcyion3s'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import UserSubmission from '../../../components/Solutions/UserSubmission/UserSubmission'
import WpbWrapper from '../../../components/Solutions/WpbWrapper/WpbWrapper'
import { MasterPlanningsection_03, MasterPlanningUseCases } from '../modules/MasterPlanning'

const MasterPlanning = () => {
  return (
    <div className="MasterPlanning">
      <SolutionsHeader
        TopDividerColor="border-black"
        headerTilte={<strong className="text-rc20">Supply Chain Master Planning</strong>}
        titleBtn={<div></div>}
        headerClassName="pb-rc65"
        logoImg={SupplyChainControlTowerLogo}
        title={
          <div className="w-rc_120 -mt-rc90">
            Optimized Demand/Supply balancing across{' '}
            <span className="border-b-4 border-purple-900 border-solid inline-block">end-to-end</span> Supply Chain
          </div>
        }
        titleRight={<BounceArrow />}
      />
      <main>
        <SolutionSEcyion3s
          section_01_title="Provide real-time commitments, cost-to-serve and demand shaping guidance"
          section_01_title2="to various demand scenarios to support an agile S&OP process."
          section_01_span="Powered by a Digital “Supply Chain Knowledge Graph” model, with advanced data management, high
          performance demand/supply match solvers, rapid what-if scenario planning capabilities, Deloitte’s Supply
          Chain Master Planning makes your supply chain more agile and cost effective in responding to market
          demand"
          section_02_title="Top reasons organizations are upgrading"
          section_02_title2="  their Supply Chain Master Planning capabilities"
          section_02_spans={MasterPlanningsection_03}
          section_03_img={MasterPlanning_Sections_02}
          section_03_title={
            <div>
              Use cases favored by our
              <br />
              clients
            </div>
          }
          section_03_spans={MasterPlanningUseCases}
        />
        <UserSubmission title="Get real time visibility. Leverage the Deloitte Digital Brain in your business." />
        <WpbWrapper
          leftIcon={SupplyChainControlTower_leftIcon}
          footerClassName="Purple_Footer_hover"
          footerHover={[
            'RelatedSolutions_1',
            'RelatedSolutions_2',
            'RelatedSolutions_3',
            'RelatedSolutions_4',
            'RelatedSolutions_5',
          ]}
        />
      </main>
    </div>
  )
}

export default MasterPlanning
