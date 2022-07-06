import SupplyChainControlTower_bg_01 from '../../../assets/image/SupplyChainControlTower_bg_01.png'
import SupplyChainControlTower_bg_02 from '../../../assets/image/SupplyChainControlTower_bg_02.png'
import SupplyChainControlTower_Resources from '../../../assets/image/SupplyChainControlTower_Resources.png'
import SupplyChainControlTower_UseCases_1 from '../../../assets/image/SupplyChainControlTower_UseCases_1.png'
import SupplyChainControlTower_section_07 from '../../../assets/image/SupplyChainControlTower_section_07.png'
import SupplyChainControlTower_leftIcon from '../../../assets/image/SupplyChainControlTower_leftIcon.png'
import SupplyChainControlTowerLogo from '../../../assets/image/SupplyChainControlTower_logo@2x.png'
import './index.less'
import { section_03_content, Topreasons_content, UseCases_content } from '../modules/SupplyChainControlTower'
import DividerLeft from '../../../components/DividerLeft'
import { Input, Select } from 'antd'
import SolutionsPlanMoudlu from '../../../components/Solutions/PlanMoudlu/SolutionsPlanMoudlu'
import TopReasons from '../../../components/Solutions/TopReasons/TopReasons'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'

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
        <section className="bg-black text-white section_01">
          <div className="px-rc_15 mx-_rc15">
            <div className="px-rc35">
              <div className="relative bg_1">
                <img src={SupplyChainControlTower_bg_01} alt="" />
              </div>
              <div className="text-rc45 mb-rc40">
                Sense demand and supply changes across the network and respond in real time with optimal, automated
                decisions.
              </div>
              <div className="text-rc20">
                The Deloitte Supply Chain Control Tower leveraging its Digital “Supply Chain Knowledge Graph”, monitors
                demand and supply signals in real time, detects problems early and drives automated, demand and supply
                shaping decisions with intelligent evaluation of resolution options.
              </div>
            </div>
          </div>
        </section>
        <section className="relative section_02">
          <div className="absolute m-auto bg_2">
            <img src={SupplyChainControlTower_bg_02} alt="" />
          </div>
          <div className="flex pl-rc_8 pr-rc_8 text-rc17">
            <div className="pl-rc35 pr-rc35">
              <div className="text-rc35">AI Powered Supply Chain Control Tower</div>
              <div>
                Disruptions and market volatility are increasing exponentially. Proactively manage risk and
                opportunities by sensing and managing demand and supply on an AI platform.
              </div>
            </div>
            <div className="border-t border-solid pt-rc20 dividon_02">
              More and more data is becoming available. Real-time signals from supply chain disruptions and market
              opportunities should alert planners instantly. Leveraging the Deloitte AI scenario capabilities, solutions
              to these disruptions are presented and highlighted with lead-time and cost implications. The Deloitte
              Control Tower allows enterprises to connect and harmonize planning and execution seamlessly on a common AI
              platform.
            </div>
          </div>
        </section>
        <section className="section_03 text-white">
          <div className="bg-black">
            <div className="flex justify-between Resources mb-rc24">
              <div>
                <div className="flex items-center text-rc18 mb-rc30">
                  <span className="w-rc8 h-rc8 bg-blue-400 mr-rc15" /> Resources
                </div>
                <div className="text-rc35 leading-rc42">
                  View our related <span className="font-bold">white papers and use cases.</span>
                </div>
              </div>
              <div className="flex-1 flex">
                {section_03_content.map((item, idx) => (
                  <div
                    key={idx}
                    className={`${idx === 1 && 'ml-rc10 mr-rc10'} bg-gray-2a2a2a h-rc300 flex flex-col justify-between`}
                  >
                    <img src={item.img} alt="" />
                    <div className="flex-1 p-rc20 text-rc16">{item.span}</div>
                    <div className="ResourceBtn text-rc14 flex items-center cursor-pointer">
                      <img className="w-rc11 mr-rc5" src={SupplyChainControlTower_Resources} alt="" /> View Resource
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end items-center">
              <div className="text-rc16 pb-rc4 cursor-pointer Allrelatedresources">All related resources</div>
            </div>
          </div>
        </section>
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
