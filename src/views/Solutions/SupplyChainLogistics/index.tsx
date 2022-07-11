import SupplyChainControlTowerLogo from '../../../assets/image/SupplyChainControlTower_logo@2x.png'
import BounceArrow from '../../../components/BounceArrow'
import blue_left_icon from '../../../assets/image/blue_left_icon@2x.png'
import bule_1 from '../../../assets/image/bule_1@2x.png'
import bule_2 from '../../../assets/image/bule_2@2x.png'
import { NectarButton } from '../../../components/common/NectarButton'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import { SupplyChainLogistics_content } from '../modules/SupplyChainLogistics'
import './index.less'

const SupplyChainLogistics = () => {
  return (
    <div className="SupplyChainLogistics">
      <SolutionsHeader
        TopDividerColor="border-black"
        headerTilte={<strong className="text-rc20">Supply Chain & Logistics Management for Retail</strong>}
        headerTilteRight={<div className="text-rc14 text-white font-bold">Merchandising & Assortment Management</div>}
        titleBtn={
          <div className="flex items-center mt-rc35">
            <NectarButton className="ml-rc25" color="#000">
              Talk to an expert
            </NectarButton>
            <div className="text-rc16 flex items-center ml-rc30 titleBtnRight cursor-pointer overflow-hidden">
              <div className="herderIconBotm w-rc12 h-rc20" />
              <strong className="ml-rc8">Solutions</strong>
            </div>
          </div>
        }
        headerClassName="pb-rc65 bg-gray-100"
        logoImg={SupplyChainControlTowerLogo}
        title={
          <div className="w-rc_120 -mt-rc90">
            <span className="border-b-4 border-purple-900 border-solid inline-block">End-to-end</span> constraint-based
            planning across the complete supply chain.
          </div>
        }
        titleRight={<BounceArrow />}
      />
      <section className="bg-black px-rc90 py-rc125 text-white">
        <div className="px-rc242 text-rc45">
          Use instant flow and constraints visibility across all merchandising desks.
        </div>
      </section>
      <section>
        {SupplyChainLogistics_content.map((item, idx) => (
          <div key={idx} className={`flex px-rc90 py-rc150 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-300'}`}>
            <div className="text-rc35 font-bold leading-rc43 mr-rc60">{item.title}</div>
            <div>
              <div className="pt-rc30 border-t border-solid border-black text-rc17 leading-rc32 mb-rc25">
                {item.span}
              </div>
              <div>
                <img src={item.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="px-rc90 py-rc100 bg-black text-white">
        <div className="flex">
          <div className="text-rc35 leading-rc42 flex-1">Supply Chain & Logistics Solutions</div>
          <div className="text-rc17 leading-rc32 flex-1 border-t border-solid border-white">
            <div className="py-rc20">
              Visualize the Future to Build Iteratively and Rapidly towards the vision. It is the practical way.
            </div>
            <div>Departments: CRO, Sales, Marketing, Category Management, Finance</div>
          </div>
        </div>
        <div className="flex flex-wrap mt-rc74">
          <div className="transition-all group RelatedSolutions_1 hover:bg-black flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30">
            <img className="w-rc100 h-full" src={bule_1} alt="" />
            <div>Supply Chain Master Planning</div>
            <img
              className="transition-all opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
              src={blue_left_icon}
              alt=""
            />
          </div>
          <div className="transition-all group RelatedSolutions_2 hover:bg-black flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30">
            <img className="w-rc100 h-full" src={bule_2} alt="" />
            <div>Supply Chain Master Planning</div>
            <img
              className="transition-all opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
              src={blue_left_icon}
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default SupplyChainLogistics
