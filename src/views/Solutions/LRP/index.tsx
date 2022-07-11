import section_09_left_icon from '../../../assets/image/section_09_left_icon.png'
import MasterPlanning_Sections_02 from '../../../assets/image/MasterPlanning_Sections_02.png'
import SupplyChainControlTowerLogo from '../../../assets/image/SupplyChainControlTower_logo@2x.png'
import BrounceArrow from '../../../components/BrounceArrow'
import SolutionSEcyion3s from '../../../components/Solutions/SolutionSEcyion3s/SolutionSEcyion3s'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import UserSubmission from '../../../components/Solutions/UserSubmission/UserSubmission'
import './index.less'
import { AOP_Ecyion3s_2 } from '../modules/AOP'

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
        titleRight={<BrounceArrow />}
      />
      <main>
        <SolutionSEcyion3s
          section_01_title="Set the cross-functional business goals "
          section_01_title2="with a unified view across the strategic planning horizon."
          section_01_span="Deploy the “Digital Market Knowledge” model from :o9. Bring together rich Market Data, Advanced Analytics and Integrated Planning capabilities. Transform unmanageable and uncertain revenue planning & budgeting processes. Drive growth based on facts and data."
          section_02_title="Top reasons organizations are upgrading"
          section_02_title2=" their long range planning (LRP) capabilities"
          section_02_spans={AOP_Ecyion3s_2}
          section_03_img={MasterPlanning_Sections_02}
          section_03_title=''
          section_03_spans={[]}
        />
        <UserSubmission
          title={
            <div>
              Looking for a <strong>long range planning </strong>solution to uncover growth opportunities?
            </div>
          }
        />
        <section className="section_09 text-rc20">
          <div className="mb-rc45 text-rc35">Related Solutions</div>
          <div className="flex flex-wrap">
            <div className="transition-all group RelatedSolutions_1 hover:bg-black hover:text-white flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30">
              <div className="w-rc100 h-full" />
              <div>Supply Chain Master Planning</div>
              <img
                className="transition-all opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
                src={section_09_left_icon}
                alt=""
              />
            </div>
            <div className="transition-all group RelatedSolutions_2 hover:bg-black hover:text-white flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30">
              <div className="w-rc100 h-full" />
              <div>Supply Chain Master Planning</div>
              <img
                className="transition-all opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
                src={section_09_left_icon}
                alt=""
              />
            </div>
            <div className="transition-all group RelatedSolutions_3 hover:bg-black hover:text-white flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30">
              <div className="w-rc100 h-full" />
              <div>Supply Chain Master Planning</div>
              <img
                className="transition-all opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
                src={section_09_left_icon}
                alt=""
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default LRP
