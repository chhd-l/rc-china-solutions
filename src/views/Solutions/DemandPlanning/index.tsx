import { NectarButton } from '../../../components/common/NectarButton'
import SupplyChainControlTowerLogo from '../../../assets/image/SupplyChainControlTower_logo@2x.png'
import SupplyChainControlTower_bg_01 from '../../../assets/image/SupplyChainControlTower_bg_01.png'
import SupplyChainControlTower_bg_02 from '../../../assets/image/SupplyChainControlTower_bg_02.png'
import SupplyChainControlTower_Resources from '../../../assets/image/SupplyChainControlTower_Resources.png'
import './index.less'
import DividerLeft from '../../../components/DividerLeft'
import { section_03_content, Topreasons_content, UseCases_content } from '../modules/DemandPlanning'

const DemandPlanning = () => {
  return (
    <div className="SupplyChainControlTower">
      <header className="pb-rc132 pl-rc90 pr-rc90">
        <div className="flex items-center justify-between text-rc14 border-b border-gray-400 border-solid pb-rc14">
          <div className="text-rc28 font-bold">Demand Planning Software</div>
          <div>
            <span className="cursor-pointer">Revenue Management</span> —
            <span className="text-black font-bold"> Demand Planning</span>
          </div>
        </div>
        <div className="text-rc66 leading-rc1_2 headerTitle_1">
          <span className="font-bold text-black">AI/ML-powered</span>
          <br /> demand planning
        </div>
        <div className="mt-rc18 font-bold text-rc16 cursor-pointer">
          <span>——</span>
          <span className="ml-rc10">Why choose o9?</span>
          <NectarButton className="ml-rc25" color="#000" hoverBorderColor="red">
            Request a demo
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
        <section className="bg-black text-white px-rc90  section_01">
          <div className="  my-_rc15">
            <div className=" ">
              <div className="relative bg_1">
                <img src={SupplyChainControlTower_bg_01} alt="" />
              </div>
              <div className="text-rc45 mt-rc40 mb-rc40 px-rc_10">
                Improve forecast accuracy and sales adoption. Strengthen alignment of sales, product, supply chain and
                finance organizations.
              </div>
              <div className="text-rc20 px-rc_10">
                o9’s demand planning software is not just helping organizations predict demand better, it is also
                helping them sense, analyze, plan and shape demand to optimize both short-term and long-term sales and
                margin performance.
              </div>
            </div>
          </div>
        </section>
        <section className="pl-rc90 pr-rc90 relative section_02">
          <div className="bg-red-300 absolute m-auto bg_2">
            <img src={SupplyChainControlTower_bg_02} alt="" />
          </div>
          <div className="flex px-rc_8  text-rc17">
            <div className="px-rc35 flex-1 ">
              <div className="text-rc35">Drive significant bottom-line value</div>
              <div>
                By improving forecasts based on leading indicators while providing early visibility to risks and
                opportunities.
              </div>
            </div>
            <div className="border-t border-solid pt-rc20 dividon_02 flex-2">
              More and more data is becoming available. Real-time signals from supply chain disruptions and market
              opportunities should alert planners instantly. Leveraging the o9 AI scenario capabilities, solutions to
              these disruptions are presented and highlighted with lead-time and cost implications. The o9 Control Tower
              allows enterprises to connect and harmonize planning and execution seamlessly on a common AI platform.
            </div>
          </div>
        </section>
        <section className="section_04">
          <DividerLeft dividerColor="rgba(0, 0, 0, 0.2)">Top reasons</DividerLeft>
          <div className="text-rc35 mt-rc25 mb-rc45 tracking-rc5">Why customers choose o9</div>
          <div className="flex flex-wrap justify-between">
            {Topreasons_content.map((item, idx) => (
              <div className="w-rc_30 mb-rc25" key={idx}>
                <img className="w-rc32 mb-rc12" src={item.icon} alt="" />
                <p className="text-rc17 leading-rc32">
                  {item.span1}
                  <strong>{item.strong}</strong>
                  {item.span2}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="section_05 bg-black text-white">
          <DividerLeft dividerColor="rgba(255, 255, 255, 0.2)">
            <h5 className="text-white">Use cases</h5>
          </DividerLeft>
          <div className="text-rc45 max-w-rc1000 leading-rc55 mt-rc20 mb-rc45">
            o9’s demand planning software brings together
            <span className="text-gray-999">
              predictive analytics, assumptions visibility, collaboration, and post-game analytics.
            </span>
          </div>
          <div className="flex flex-wrap justify-between">
            {UseCases_content.map((item, idx) => (
              <div className="flex w-rc_47 text-rc17 mb-rc8 leading-rc32" key={idx}>
                <div className="pr-rc15">√</div>
                <p>
                  {/* <span className=" font-normal">{item.start}</span> */}
                  {item.span}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="section_06">
          <div className="max-w-rc800 m-auto text-white">
            <div className="text-rc45 leading-rc55">
              Plan better. Reduce waste. Create an efficient business for a better planet.
            </div>
            <div className="flex justify-between">
              <div className="w-rc_47">
                o9’s next-generation demand planning software capabilities are helping global enterprises improve
                forecast accuracy, which directly correlates to better plans and improved financial performance. And
                when a business plans better, it creates operational efficiencies that significantly reduce wastage.
              </div>
              <div className="w-rc_47">
                The o9 Control Tower can help reduce costly expediting by proactively sensing demand and supply changes
                and then recommending optimal transportation modes and flow paths that enable you to meet your customer
                service objectives without excessive CO2 emissions and suboptimal asset utilization.
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default DemandPlanning
