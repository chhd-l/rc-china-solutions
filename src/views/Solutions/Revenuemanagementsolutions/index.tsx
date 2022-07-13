import SupplyChainControlTowerLogo from '../../../assets/image/SupplyChainControlTower_logo@2x.png'
import BounceArrow from '../../../components/BounceArrow'
import DemandPlanning_leftIcon from '../../../assets/image/DemandPlanning_leftIcon.png'
import Revenuemanagementsolutions_Breadcrumbs_img from '../../../assets/image/Revenuemanagementsolutions_Breadcrumbs_img.svg'
import { NectarButton } from '../../../components/common/NectarButton'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import './index.less'
import Breadcrumbs from '../../../components/Solutions/Breadcrumbs/Breadcrumbs'
import { Revenuemanagementsolutions_bodys } from '../modules/Revenuemanagementsolutions'

const Revenuemanagementsolutions = () => {
  return (
    <div className="Revenuemanagementsolutions">
      <SolutionsHeader
        TopDividerColor="border-black"
        headerTilte={<strong className="text-rc20">Revenue management solutions</strong>}
        headerTilteRight={<div className="text-rc14 text-white font-bold">Revenue Management</div>}
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
            Transform your offense to <span className="border-b-4 border-red-300 border-solid inline-block">drive</span>{' '}
            <span className="border-b-4 border-red-300 border-solid inline-block">revenue</span>{' '}
            <span className="border-b-4 border-red-300 border-solid inline-block">growth</span> and hit the plan.
          </div>
        }
        titleRight={<BounceArrow />}
      />
      <Breadcrumbs
        bodys={Revenuemanagementsolutions_bodys}
        title={
          <div>
            Revenue & Commercial Planning{' '}
            <span className="text-gray-999">
              to sense, analyze and shape activities to optimize your revenue potential.
            </span>
          </div>
        }
        img={Revenuemanagementsolutions_Breadcrumbs_img}
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
          'RelatedSolutions_6',
        ]}
        footerHover_icon={DemandPlanning_leftIcon}
        footerClassName="Red_Footer_hover_black"
      />
    </div>
  )
}

export default Revenuemanagementsolutions
