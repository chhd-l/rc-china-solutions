import SupplyChainControlTower_leftIcon from '../../../assets/image/SupplyChainControlTower_leftIcon.png'
import SupplyChainAnalytics_Ecyion3s_3_img from '../../../assets/image/SupplyChainAnalytics_Ecyion3s_3_img.png'
import SupplyChainControlTowerLogo from '../../../assets/image/SupplyChainControlTower_logo@2x.png'
import BounceArrow from '../../../components/BounceArrow'
import SolutionSEcyion3s from '../../../components/Solutions/SolutionSEcyion3s/SolutionSEcyion3s'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import UserSubmission from '../../../components/Solutions/UserSubmission/UserSubmission'
import { SupplyChainAnalytics_Ecyion3s_2, SupplyChainAnalytics_Ecyion3s_3 } from '../modules/SupplyChainAnalytics'
import WpbWrapper from '../../../components/Solutions/WpbWrapper/WpbWrapper'
import { Purple_footerIcons } from '../modules/footerIcons'

const SupplyChainAnalytics = () => {
  return (
    <div className="SupplyChainAnalytics">
      <SolutionsHeader
        TopDividerColor="border-black"
        headerTilte={<strong className="text-rc20">Supply Chain Analytics</strong>}
        titleBtn={<div></div>}
        headerClassName="pb-rc65"
        logoImg={SupplyChainControlTowerLogo}
        title={
          <div className="w-rc_120 -mt-rc90">
            Informed <span className="border-b-4 border-purple-900 border-solid inline-block">Supply</span> Chain<br/> Policies
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
          section_02_title2=" their Supply Chain Analytics capabilitiess"
          section_02_spans={SupplyChainAnalytics_Ecyion3s_2}
          section_03_img={SupplyChainAnalytics_Ecyion3s_3_img}
          section_03_title={
            <div>
              Use cases favored by our
              <br />
              clients
            </div>
          }
          section_03_spans={SupplyChainAnalytics_Ecyion3s_3}
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

export default SupplyChainAnalytics
