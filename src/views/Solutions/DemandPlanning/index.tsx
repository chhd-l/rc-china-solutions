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
import './index.less'
import UserSubmission from '../../../components/Solutions/UserSubmission/UserSubmission'

const DemandPlanning = () => {
  return (
    <div className="DemandPlanning">
      <SolutionsHeader
        borderColor="#000"
        logoImg={SupplyChainControlTowerLogo}
        title={
          <div>
            <span className="font-bold">Real time visibility</span>
            <br /> & automated response at scale
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
          section_01_text2="o9’s demand planning software is not just helping organizations predict demand better, it is also helping them sense, analyze, plan and shape demand to optimize both short-term and long-term sales and margin performance."
          section_02_video={DemandPlanning_section_2_bg}
          section_02_text1="Drive significant bottom-line value"
          section_02_text2="By improving forecasts based on leading indicators while providing early visibility to risks and opportunities."
          section_02_text3="Scattered market visibility and spreadsheets make responding to market changes problematic. o9’s AI-powered, digital solution for demand planning features collaborative analytics, planning and continuous learning that helps your organization eliminate poorly made demand decisions."
        />
        <TopReasons spans={DemandPlanningTopReasons} />
        <MoudulUseCase spans={DemandPlanningUseCase} />
        <SolutionsPlanMoudlu
          spans={[
            'Deloitte’s next-generation demand planning software capabilities are helping global enterprises improve forecast accuracy, which directly correlates to better plans and improved financial performance. And when a business plans better, it creates operational efficiencies that significantly reduce wastage.',
            'The integrated planning efficiencies delivered by o9 is helping corporations do more, be more and mean more, internally and to the world at large.',
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
        <section className="section_09">
          <div className="mb-rc45 text-rc35">Related Solutions</div>
          <div className="flex flex-wrap">
            <div className="group RelatedSolutions_1 hover:bg-black hover:text-white flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30">
              <div className="w-rc100 h-full" />
              <div>Supply Chain Master Planning</div>
              <img
                className="transition-all opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
                src={DemandPlanning_leftIcon}
                alt=""
              />
            </div>
            <div className="group RelatedSolutions_2 hover:bg-black hover:text-white flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30">
              <div className="w-rc100 h-full" />
              <div>Supply Chain Master Planning</div>
              <img
                className="transition-all opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
                src={DemandPlanning_leftIcon}
                alt=""
              />
            </div>
            <div className="group RelatedSolutions_3 hover:bg-black hover:text-white flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30">
              <div className="w-rc100 h-full" />
              <div>Supply Chain Master Planning</div>
              <img
                className="transition-all opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
                src={DemandPlanning_leftIcon}
                alt=""
              />
            </div>
            <div className="group RelatedSolutions_4 hover:bg-black hover:text-white flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30">
              <div className="w-rc100 h-full" />
              <div>Supply Chain Master Planning</div>
              <img
                className="transition-all opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
                src={DemandPlanning_leftIcon}
                alt=""
              />
            </div>
            <div className="group RelatedSolutions_5 hover:bg-black hover:text-white flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30">
              <div className="w-rc100 h-full" />
              <div>Supply Chain Master Planning</div>
              <img
                className="opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
                src={DemandPlanning_leftIcon}
                alt=""
              />
            </div>
            <div className="group RelatedSolutions_6 hover:bg-black hover:text-white flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30">
              <div className="w-rc100 h-full" />
              <div>Supply Chain Master Planning</div>
              <img
                className="opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
                src={DemandPlanning_leftIcon}
                alt=""
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default DemandPlanning
