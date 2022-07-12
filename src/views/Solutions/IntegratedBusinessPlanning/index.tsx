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
import UserSubmission from '../../../components/Solutions/UserSubmission/UserSubmission'
import { IBPSolutionsPlanMoudlu, IntegratedBusinessPlanning_TopReasons } from '../modules/IntegratedBusinessPlanning'
import WpbRow from '../../../components/Solutions/WpbRow/WpbRow'
import WpbWrapper from '../../../components/Solutions/WpbWrapper/WpbWrapper'

const IntegratedBusinessPlanning = () => {
  return (
    <div className="IntegratedBusinessPlanning">
      <SolutionsHeader
        borderColor="#fff"
        headerClassName="text-white pb-0"
        headerTilte={<div className="text-rc28 font-bold">Integrated Business Planning (IBP Software)</div>}
        TopDividerColor="border-gray-999"
        headerTilteRight={<div>
          <span className="font-bold">Integrated Business Planning (IBP)</span>
        </div>}
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
          section_01_text2="Deloitte’s Integrated Business Planning solution uses automation to bring together finance, marketing, sales, and supply chain to address risk and opportunities in an online live platform. Provide full visibility and complete transparency on the gap vs. the annual plan in revenues, cost, margin, and volumes. Resulting in profitable growth that balances strategic, financial and operational objectives."
          section_02_video={IntegratedBusinessPlanning_Sections_bg}
          section_02_text1="Integrated business planning to mitigate risks"
          section_02_text2=""
          section_02_text3="Model risks and opportunities to build end to end impact analysis. Simulate proposals, gap closure initiatives, scenario planning, cost take outs, inventory planning, and process improvements to understand overall future demand supportability and KPI impact"
        />
        <TopReasons
          p="Why customers choose Deloitte for their Integrated Business Planning (IBP)"
          spans={IntegratedBusinessPlanning_TopReasons}
        />
        <MoudulUseCase
          title="With Deloitte Integrated Business Planning, customers are able to reach a new level of collaboration in their planning process."
          flexOpen={false}
          span=''
          spans={IBPSolutionsPlanMoudlu}
        />
        <SolutionsPlanMoudlu
          spans={[
            'Deloitte’s Integrated Business planning software capabilities including S&OP are helping global enterprises improve the overall plan, which directly correlates to better and improved financial performance. And when a business plans better, it creates operational efficiencies that significantly reduce wastage.',
            'The integrated planning efficiencies delivered by Deloitte is helping corporations do more, be more and mean more, internally and to the world at large.',
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
        <WpbWrapper
          leftIcon={section_09_left_icon}
          footerClassName="Greed_Footer_hover"
          footerHover={['RelatedSolutions_1', 'RelatedSolutions_2', 'RelatedSolutions_3']}
        />
      </main>
    </div>
  )
}

export default IntegratedBusinessPlanning
