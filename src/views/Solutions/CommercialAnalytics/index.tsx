import CommercialAnalytics_section_03_img from '../../../assets/image/CommercialAnalytics_section_03_img.png'
import DemandPlanning_leftIcon from '../../../assets/image/DemandPlanning_leftIcon.png'
import SupplyChainControlTowerLogo from '../../../assets/image/SupplyChainControlTower_logo@2x.png'
import SolutionSEcyion3s from '../../../components/Solutions/SolutionSEcyion3s/SolutionSEcyion3s'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import UserSubmission from '../../../components/Solutions/UserSubmission/UserSubmission'
import { CommercialAnalytics_Ecyion3s_2, CommercialAnalytics_Ecyion3s_3 } from '../modules/CommercialAnalytics'
import WpbWrapper from '../../../components/Solutions/WpbWrapper/WpbWrapper'

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
        <WpbWrapper
          leftIcon={DemandPlanning_leftIcon}
          footerClassName="Red_Footer_hover"
          footerHover={[
            'RelatedSolutions_1',
            'RelatedSolutions_2',
            'RelatedSolutions_3',
            'RelatedSolutions_4',
            'RelatedSolutions_5',
            'RelatedSolutions_6',
          ]}
        />
      </main>
    </div>
  )
}

export default CommercialAnalytics
