import SupplyChainControlTowerLogo from '../../../assets/image/SupplyChainControlTower_logo@2x.png'
import BounceArrow from '../../../components/BounceArrow'
import orange_left_icon from '../../../assets/image/orange_left_icon.png'
import { NectarButton } from '../../../components/common/NectarButton'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import './index.less'
import Breadcrumbs from '../../../components/Solutions/Breadcrumbs/Breadcrumbs'
import { MAM_bodys } from '../modules/MAM'

const MAM = () => {
  return (
    <div className="MAM">
      <SolutionsHeader
        TopDividerColor="border-black"
        headerTilte={<strong className="text-rc20">Merchandise & Assortment Management</strong>}
        headerTilteRight={<div className="text-rc14 text-white font-bold">Merchandising & Assortment Management</div>}
        titleBtn={
          <div className="flex items-center mt-rc35">
            <NectarButton onClick={() => {
              let anchorElement = document.getElementById('capabilities')
              if (anchorElement) {
                anchorElement.scrollIntoView({ inline: 'start', block: 'start', behavior: 'smooth' })
              }
            }} className="ml-rc25" color="#000">
              Talk to an expert
            </NectarButton>
            <div onClick={() => {
                  let anchorElement = document.getElementById('solutions')
                  if (anchorElement) {
                    anchorElement.scrollIntoView({ inline: 'start', block: 'start', behavior: 'smooth' })
                  }
            }} className="text-rc16 flex items-center ml-rc30 titleBtnRight cursor-pointer overflow-hidden">
              <div className="herderIconBotm w-rc12 h-rc20" />
              <strong className="ml-rc8">Solutions</strong>
            </div>
          </div>
        }
        headerClassName="pb-rc65 bg-gray-100"
        logoImg={SupplyChainControlTowerLogo}
        title={
          <div className="w-rc_120 -mt-rc90">
            Build and manage customer-centric{' '}
            <span className="border-b-4 border-orange-900 border-solid inline-block">merchandising</span> plans.
          </div>
        }
        titleRight={<BounceArrow />}
      />
      <Breadcrumbs
        bodys={MAM_bodys}
        title={
          <div>
            Improve alignment with strategic mix and assortment goals.
          </div>
        }
        img="https://Deloittesolutions.com/wp-content/uploads/2020/07/M-Hero-graph.svg"
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
        ]}
        footerHover_icon={orange_left_icon}
        footerClassName="Orange_Footer_hover_black"
      />
    </div>
  )
}

export default MAM
