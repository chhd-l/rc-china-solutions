import orange_left_icon from '../../../assets/image/orange_left_icon.png'
import SupplyChainControlTowerLogo from '../../../assets/image/SupplyChainControlTower_logo@2x.png'
import BounceArrow from '../../../components/BounceArrow'
import { DrawLineLabel } from '../../../components/DrawLineLabel'
import SolutionSEcyion3s from '../../../components/Solutions/SolutionSEcyion3s/SolutionSEcyion3s'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import UserSubmission from '../../../components/Solutions/UserSubmission/UserSubmission'
import WpbWrapper from '../../../components/Solutions/WpbWrapper/WpbWrapper'
import { AssortmentPlanning_Ecyion3s_2, AssortmentPlanning_Ecyion3s_3 } from '../modules/AssortmentPlanning'
import { Orange_footerIcons } from '../modules/footerIcons'

const AssortmentPlanning = () => {
  return (
    <div className="AssortmentPlanning">
      <SolutionsHeader
        borderColor="#000"
        headerTilte={<strong className="text-rc20">Assortment Planning</strong>}
        logoImg={SupplyChainControlTowerLogo}
        titleRight={<BounceArrow />}
        title={
          <div className="w-rc_120 w-rc_120 -mt-rc80 mb-rc60">
            Assortments that <DrawLineLabel backGroundColor='rgb(255, 115, 17)'>grow</DrawLineLabel><br /> market share
          </div>
        }
        titleBtn={<div></div>}
      />
      <main>
        <SolutionSEcyion3s
          section_01_img='https://embed-ssl.wistia.com/deliveries/d4377278bdb848a3488a600822d7fcfb.webp?image_crop_resized=640x268'
          section_01_title="Build Assortments to develop optimal product mix for both Pre and In season."
          section_01_title2=""
          section_01_span={
            <div>
              Deploy AI/ML based algorithms to recommend assortment to maximize profits and minimize markdowns.
              <div className='mt-rc40 mb-rc27'>Build customized Assortments for targeted customer segments to achieve the product mix that maximizes profitability while maintaining optimum Inventory levels.</div>
              <div className='mt-rc40'>Simplify decision-making with ML and AI based analytics and highly visual user interface to review and analyze assortments.</div>
            </div>
          }
          section_02_title="Top reasons organizations are upgrading"
          section_02_title2=" their Assortment Planning capabilities"
          section_02_spans={AssortmentPlanning_Ecyion3s_2}
          section_03_img={<div />}
          section_03_title={
            <div>
              Use cases favored by our
              <br />
              clients
            </div>
          }
          section_03_spans={AssortmentPlanning_Ecyion3s_3}
        />
        <UserSubmission
          title={
            <strong>
              Looking for a next-generation Assortment Planning solution?
            </strong>
          }
        />
        <WpbWrapper
          leftIcon={orange_left_icon}
          footerClassName="Orange_Footer_hover"
          footerHover={Orange_footerIcons}
        />
      </main>
    </div>
  )
}

export default AssortmentPlanning
