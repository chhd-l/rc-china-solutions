import SupplyChainControlTowerLogo from '../../../assets/image/SupplyChainControlTower_logo@2x.png'
import BounceArrow from '../../../components/BounceArrow'
import SupplyChainControlTower_leftIcon from '../../../assets/image/SupplyChainControlTower_leftIcon.png'
import { NectarButton } from '../../../components/common/NectarButton'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import './index.less'
import Breadcrumbs from '../../../components/Solutions/Breadcrumbs/Breadcrumbs'
import { SMS_bodys } from '../modules/SupplyChainManagementSolutions'

const SupplyChainManagementSolutions = () => {
  return (
    <div className="SupplyChainManagementSolutions">
      <SolutionsHeader
        TopDividerColor="border-black"
        headerTilte={<strong className="text-rc20">Supply Chain Management Solutions</strong>}
        headerTilteRight={<div className="text-rc14 text-white font-bold">Supply Chain Management</div>}
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
            Delight customers at <span className="border-b-4 border-purple-900 border-solid inline-block">optimal</span>{' '}
            costs and inventory.
          </div>
        }
        titleRight={<BounceArrow />}
      />
      <Breadcrumbs
        bodys={SMS_bodys}
        title={
          <div>
            Go from defense to offense with your Supply Chain.{' '}
            <span className="text-gray-999">
            Operational to tactical to strategic Supply Chain decisions with one Digital Twin. Simplify complexity.
            </span>
          </div>
        }
        img='https://o9solutions.com/wp-content/uploads/2020/07/SC-Hero-graph-1.svg'
        footerTitle="Revenue
        management
        solutions"
        footerP="Visualize the future to build iteratively and rapidly towards the vision. It is the practical way."
        footerSpan={
          <div>
            <strong>Departments: </strong>
            CRO, Sales, Marketing, Category Management, Finance
          </div>
        }
        footerHover={[
          'RelatedSolutions_1',
          'RelatedSolutions_2',
          'RelatedSolutions_3',
          'RelatedSolutions_4',
          'RelatedSolutions_5',
        ]}
        footerHover_icon={SupplyChainControlTower_leftIcon}
        footerClassName="Purple_Footer_hover_black"
      />
    </div>
  )
}

export default SupplyChainManagementSolutions
