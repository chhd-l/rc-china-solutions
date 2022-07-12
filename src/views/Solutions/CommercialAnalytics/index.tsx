import CommercialAnalytics_section_03_img from '../../../assets/image/CommercialAnalytics_section_03_img.png'
import DemandPlanning_leftIcon from '../../../assets/image/DemandPlanning_leftIcon.png'
import SupplyChainControlTowerLogo from '../../../assets/image/SupplyChainControlTower_logo@2x.png'
import SolutionSEcyion3s from '../../../components/Solutions/SolutionSEcyion3s/SolutionSEcyion3s'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import UserSubmission from '../../../components/Solutions/UserSubmission/UserSubmission'
import './index.less'
import { CommercialAnalytics_Ecyion3s_2, CommercialAnalytics_Ecyion3s_3 } from '../modules/CommercialAnalytics'

const CommercialAnalytics = () => {
  return (
    <div className="CommercialAnalytics">
      <SolutionsHeader
        TopDividerColor="border-black"
        headerTilte={<strong className="text-rc20">Commercial Analytics</strong>}
        titleBtn={<div></div>}
        headerClassName="pb-rc65"
        logoImg={SupplyChainControlTowerLogo}
        title={
          <div className="w-rc_120 -mt-rc90">
            Strengthen <br />
            <span className="border-b-4 border-red-300 border-solid inline-block">intuition backed by data</span>
          </div>
        }
        titleRight={<div />}
      />
      <main>
        <SolutionSEcyion3s
          section_01_title="Use Advanced Analytics to improve ROI"
          section_01_title2=" and effectiveness of commercial 
          initiatives and spend."
          section_01_span="Leverage Deloitte’s “Market and Demand Knowledge Graph” model and advanced AI/ML algorithms. Create predictive and prescriptive insights to guide Product Assortment, Pricing, Promotion, Distribution Investments and Initiatives to optimize Revenue and Margin."
          section_02_title="Top reasons organizations are upgrading "
          section_02_title2=" their revenue planning capabilities"
          section_02_spans={CommercialAnalytics_Ecyion3s_2}
          section_03_img={CommercialAnalytics_section_03_img}
          section_03_title={
            <div>
              Use cases favored by our
              <br />
              clients
            </div>
          }
          section_03_spans={CommercialAnalytics_Ecyion3s_3}
        />
        <UserSubmission title="Looking for a commercial analytics solution that can back your intuition with data?" />
        <section className="section_09 text-rc20">
          <div className="mb-rc45 text-rc35">Related Solutions</div>
          <div className="flex flex-wrap">
            <div className="transition-all group RelatedSolutions_1 hover:bg-black hover:text-white flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30">
              <div className="w-rc100 h-full" />
              <div>Supply Chain Master Planning</div>
              <img
                className="transition-all opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
                src={DemandPlanning_leftIcon}
                alt=""
              />
            </div>
            <div className="transition-all group RelatedSolutions_2 hover:bg-black hover:text-white flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30">
              <div className="w-rc100 h-full" />
              <div>Supply Chain Master Planning</div>
              <img
                className="transition-all opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
                src={DemandPlanning_leftIcon}
                alt=""
              />
            </div>
            <div className="transition-all group RelatedSolutions_3 hover:bg-black hover:text-white flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30">
              <div className="w-rc100 h-full" />
              <div>Supply Chain Master Planning</div>
              <img
                className="transition-all opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
                src={DemandPlanning_leftIcon}
                alt=""
              />
            </div>
            <div className="transition-all group RelatedSolutions_4 hover:bg-black hover:text-white flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30">
              <div className="w-rc100 h-full" />
              <div>Supply Chain Master Planning</div>
              <img
                className="transition-all opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
                src={DemandPlanning_leftIcon}
                alt=""
              />
            </div>
            <div className="transition-all group RelatedSolutions_5 hover:bg-black hover:text-white flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30">
              <div className="w-rc100 h-full" />
              <div>Supply Chain Master Planning</div>
              <img
                className="opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
                src={DemandPlanning_leftIcon}
                alt=""
              />
            </div>
            <div className="transition-all group RelatedSolutions_6 hover:bg-black hover:text-white flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30">
              <div className="w-rc100 h-full" />
              <div>Supply Chain Master Planning</div>
              <img
                className="opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
                src={DemandPlanning_leftIcon}
                alt=""
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default CommercialAnalytics
