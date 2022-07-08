import IntegratedBusinessPlanning_Sections_bg from '../../../assets/image/IntegratedBusinessPlanning_Sections_bg.png'
import IntegratedBusinessPlanning_header_bg from '../../../assets/image/IntegratedBusinessPlanning_header_bg.png'
import IBP_WpbRow_img from '../../../assets/image/IBP_WpbRow_img.png'
import section_09_left_icon from '../../../assets/image/section_09_left_icon.png'
import logos_home_1_1 from '../../../assets/image/logos-home-1-1.png'
import SolutionsPlanMoudlu from '../../../components/Solutions/PlanMoudlu/SolutionsPlanMoudlu'
import Sections from '../../../components/Solutions/Sections/Sections'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import TopReasons from '../../../components/Solutions/TopReasons/TopReasons'
import MoudulUseCase from '../../../components/Solutions/MoudulUseCase/MoudulUseCase'
import './index.less'
import UserSubmission from '../../../components/Solutions/UserSubmission/UserSubmission'
import { IBPSolutionsPlanMoudlu, IntegratedBusinessPlanning_TopReasons } from '../modules/IntegratedBusinessPlanning'
import WpbRow from '../../../components/Solutions/WpbRow/WpbRow'

const IntegratedBusinessPlanning = () => {
  return (
    <div className="IntegratedBusinessPlanning">
      <SolutionsHeader
        borderColor="#fff"
        headerClassName="text-white pb-0"
        TopDividerColor="border-gray-999"
        headBg={IntegratedBusinessPlanning_header_bg}
        logoImg={logos_home_1_1}
        footerColor="#fff"
        footerDiviDerColor="rgba(255,255,255,.5)"
        title={
          <div className="text-rc45 whitespace-nowrap">
            Reimagine
            <strong> Sales & Operations Planning</strong>
          </div>
        }
      />
      <main>
        <Sections
          section_01_video={<div className="relative w-full h-rc90" />}
          section_01_text1="Cross funtional collaboration for world class decision making"
          section_01_text2="o9’s Integrated Business Planning solution uses automation to bring together finance, marketing, sales, and supply chain to address risk and opportunities in an online live platform. Provide full visibility and complete transparency on the gap vs. the annual plan in revenues, cost, margin, and volumes. Resulting in profitable growth that balances strategic, financial and operational objectives."
          section_02_video={IntegratedBusinessPlanning_Sections_bg}
          section_02_text1="Integrated business planning to mitigate risks"
          section_02_text2=""
          section_02_text3="Model risks and opportunities to build end to end impact analysis. Simulate proposals, gap closure initiatives, scenario planning, cost take outs, inventory planning, and process improvements to understand overall future demand supportability and KPI impact"
        />
        <TopReasons
          p="Why customers choose o9 for their Integrated Business Planning (IBP)"
          spans={IntegratedBusinessPlanning_TopReasons}
        />
        <MoudulUseCase
          title="With o9 Integrated Business Planning, customers are able to reach a new level of collaboration in their planning process."
          flexOpen={false}
          span=''
          spans={IBPSolutionsPlanMoudlu}
        />
        <SolutionsPlanMoudlu
          spans={[
            'Deloitte’s Integrated Business planning software capabilities including S&OP are helping global enterprises improve the overall plan, which directly correlates to better and improved financial performance. And when a business plans better, it creates operational efficiencies that significantly reduce wastage.',
            'The integrated planning efficiencies delivered by o9 is helping corporations do more, be more and mean more, internally and to the world at large.',
          ]}
          bg={false}
        />
        <WpbRow
          img={IBP_WpbRow_img}
          title="How next-generation IBP could deliver profitable growth and reliability of achieving the commercial business plan."
          span1="The Deloitte Integrated Business Planning Solution allows for more tight knit collaboration within the planning process."
          span2='Walkthrough the steps of the Demand Management Review (DMR) to understand the gaps between the plan and demand to model gap closure activities. Next Supply Management Review (SMR) review to supply options and if initiatives can be fulfilled.'
          span3="It correctly defines different streams of demand, identifies them then creates a composite forecast across horizons. And it dynamically adjusts plans and scenario-based responses to changes in planning parameters. This is the power of agile thinking in creating future resilience."
        />
        <UserSubmission
          title={<strong>Get real time visibility. Leverage the Deloitte Digital Brain in your business.</strong>}
        />
        <section className="section_09 text-rc20">
          <div className="mb-rc45 text-rc35">Related Solutions</div>
          <div className="flex flex-wrap">
            <div className="transition-all group RelatedSolutions_1 hover:bg-black hover:text-white flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30">
              <div className="w-rc100 h-full" />
              <div>Supply Chain Master Planning</div>
              <img
                className="transition-all opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
                src={section_09_left_icon}
                alt=""
              />
            </div>
            <div className="transition-all group RelatedSolutions_1 hover:bg-black hover:text-white flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30">
              <div className="w-rc100 h-full" />
              <div>Supply Chain Master Planning</div>
              <img
                className="transition-all opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
                src={section_09_left_icon}
                alt=""
              />
            </div>
            <div className="transition-all group RelatedSolutions_2 hover:bg-black hover:text-white flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30">
              <div className="w-rc100 h-full" />
              <div>Supply Chain Master Planning</div>
              <img
                className="transition-all opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
                src={section_09_left_icon}
                alt=""
              />
            </div>
            <div className="transition-all group RelatedSolutions_3 hover:bg-black hover:text-white flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30">
              <div className="w-rc100 h-full" />
              <div>Supply Chain Master Planning</div>
              <img
                className="transition-all opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
                src={section_09_left_icon}
                alt=""
              />
            </div>
            <div className="transition-all group RelatedSolutions_4 hover:bg-black hover:text-white flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30">
              <div className="w-rc100 h-full" />
              <div>Supply Chain Master Planning</div>
              <img
                className="opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
                src={section_09_left_icon}
                alt=""
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default IntegratedBusinessPlanning
