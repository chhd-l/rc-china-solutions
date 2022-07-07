import RevenueGrowthManagement_Sections_01_bg from '../../../assets/image/RevenueGrowthManagement_Sections_01_bg.png'
import RevenueGrowthManagement_Sections_02_bg from '../../../assets/image/RevenueGrowthManagement_Sections_02_bg.png'
import SupplyChainControlTowerLogo from '../../../assets/image/SupplyChainControlTower_logo@2x.png'
import ReadOurWhitePaper from '../../../assets/image/ReadOurWhitePaper.png'
import MoudulUseCase from '../../../components/Solutions/MoudulUseCase/MoudulUseCase'
import SolutionsPlanMoudlu from '../../../components/Solutions/PlanMoudlu/SolutionsPlanMoudlu'
import Sections from '../../../components/Solutions/Sections/Sections'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import TopReasons from '../../../components/Solutions/TopReasons/TopReasons'
import UserSubmission from '../../../components/Solutions/UserSubmission/UserSubmission'
import './index.less'
import {
  RevenueGrowthManagement_Topreasons_content,
  RevenueGrowthManagement_UseCases_content,
} from '../modules/RevenueGrowthManagement'

const RevenueGrowthManagement = () => {
  return (
    <div className="RevenueGrowthManagement">
      <SolutionsHeader
        borderColor="#000"
        logoImg={SupplyChainControlTowerLogo}
        HidentilteRightText={true}
        title={<div className='tracking-rc5'>Deloitte’s fully integrated Revenue Growth Management</div>}
        titleRight={
          <div className="bg-gray-eaeaea mt-rc100 p-rc40 text-rc24">
            <div style={{ transform: 'translateY(-20%)' }}>
              <img className="w-rc200" src={ReadOurWhitePaper} alt="" />
            </div>
            <div className="-mt-rc30 mb-rc15">
              Sustainable supply chains can have significant benefits for your business.
            </div>
            <div className="bg-black text-white inline-block text-rc16 py-rc12 px-rc35 rounded-full">
              Read our white paper
            </div>
          </div>
        }
      />
      <main>
        <Sections
          section_01_video={
            <div className="relative bg_1">
              <img src={RevenueGrowthManagement_Sections_01_bg} alt="" />
            </div>
          }
          section_01_text1="Build winning commercial and marketing plans every time in an era of disruption."
          section_01_text2="Knowing where and when to invest effectively isn’t easy, especially when faced with simultaneous supply, demand, and digital disruptions. Worse yet, managing your growth levers in siloed solutions—from pricing, promotions, marketing, assortment to innovation strategies—adds complexity and reduces the impact of your investments with customers and consumers."
          section_01_text3="Our next-generation AI/ML-powered software allows you to plan, analyze, and simulate the most effective investment choices across all growth levers in one unified platform for all decision-makers. This allows you to plan more effectively, meet all growth KPIs, and gain a digital-age advantage."
          section_02_video={RevenueGrowthManagement_Sections_02_bg}
          section_02_text1="Unparalleled market and demand knowledge built-in"
          section_02_text3="Our proprietary Revenue Knowledge Graph fully integrates with your existing core business systems and brings together over 1,500 internal and external data sources in a knowledge map. This breakthrough technology provides a true causal picture of consumer or customer behavior and its associated financial impact."
          section_02_text2=""
        />
        <TopReasons spans={RevenueGrowthManagement_Topreasons_content} />
        <MoudulUseCase
          title="Deloitte Revenue Growth Management software brings together planning and tracking capabilities "
          span="with performance predictions, forecasting, P&L simulations, and post-event analysis."
          spans={RevenueGrowthManagement_UseCases_content}
        />
        <SolutionsPlanMoudlu
          title="Plan better. Reduce waste. Reinvest back into business for growth for a sustainable future."
          spans={[
            'Global corporations are the largest consumers of the Earth’s resources. Good planning means enterprises can achieve their goals while using less of the Earth’s precious resources.',
            'The integrated planning efficiencies delivered by :o9 is helping corporations do more, be more and mean more, internally and to the world at large.',
          ]}
        />
        <UserSubmission title="Get real time visibility. Leverage the Deloitte Digital Brain in your business." />
      </main>
    </div>
  )
}

export default RevenueGrowthManagement
