import section_09_left_icon from '../../../assets/image/section_09_left_icon.png'
import AOP_Ecyion3s_3_img from '../../../assets/image/AOP_Ecyion3s_3_img.png'
import SupplyChainControlTowerLogo from '../../../assets/image/SupplyChainControlTower_logo@2x.png'
import BounceArrow from '../../../components/BounceArrow'
import SolutionSEcyion3s from '../../../components/Solutions/SolutionSEcyion3s/SolutionSEcyion3s'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import UserSubmission from '../../../components/Solutions/UserSubmission/UserSubmission'
import { AOP_Ecyion3s_2, AOP_Ecyion3s_3 } from '../modules/AOP'
import WpbWrapper from '../../../components/Solutions/WpbWrapper/WpbWrapper'
import { Greed_footerIcons } from '../modules/footerIcons'
import { DrawLineLabel } from '../../../components/DrawLineLabel'

const AOP = () => {
  return (
    <div className="AOP">
      <SolutionsHeader
        TopDividerColor="border-black"
        headerTilte={<strong className="text-rc20">Annual Operating Plan (AOP) & Budgeting</strong>}
        titleBtn={<div></div>}
        headerClassName="pb-rc65"
        logoImg={SupplyChainControlTowerLogo}
        title={
          <div className="w-rc_120 w-rc_120 -mt-rc80 mb-rc60">
            Go <DrawLineLabel backGroundColor='rgb(0, 193, 120)'>beyond</DrawLineLabel> Financial Planning
          </div>
        }
        titleRight={<BounceArrow />}
      />
      <main>
        <SolutionSEcyion3s
          section_01_title="Set the cross-functional business goals "
          section_01_title2="with a unified view across the strategic planning horizon."
          section_01_span="Deploy the “Digital Market Knowledge” model from Deloitte. Bring together rich Market Data, Advanced Analytics and Integrated Planning capabilities. Transform unmanageable and uncertain revenue planning & budgeting processes. Drive growth based on facts and data."
          section_02_title="Top reasons organizations are upgrading"
          section_02_title2=" with an Operating Plan that captures strategic intent."
          section_02_spans={AOP_Ecyion3s_2}
          section_03_img={AOP_Ecyion3s_3_img}
          section_03_title={
            <div>
              Use cases favored by our
              <br />
              clients
            </div>
          }
          section_03_spans={AOP_Ecyion3s_3}
        />
        <UserSubmission
          title={
            <strong>
              Looking for a next-generation AOP and <span className="underline">budgeting</span>{' '}
              <span className="underline">solution</span>
            </strong>
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

export default AOP
