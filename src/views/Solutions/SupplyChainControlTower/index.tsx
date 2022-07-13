import SupplyChainControlTower_bg_01 from '../../../assets/image/SupplyChainControlTower_bg_01.png'
import SupplyChainControlTower_bg_02 from '../../../assets/image/SupplyChainControlTower_bg_02.png'
import SupplyChainControlTower_leftIcon from '../../../assets/image/SupplyChainControlTower_leftIcon.png'
import SupplyChainControlTowerLogo from '../../../assets/image/SupplyChainControlTower_logo@2x.png'
import SupplyChainControlTower_Resources from '../../../assets/image/SupplyChainControlTower_Resources.png'
import SupplyChainControlTower_section_07 from '../../../assets/image/SupplyChainControlTower_section_07.png'
import SolutionsPlanMoudlu from '../../../components/Solutions/PlanMoudlu/SolutionsPlanMoudlu'
import Sections from '../../../components/Solutions/Sections/Sections'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import TopReasons from '../../../components/Solutions/TopReasons/TopReasons'
import WpbRow from '../../../components/Solutions/WpbRow/WpbRow'
import { section_03_content, Topreasons_content, UseCases_content } from '../modules/SupplyChainControlTower'
import MoudulUseCase from '../../../components/Solutions/MoudulUseCase/MoudulUseCase'
import UserSubmission from '../../../components/Solutions/UserSubmission/UserSubmission'
import WpbWrapper from '../../../components/Solutions/WpbWrapper/WpbWrapper'
import './index.less'
import { useNavigate } from 'react-router-dom'
import { Purple_footerIcons } from '../modules/footerIcons'

const SupplyChainControlTower = () => {
  const navigate = useNavigate()

  return (
    <div className="SupplyChainControlTower">
      <div>
      <SolutionsHeader
        borderColor="#000"
        headerTilte={<div className="text-rc28 font-bold">Supply Chain Control Tower Software</div>}
        logoImg={SupplyChainControlTowerLogo}
        headerTilteRight={
          <div>
            <span className="cursor-pointer" onClick={() => navigate('/solutions/supply-chain')}>Supply Chain Control Tower</span> —
            <span className="font-bold"> Supply Chain Control Tower</span>
          </div>
        }
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
            <div className="px-rc_15 mx-_rc15">
              <div className="px-rc35">
                <div className="relative bg_1">
                  <img src={SupplyChainControlTower_bg_01} alt="" />
                </div>
              </div>
            </div>
          }
          section_01_text1="Sense demand and supply changes across the network and respond in real time with optimal, automated decisions."
          section_01_text2="The Deloitte Supply Chain Control Tower leveraging its Digital “Supply Chain Knowledge Graph”, monitors demand and supply signals in real time, detects problems early and drives automated, demand and supply shaping decisions with intelligent evaluation of resolution options."
          section_02_video={SupplyChainControlTower_bg_02}
          section_02_text2="Disruptions and market volatility are increasing exponentially. Proactively manage risk and opportunities by sensing and managing demand and supply on an AI platform."
          section_02_text1="AI Powered Supply Chain Control Tower"
          section_02_text3="More and more data is becoming available. Real-time signals from supply chain disruptions and market opportunities should alert planners instantly. Leveraging the Deloitte AI scenario capabilities, solutions to these disruptions are presented and highlighted with lead-time and cost implications. The Deloitte Control Tower allows enterprises to connect and harmonize planning and execution seamlessly on a common AI platform."
        />
        <section className="section_03 text-white px-rc90 py-rc55">
          <div className="bg-black p-rc55">
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
        <WpbWrapper
          leftIcon={SupplyChainControlTower_leftIcon}
          footerClassName="Purple_Footer_hover"
          footerHover={Purple_footerIcons}
        />
      </main>
      </div>
    </div>
  )
}

export default SupplyChainControlTower
