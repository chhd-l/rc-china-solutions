import SalesOperationsPlanning_section_02_bg from '../../../assets/image/SalesOperationsPlanning_section_02_bg.png'
import SalesOperationsPlanning_header_bg from '../../../assets/image/SalesOperationsPlanning_header_bg.png'
import section_09_left_icon from '../../../assets/image/section_09_left_icon.png'
import logos_home_1_1 from '../../../assets/image/logos-home-1-1.png'
import SolutionsPlanMoudlu from '../../../components/Solutions/PlanMoudlu/SolutionsPlanMoudlu'
import Sections from '../../../components/Solutions/Sections/Sections'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import TopReasons from '../../../components/Solutions/TopReasons/TopReasons'
import MoudulUseCase from '../../../components/Solutions/MoudulUseCase/MoudulUseCase'
import './index.less'
import UserSubmission from '../../../components/Solutions/UserSubmission/UserSubmission'
import { SalesOperationsPlanning_TopReasons, SalesOperationsPlanning_UseCase } from '../modules/SalesOperationsPlanning'

const SalesOperationsPlanning = () => {
  return (
    <div className="SalesOperationsPlanning">
      <SolutionsHeader
        borderColor="#fff"
        headerClassName="text-white"
        TopDividerColor="border-gray-999"
        headBg={SalesOperationsPlanning_header_bg}
        logoImg={logos_home_1_1}
        footerColor="#fff"
        footerDiviDerColor="rgba(255,255,255,.5)"
        title={
          <div className='text-rc45 whitespace-nowrap'>
            Reimagine
            <strong> Sales & Operations Planning</strong>
          </div>
        }
      />
      <main>
        <Sections
          section_01_video={
            <div className="relative w-full h-rc160" />
          }
          section_01_text1="Redefine Sales & Operations Planning with in-line collaboration"
          section_01_text2="o9 is helping organizations move from executive dash-boarding to a collaborative, analytic insights driven platform for alignment of cross-functional plans and initiatives. Enable your digital transformation of S&OP by integrating commercial planning and finance into an existing S&OP with on system meetings."
          section_02_video={SalesOperationsPlanning_section_02_bg}
          section_02_text1="Create a unified plan with live data"
          section_02_text2=''
          section_02_text3="Integrate all plans with the flexibility to model different sources of data, and accommodate the different granularity of the plans and understand the gaps between the plans. Resulting in a unified plan, in volume and value, constrained and fully financialized. Use the S&OP dashboard as a part of the full Integrated Business Planning (IBP) solution from o9."
        />
        <TopReasons spans={SalesOperationsPlanning_TopReasons} />
        <MoudulUseCase flexOpen={false} spans={SalesOperationsPlanning_UseCase} />
        <SolutionsPlanMoudlu
          spans={[
            'Deloitte’s Integrated Business planning software capabilities including S&OP are helping global enterprises improve the overall plan, which directly correlates to better and improved financial performance. And when a business plans better, it creates operational efficiencies that significantly reduce wastage.',
            'The integrated planning efficiencies delivered by o9 is helping corporations do more, be more and mean more, internally and to the world at large.',
          ]}
          bg={false}
        />
        <UserSubmission title={<strong>Take the first step to redefining your Sales & Operations Planning workflows</strong>} />
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

export default SalesOperationsPlanning
