import SupplyChainControlTowerLogo from '../../../assets/image/SupplyChainControlTower_logo@2x.png'
import BounceArrow from '../../../components/BounceArrow'
import blue_left_icon from '../../../assets/image/blue_left_icon@2x.png'
import { NectarButton } from '../../../components/common/NectarButton'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import { SupplyChainLogistics_content } from '../modules/SupplyChainLogistics'
import './index.less'
import Breadcrumbs from '../../../components/Solutions/Breadcrumbs/Breadcrumbs'

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
      <Breadcrumbs
        title="Use instant flow and constraints visibility across all merchandising desks."
        bodys={SupplyChainLogistics_content}
        footerTitle='Supply Chain & Logistics Solutions'
        footerP='Visualize the Future to Build Iteratively and Rapidly towards the vision. It is the practical way.'
        footerSpan='Departments: CRO, Sales, Marketing, Category Management, Finance'
        footerHover={['RelatedSolutions_1', 'RelatedSolutions_2']}
        footerHover_icon={blue_left_icon}
        footerClassName='Bule_Footer_hover'
      />
    </div>
  )
}

export default SupplyChainLogistics
