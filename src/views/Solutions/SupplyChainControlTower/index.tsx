import { NectarButton } from '../../../components/common/NectarButton'
import SupplyChainControlTowerLogo from '../../../assets/image/SupplyChainControlTower_logo@2x.png'
import SupplyChainControlTower_bg_01 from '../../../assets/image/SupplyChainControlTower_bg_01.png'
import SupplyChainControlTower_bg_02 from '../../../assets/image/SupplyChainControlTower_bg_02.png'
import SupplyChainControlTower_Resources from '../../../assets/image/SupplyChainControlTower_Resources.png'
import './index.less'
import { section_03_content, Topreasons_content } from '../modules/SupplyChainControlTower'
import DividerLeft from '../../../components/DividerLeft'

const SupplyChainControlTower = () => {
  return (
    <div className="SupplyChainControlTower">
      <header className="pb-rc132 pl-rc90 pr-rc90">
        <div className="flex items-center justify-between text-rc14 border-b border-gray-400 border-solid pb-rc14">
          <div className="text-rc28 font-bold">Supply Chain Control Tower Software</div>
          <div>
            <span className="cursor-pointer">Supply Chain Control Tower</span> —
            <span className="text-black font-bold"> Supply Chain Control Tower</span>
          </div>
        </div>
        <div className="text-rc66 leading-rc1_2 headerTitle_1">
          <span className="font-bold text-black">Real time visibility</span>
          <br /> & automated response at scale
        </div>
        <div className="mt-rc18 font-bold text-rc16 cursor-pointer">
          <span>——</span>
          <span className="ml-rc10">Why choose o9?</span>
          <NectarButton className="ml-rc25" color="#000" hoverBorderColor="red">
            Talk to an expert
          </NectarButton>
        </div>
        <div>
          <img className="mt-rc65" src={SupplyChainControlTowerLogo} alt="" />
          <div className="border border-solid mt-rc15 mb-rc10 dividon_01" />
          <div className="text-rc14" style={{ color: '#999' }}>
            Trusted by leaders across industry verticals.
          </div>
        </div>
      </header>
      <main>
        <section className="bg-black text-white pl-rc90 pr-rc90 section_01">
          <div className=" pl-rc_15 pr-rc_15 ml-_rc15 mr-_rc15">
            <div className="pl-rc35 pr-rc35">
              <div className="relative bg_1">
                <img src={SupplyChainControlTower_bg_01} alt="" />
              </div>
              <div className="text-rc45 mt-rc40 mb-rc40">
                Sense demand and supply changes across the network and respond in real time with optimal, automated
                decisions.
              </div>
              <div className="text-rc20">
                The o9 Supply Chain Control Tower leveraging its Digital “Supply Chain Knowledge Graph”, monitors demand
                and supply signals in real time, detects problems early and drives automated, demand and supply shaping
                decisions with intelligent evaluation of resolution options.
              </div>
            </div>
          </div>
        </section>
        <section className="pl-rc90 pr-rc90 relative section_02">
          <div className="bg-red-300 absolute m-auto bg_2">
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
              opportunities should alert planners instantly. Leveraging the o9 AI scenario capabilities, solutions to
              these disruptions are presented and highlighted with lead-time and cost implications. The o9 Control Tower
              allows enterprises to connect and harmonize planning and execution seamlessly on a common AI platform.
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
        <section className="section_04">
          <DividerLeft SubBox={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>Top reasons</DividerLeft>
          <div className="text-rc35 mt-rc25 mb-rc45 tracking-rc5">Why customers choose o9</div>
          <div className="flex flex-wrap justify-between">
            {Topreasons_content.map((item, idx) => (
              <div className="w-rc_30 mb-rc25" key={idx}>
                <img className="w-rc32 mb-rc12" src={item.icon} alt="" />
                <p className="text-rc17 leading-rc32">
                  {item.span1}
                  <strong>{item.strong}</strong>
                  {item.span2}
                  <strong>{item?.strong2}</strong>
                  {item?.span3}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="section_05 bg-black text-white">
          <DividerLeft SubBox={{backgroundColor: 'rgba(255, 255, 255, 0.2)'}}>Use cases</DividerLeft>
          <div className='text-rc45 max-w-rc1000 leading-rc55'>
           With the o9 Supply Chain Control tower our customers are able to 
            <span className='text-gray-999'>take fast, high quality decisions that mitigate risk and capture market opportunities.</span>
          </div>
        </section>
      </main>
    </div>
  )
}

export default SupplyChainControlTower
