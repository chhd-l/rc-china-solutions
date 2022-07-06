import DemandPlanning_section_01_bg from '../../../assets/image/DemandPlanning_section_01_bg.png'
import SupplyChainControlTower_bg_02 from '../../../assets/image/SupplyChainControlTower_bg_02.png'
import SupplyChainControlTower_UseCases_1 from '../../../assets/image/SupplyChainControlTower_UseCases_1.png'
import SupplyChainControlTower_section_07 from '../../../assets/image/SupplyChainControlTower_section_07.png'
import SupplyChainControlTower_leftIcon from '../../../assets/image/SupplyChainControlTower_leftIcon.png'
import SupplyChainControlTowerLogo from '../../../assets/image/SupplyChainControlTower_logo@2x.png'
import './index.less'
import { Topreasons_content, UseCases_content } from '../modules/SupplyChainControlTower'
import DividerLeft from '../../../components/DividerLeft'
import { Input, Select } from 'antd'
import SolutionsPlanMoudlu from '../../../components/Solutions/PlanMoudlu/SolutionsPlanMoudlu'
import TopReasons from '../../../components/Solutions/TopReasons/TopReasons'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import Sections from '../../../components/Solutions/Sections/Sections'

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
          section_02_video={SupplyChainControlTower_bg_02}
          section_02_text1="Drive significant bottom-line value"
          section_02_text2="By improving forecasts based on leading indicators while providing early visibility to risks and opportunities."
          section_02_text3="Scattered market visibility and spreadsheets make responding to market changes problematic. o9’s AI-powered, digital solution for demand planning features collaborative analytics, planning and continuous learning that helps your organization eliminate poorly made demand decisions."
        />
        <TopReasons spans={Topreasons_content} />
        <section className="section_05 bg-black text-white">
          <DividerLeft dividerColor="rgba(255, 255, 255, 0.2)">
            <h5 className="text-white">Use cases</h5>
          </DividerLeft>
          <div className="text-rc45 max-w-rc1000 leading-rc55 mt-rc20 mb-rc45">
            With the Deloitte Supply Chain Control tower our customers are able to
            <span className="text-gray-999">
              take fast, high quality decisions that mitigate risk and capture market opportunities.
            </span>
          </div>
          <div className="flex flex-wrap justify-between">
            {UseCases_content.map((item, idx) => (
              <div className="flex w-rc_47 text-rc17 mb-rc8 leading-rc32" key={idx}>
                <img className="mr-rc15 mt-rc10 h-rc22" src={SupplyChainControlTower_UseCases_1} alt="" />
                <div>
                  <span className="font-bold">{item.start}</span>
                  {item.span}
                </div>
              </div>
            ))}
          </div>
        </section>
        <SolutionsPlanMoudlu
          spans={[
            'An efficient and proactive supply chain makes our planet a more healthy place to live and your employees happier in their jobs.',
            'The Deloitte Control Tower can help reduce costly expediting by proactively sensing demand and supply changes and then recommending optimal transportation modes and flow paths that enable you to meet your customer service objectives without excessive CO2 emissions and suboptimal asset utilization.',
          ]}
        />
        <section className="section_07 bg-black text-rc17 text-white flex">
          <div className="w-rc517 mr-rc60">
            <img className="mb-rc24" src={SupplyChainControlTower_section_07} alt="" />
            <div className="text-center">Video Example: Unplanned Maintenance</div>
          </div>
          <div className="leading-rc32 pr-rc35 flex-1">
            <div className="text-rc35 leading-rc43 mb-rc45">
              The Deloitte Control Tower enables companies to Sense, Translate, Solve, Execute, and Learn using a robust
              AI enabled platform.
            </div>
            <div className="mb-rc27">
              The Deloitte Control Tower utilizes advanced machine learning that enables superior supply chain results.
              It begins with “Sense” capabilities that detect internal as well as external demand and supply
              disruptions. It is followed by “Translate” capabilities which helps to highlight risks and determine the
              potential impact of the disruption.
            </div>
            <div>
              Next, “Solve” capabilities provide decision support by prescribing resolutions to help mitigate the impact
              of the disruption. These capabilities are enabled with workflow execution orchestration that breaks down
              organizational silos to make informed decisions faster. Finally, the Control Tower “Learns” from past
              decisions and resolutions that have been taken and then adjusts future resolution protocols and
              recommendations for optimal performance.
            </div>
          </div>
        </section>
        <section className="section_08 flex">
          <div className="mr-rc60 flex-1 text-rc35 leading-rc43">
            Get real time visibility. Leverage the Deloitte Digital Brain in your business.
          </div>
          <div className="flex-1">
            <Input className="text-rc17 py-rc15" placeholder="(Company) Email" />
            <Input
              placeholder="___ ___ ___"
              className="text-rc17 inputPhont my-rc16"
              addonBefore={
                <Select defaultValue="http://" className="text-rc17 py-rc15">
                  <Select.Option value="http://">http://</Select.Option>
                  <Select.Option value="https://">https://</Select.Option>
                </Select>
              }
            />
            <div className="bg-green00c178 text-white text-rc17 flex justify-center items-center rounded-full py-rc15">
              Talk to an expert
            </div>
          </div>
        </section>
        <section className="section_09">
          <div className="mb-rc45 text-rc35">Related Solutions</div>
          <div className="flex flex-wrap">
            <div className="group RelatedSolutions_1 hover:bg-black hover:text-white flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30">
              <div className="w-rc100 h-full" />
              <div>Supply Chain Master Planning</div>
              <img
                className="transition-all opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
                src={SupplyChainControlTower_leftIcon}
                alt=""
              />
            </div>
            <div className="group RelatedSolutions_1 hover:bg-black hover:text-white flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30">
              <div className="w-rc100 h-full" />
              <div>Supply Chain Master Planning</div>
              <img
                className="transition-all opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
                src={SupplyChainControlTower_leftIcon}
                alt=""
              />
            </div>
            <div className="group RelatedSolutions_2 hover:bg-black hover:text-white flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30">
              <div className="w-rc100 h-full" />
              <div>Supply Chain Master Planning</div>
              <img
                className="transition-all opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
                src={SupplyChainControlTower_leftIcon}
                alt=""
              />
            </div>
            <div className="group RelatedSolutions_3 hover:bg-black hover:text-white flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30">
              <div className="w-rc100 h-full" />
              <div>Supply Chain Master Planning</div>
              <img
                className="transition-all opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
                src={SupplyChainControlTower_leftIcon}
                alt=""
              />
            </div>
            <div className="group RelatedSolutions_4 hover:bg-black hover:text-white flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30">
              <div className="w-rc100 h-full" />
              <div>Supply Chain Master Planning</div>
              <img
                className="opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
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

export default DemandPlanning
