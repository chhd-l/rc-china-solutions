import SupplyChainControlTower_leftIcon from '../../../assets/image/SupplyChainControlTower_leftIcon.png'
import SupplyChainControlTowerLogo from '../../../assets/image/SupplyChainControlTower_logo@2x.png'
import BounceArrow from '../../../components/BounceArrow'
import SolutionSEcyion3s from '../../../components/Solutions/SolutionSEcyion3s/SolutionSEcyion3s'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import UserSubmission from '../../../components/Solutions/UserSubmission/UserSubmission'
import WpbWrapper from '../../../components/Solutions/WpbWrapper/WpbWrapper'
import { DigitalSupplierCollaboration_Ecyion3s_2, DigitalSupplierCollaboration_Ecyion3s_3 } from '../modules/DigitalSupplierCollaboration'
import { Purple_footerIcons } from '../modules/footerIcons'
import './index.less'

const DigitalSupplierCollaboration = () => {
  return (
    <div className="DigitalSupplierCollaboration">
      <SolutionsHeader
        TopDividerColor="border-black"
        headerTilte={<strong className="text-rc20">Digital Supplier Collaboration</strong>}
        titleBtn={<div></div>}
        headerClassName="pb-rc65"
        logoImg={SupplyChainControlTowerLogo}
        title={
          <div className="w-rc_120 -mt-rc90">
            Seamless coordination with<br/> supply chain partners
          </div>
        }
        titleRight={<BounceArrow />}
      />
      <main>
        <SolutionSEcyion3s
          section_01_title="Increase agility by bringing your suppliers and contract manufacturers"
          section_01_title2=" into your planning process with rich, secure collaboration workflows."
          section_01_span="The Deloitte Digital Supplier Collaboration solution makes it simple to bring all your suppliers into one collaborative process. These include processes around direct material inventory visibility, forecasts, orders and costs. This will help you drive early warnings, improvement actions and joint business plan reviews with the extended supplier network."
          section_02_title="Top reasons organizations are upgrading"
          section_02_title2=" their Digital Supplier Collaboration capabilities"
          section_02_spans={DigitalSupplierCollaboration_Ecyion3s_2}
          section_03_img={<div />}
          section_03_title={
            <div>
              Use cases favored by our
              <br />
              clients
            </div>
          }
          section_03_spans={DigitalSupplierCollaboration_Ecyion3s_3}
        />
        <UserSubmission title={<strong>Looking for a next-generation Digital Supplier Collaboration solution?</strong>} />
        <WpbWrapper
          leftIcon={SupplyChainControlTower_leftIcon}
          footerClassName="Purple_Footer_hover"
          footerHover={Purple_footerIcons}
        />
      </main>
    </div>
  )
}

export default DigitalSupplierCollaboration
