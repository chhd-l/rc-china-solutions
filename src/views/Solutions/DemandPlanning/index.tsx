import DemandPlanningWpbRow_img from '../../../assets/image/DemandPlanningWpbRow_img.png'
import DemandPlanning_section_01_bg from '../../../assets/image/DemandPlanning_section_01_bg.png'
import DemandPlanning_section_2_bg from '../../../assets/image/DemandPlanning_section_2_bg@2x.png'
import DemandPlanning_leftIcon from '../../../assets/image/DemandPlanning_leftIcon.png'
import SupplyChainControlTowerLogo from '../../../assets/image/SupplyChainControlTower_logo@2x.png'
import SolutionsPlanMoudlu from '../../../components/Solutions/PlanMoudlu/SolutionsPlanMoudlu'
import Sections from '../../../components/Solutions/Sections/Sections'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import TopReasons from '../../../components/Solutions/TopReasons/TopReasons'
import WpbRow from '../../../components/Solutions/WpbRow/WpbRow'
import { DemandPlanningTopReasons, DemandPlanningUseCase } from '../modules/DemandPlanning'
import MoudulUseCase from '../../../components/Solutions/MoudulUseCase/MoudulUseCase'
import UserSubmission from '../../../components/Solutions/UserSubmission/UserSubmission'
import WpbWrapper from '../../../components/Solutions/WpbWrapper/WpbWrapper'

const DemandPlanning = () => {
  return (
    <div className="DemandPlanning">
      <SolutionsHeader
        borderColor="#000"
        headerTilteRight={
        <div>
          <span className="cursor-pointer">Revenue Management</span> —
          <span className="font-bold"> Demand Planning</span>
        </div>
        }
        headerTilte={<strong className="text-rc28">Demand Planning Software</strong>}
        logoImg={SupplyChainControlTowerLogo}
        title={
          <div>
            <span className="font-bold">AI/ML-powered</span>
            <br />demand planning
          </div>
        }
      />
      <main>
        <Sections
          section_01_video={
            <div className="relative bg_1">
              <img src={DemandPlanning_section_01_bg} alt="" />
            </div>
          }
          section_01_text1="Improve forecast accuracy and sales adoption. Strengthen alignment of sales, product, supply chain and finance organizations."
          section_01_text2="Deloitte’s demand planning software is not just helping organizations predict demand better, it is also helping them sense, analyze, plan and shape demand to optimize both short-term and long-term sales and margin performance."
          section_02_video={DemandPlanning_section_2_bg}
          section_02_text1="Drive significant bottom-line value"
          section_02_text2="By improving forecasts based on leading indicators while providing early visibility to risks and opportunities."
          section_02_text3="Scattered market visibility and spreadsheets make responding to market changes problematic. Deloitte’s AI-powered, digital solution for demand planning features collaborative analytics, planning and continuous learning that helps your organization eliminate poorly made demand decisions."
        />
        <TopReasons spans={DemandPlanningTopReasons} />
        <MoudulUseCase spans={DemandPlanningUseCase} />
        <SolutionsPlanMoudlu
          spans={[
            'Deloitte’s next-generation demand planning software capabilities are helping global enterprises improve forecast accuracy, which directly correlates to better plans and improved financial performance. And when a business plans better, it creates operational efficiencies that significantly reduce wastage.',
            'The integrated planning efficiencies delivered by Deloitte is helping corporations do more, be more and mean more, internally and to the world at large.',
          ]}
        />
        <WpbRow
          img={DemandPlanningWpbRow_img}
          span1="AI-powered demand planning software: the smarter approach to planning processes."
          span2="Deloitte’s cloud-native AI/ML-driven integrated business planning platform’s capabilities solve some of the most complex challenges linked to demand planning. It resolves the disconnect from the end-customer by linking macroeconomic data, down to a local level."
          span3="It correctly defines different streams of demand, identifies them then creates a composite forecast across horizons. And it dynamically adjusts plans and scenario-based responses to changes in planning parameters. This is the power of agile thinking in creating future resilience."
        />
        <UserSubmission title={<div>
          <span className='font-bold'>See the future. </span>
          Leve Leverage Deloitte’s digital brain in your business.
        </div>} />
        <WpbWrapper
          leftIcon={DemandPlanning_leftIcon}
          footerClassName="Red_Footer_hover"
          footerHover={[
            'RelatedSolutions_1',
            'RelatedSolutions_2',
            'RelatedSolutions_3',
            'RelatedSolutions_4',
            'RelatedSolutions_5',
            'RelatedSolutions_6',
          ]}
        />
      </main>
    </div>
  )
}

export default DemandPlanning
