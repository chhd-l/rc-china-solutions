import MasterPlanning_Sections_02 from '../../../assets/image/MasterPlanning_Sections_02.png'
import SupplyChainControlTower_leftIcon from '../../../assets/image/SupplyChainControlTower_leftIcon.png'
import SupplyChainControlTowerLogo from '../../../assets/image/SupplyChainControlTower_logo@2x.png'
import BrounceArrow from '../../../components/BrounceArrow'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import UserSubmission from '../../../components/Solutions/UserSubmission/UserSubmission'
import { MasterPlanningsection_03, MasterPlanningUseCases } from '../modules/MasterPlanning'
import './index.less'

const MasterPlanning = () => {
  return (
    <div className="MasterPlanning">
      <SolutionsHeader
        TopDividerColor='border-black'
        headerTilte={<strong className="text-rc20">Supply Chain Master Planning</strong>}
        titleBtn={<div></div>}
        headerClassName="pb-rc65"
        logoImg={SupplyChainControlTowerLogo}
        title={
          <div className='w-rc_120 -mt-rc90'>
             Optimized Demand/Supply balancing across <span className='border-b-4 border-purple-900 border-solid inline-block'>end-to-end</span> Supply Chain
          </div>
        }
        titleRight={<BrounceArrow />}
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
        <section className="text-black section_03 bg-gray-e5e6e5">
          <div className="px-rc_10 mx-_rc10">
            <div className="text-rc17">
              <div className="text-rc45">
                Top reasons organizations are upgrading
                <span className="text-gray-999"> their Supply Chain Master Planning capabilities</span>
              </div>
              <div className="mt-rc40 mb-rc27 text-gray-999 grid grid-cols-4 gap-5">
                {MasterPlanningsection_03.map((item, idx) => (
                  <div className="border-t pt-rc20 border-solid border-black" key={idx}>
                    <strong>
                      {item.start}
                      <br />
                    </strong>
                    {item.span}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="section_02 bg-black text-white">
          <div className="m-auto bg_2">
            <img src={MasterPlanning_Sections_02} alt="" />
          </div>
          <div className="-mt-rc_10">
            <div className="text-rc45">
              Use cases favored by our
              <br />
              clients
            </div>
            <div className='grid grid-cols-2'>
              {MasterPlanningUseCases.map((item, idx) => (
                <div className='flex items-center mb-rc15'>
                  {/* <img className="mr-rc15 mt-rc10 h-rc22" src={SupplyChainControlTower_UseCases_1} alt="" /> */}
                  <div className="mr-rc15 w-rc10 h-rc10 bg-white rounded-full" />
                  <div>{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
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
