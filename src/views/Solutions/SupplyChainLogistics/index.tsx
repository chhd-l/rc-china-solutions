import SupplyChainControlTowerLogo from '../../../assets/image/SupplyChainControlTower_logo@2x.png'
import BrounceArrow from '../../../components/BounceArrow'
import { NectarButton } from '../../../components/common/NectarButton'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import './index.less'

const SupplyChainLogistics = () => {
  return (
    <div className="SupplyChainLogistics">
      <SolutionsHeader
        TopDividerColor="border-black"
        headerTilte={<strong className="text-rc20">Supply Chain Master Planning</strong>}
        titleBtn={
          <div className="flex items-center">
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
        title={<div className="w-rc_120 -mt-rc90">Delight customers at optimal costs and inventory.</div>}
        titleRight={<BrounceArrow />}
      />
      <section className="bg-black px-rc90 py-rc125 text-white">
        <div className="px-rc242 text-rc45">
          Use instant flow and constraints visibility across all merchandising desks.
        </div>
      </section>
      <section>
        <div className="flex">
          <div>Knowledge driven Supply Chain Digital Twin</div>
          <div>
            <div>
              Build an Enterprise Knowledge Graph, representing the end to end business processes. Create a common
              planning language to be used by all processes. Store all planning data, using rules and algorithms to turn
              data into enterprise knowledge. All based on a Digital Twin.
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SupplyChainLogistics
