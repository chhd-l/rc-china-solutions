import MasterPlanning_Sections_02 from '../../../assets/image/MasterPlanning_Sections_02.png'
import section_09_left_icon from '../../../assets/image/section_09_left_icon.png'
import SupplyChainControlTowerLogo from '../../../assets/image/SupplyChainControlTower_logo@2x.png'
import BounceArrow from '../../../components/BounceArrow'
import SolutionSEcyion3s from '../../../components/Solutions/SolutionSEcyion3s/SolutionSEcyion3s'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import UserSubmission from '../../../components/Solutions/UserSubmission/UserSubmission'
import WpbWrapper from '../../../components/Solutions/WpbWrapper/WpbWrapper'
import { Greed_footerIcons } from '../modules/footerIcons'
import { LRP_Ecyion3s_2 } from '../modules/LRP'

const LRP = () => {
  return (
    <div className="LRP">
      <SolutionsHeader
        TopDividerColor="border-black"
        headerTilte={<strong className="text-rc20">Long Range Planning (LRP)</strong>}
        titleBtn={<div></div>}
        headerClassName="pb-rc65"
        logoImg={SupplyChainControlTowerLogo}
        title={<div className="w-rc_120 -mt-rc80 mb-rc60">Uncover Growth Opportunities.</div>}
        titleRight={<BounceArrow />}
      />
      <main>
        <SolutionSEcyion3s
          section_01_title="Set the cross-functional business goals "
          section_01_title2="with a unified view across the strategic planning horizon."
          section_01_span="Deploy the “Digital Market Knowledge” model from Deloitte. Bring together rich Market Data, Advanced Analytics and Integrated Planning capabilities. Transform unmanageable and uncertain revenue planning & budgeting processes. Drive growth based on facts and data."
          section_02_title="Top reasons organizations are upgrading"
          section_02_title2=" their long range planning (LRP) capabilities"
          section_02_spans={LRP_Ecyion3s_2}
          section_03_img={MasterPlanning_Sections_02}
          section_03_title=""
          section_03_spans={[]}
        />
        <UserSubmission
          title={
            <div>
              Looking for a <strong>long range planning </strong>solution to uncover growth opportunities?
            </div>
          }
        />
        <WpbWrapper
          leftIcon={section_09_left_icon}
          footerClassName="Greed_Footer_hover"
          footerHover={Greed_footerIcons}
        />
      </main>
    </div>
  )
}

export default LRP
