import MasterPlanning_Sections_02 from '../../../assets/image/MasterPlanning_Sections_02.png'
import SupplyChainControlTower_leftIcon from '../../../assets/image/SupplyChainControlTower_leftIcon.png'
import SupplyChainControlTowerLogo from '../../../assets/image/SupplyChainControlTower_logo@2x.png'
import SupplyChainControlTower_section_07 from '../../../assets/image/SupplyChainControlTower_section_07.png'
import SolutionsPlanMoudlu from '../../../components/Solutions/PlanMoudlu/SolutionsPlanMoudlu'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import TopReasons from '../../../components/Solutions/TopReasons/TopReasons'
import WpbRow from '../../../components/Solutions/WpbRow/WpbRow'
import { Topreasons_content, UseCases_content } from '../modules/SupplyChainControlTower'
import MoudulUseCase from '../../../components/Solutions/MoudulUseCase/MoudulUseCase'
import './index.less'
import UserSubmission from '../../../components/Solutions/UserSubmission/UserSubmission'

const MasterPlanning = () => {
  return (
    <div className="MasterPlanning">
      <SolutionsHeader
        borderColor="#000"
        headerClassName="pb-rc65"
        logoImg={SupplyChainControlTowerLogo}
        title={
          <div>
            <span className="font-bold">Real time visibility</span>
            <br /> & automated response at scale
          </div>
        }
      />
      <main>
        <section className="bg-black text-white section_01">
          <div className=" pl-rc_15 pr-rc_15 ml-_rc15 mr-_rc15">
            <div className="pl-rc35 pr-rc35 text-rc20">
              <div className="text-rc45">
                Provide real-time commitments, cost-to-serve and demand shaping guidance
                <span className="text-gray-999">to various demand scenarios to support an agile S&OP process.</span>
              </div>
              <div className="mt-rc40 mb-rc27 text-gray-999">
                Powered by a Digital “Supply Chain Knowledge Graph” model, with advanced data management, high
                performance demand/supply match solvers, rapid what-if scenario planning capabilities, :o9’s Supply
                Chain Master Planning makes your supply chain more agile and cost effective in responding to market
                demand
              </div>
            </div>
          </div>
        </section>
        <section className="text-black section_03">
          <div className=" pl-rc_15 pr-rc_15 ml-_rc15 mr-_rc15">
            <div className="pl-rc35 pr-rc35 text-rc20">
              <div className="text-rc45">
                Top reasons organizations are upgrading
                <span className="text-gray-999"> their Supply Chain Master Planning capabilities</span>
              </div>
              <div className="mt-rc40 mb-rc27 text-gray-999 grid grid-cols-4">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </section>
        <section className="pl-rc90 pr-rc90 relative section_02">
          <div className="absolute m-auto bg_2">
            <img src={MasterPlanning_Sections_02} alt="" />
          </div>
          <div className="flex pl-rc_8 pr-rc_8 text-rc17">
            <div className="w-1/2 mr-rc60">
              <div className="text-rc35 leading-rc43">Sustainability done better with the o9 platform</div>
              <div className="py-rc20">
                Our industry-leading software digitally transforms operations to address the end-to-end environmental,
                social, and governance footprint of your organization.
              </div>
              <div className="pt-rc20 border-t border-solid" style={{ borderColor: 'rgba(0,0,0,.12)' }}>
                Track, measure, and manage ESG metrics at every level of supplier through to the end customer. Gain the
                predictive intelligence and prescriptive decision recommendations that will help reduce your carbon
                footprint.
              </div>
            </div>
            <div className="flex-1 h-full bg-white p-rc40 text-rc24 mr-rc35">
              <div style={{ transform: 'translateY(-20%)' }}>
                <img className="w-rc200" src={MasterPlanning_Sections_02} alt="" />
              </div>
              <div className="-mt-rc30 mb-rc15">
                Sustainable supply chains can have significant benefits for your business.
              </div>
              <div className="bg-black text-white inline-block text-rc16 py-rc12 px-rc35 rounded-full">
                Read our white paper
              </div>
            </div>
          </div>
        </section>
        <TopReasons spans={Topreasons_content} />
        <MoudulUseCase spans={UseCases_content} />
        <SolutionsPlanMoudlu
          spans={[
            'An efficient and proactive supply chain makes our planet a more healthy place to live and your employees happier in their jobs.',
            'The Deloitte Control Tower can help reduce costly expediting by proactively sensing demand and supply changes and then recommending optimal transportation modes and flow paths that enable you to meet your customer service objectives without excessive CO2 emissions and suboptimal asset utilization.',
          ]}
        />
        <WpbRow
          img={SupplyChainControlTower_section_07}
          title="Video Example: Unplanned Maintenance"
          span1="The Deloitte Control Tower enables companies to Sense, Translate, Solve, Execute, and Learn using a robust AI enabled platform."
          span2="The Deloitte Control Tower utilizes advanced machine learning that enables superior supply chain results. It begins with “Sense” capabilities that detect internal as well as external demand and supply disruptions. It is followed by “Translate” capabilities which helps to highlight risks and determine the potential impact of the disruption."
          span3="Next, “Solve” capabilities provide decision support by prescribing resolutions to help mitigate the impact of the disruption. These capabilities are enabled with workflow execution orchestration that breaks down organizational silos to make informed decisions faster. Finally, the Control Tower “Learns” from past decisions and resolutions that have been taken and then adjusts future resolution protocols and recommendations for optimal performance."
        />
        <UserSubmission title="Get real time visibility. Leverage the Deloitte Digital Brain in your business." />
        <section className="section_09 text-rc20">
          <div className="mb-rc45 text-rc35">Related Solutions</div>
          <div className="flex flex-wrap">
            <div className="transition-all group RelatedSolutions_1 hover:bg-black hover:text-white flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30">
              <div className="w-rc100 h-full" />
              <div>Supply Chain Master Planning</div>
              <img
                className="transition-all opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
                src={SupplyChainControlTower_leftIcon}
                alt=""
              />
            </div>
            <div className="transition-all group RelatedSolutions_1 hover:bg-black hover:text-white flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30">
              <div className="w-rc100 h-full" />
              <div>Supply Chain Master Planning</div>
              <img
                className="transition-all opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
                src={SupplyChainControlTower_leftIcon}
                alt=""
              />
            </div>
            <div className="transition-all group RelatedSolutions_2 hover:bg-black hover:text-white flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30">
              <div className="w-rc100 h-full" />
              <div>Supply Chain Master Planning</div>
              <img
                className="transition-all opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
                src={SupplyChainControlTower_leftIcon}
                alt=""
              />
            </div>
            <div className="transition-all group RelatedSolutions_3 hover:bg-black hover:text-white flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30">
              <div className="w-rc100 h-full" />
              <div>Supply Chain Master Planning</div>
              <img
                className="transition-all opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
                src={SupplyChainControlTower_leftIcon}
                alt=""
              />
            </div>
            <div className="transition-all group RelatedSolutions_4 hover:bg-black hover:text-white flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30">
              <div className="w-rc100 h-full" />
              <div>Supply Chain Master Planning</div>
              <img
                className="transition-all opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
                src={SupplyChainControlTower_leftIcon}
                alt=""
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default MasterPlanning
