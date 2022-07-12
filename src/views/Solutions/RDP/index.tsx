import orange_left_icon from '../../../assets/image/orange_left_icon.png'
import SupplyChainControlTowerLogo from '../../../assets/image/SupplyChainControlTower_logo@2x.png'
import BounceArrow from '../../../components/BounceArrow'
import SolutionSEcyion3s from '../../../components/Solutions/SolutionSEcyion3s/SolutionSEcyion3s'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import UserSubmission from '../../../components/Solutions/UserSubmission/UserSubmission'
import WpbWrapper from '../../../components/Solutions/WpbWrapper/WpbWrapper'
import { RDP_Ecyion3s_2, RDP_Ecyion3s_3 } from '../modules/RDP'

const RDP = () => {
  return (
    <div className="RDP">
      <SolutionsHeader
        borderColor="#000"
        headerTilte={<strong className="text-rc20">Retail Demand Planning</strong>}
        logoImg={SupplyChainControlTowerLogo}
        titleRight={<BounceArrow />}
        title={
          <div className="w-rc_120 w-rc_120 -mt-rc80 mb-rc60">
            <span className="border-b-4 border-orange-900 border-solid inline-block">Evolve</span> beyond statistical forecasting
          </div>
        }
        titleBtn={<div></div>}
      />
      <main>
        <SolutionSEcyion3s
          section_01_title="Improve forecast accuracy, alignment and accountability. "
          section_01_title2="Build accurate forecasts using predictive analytics to forecast fashion, seasonal and long lifecycle products."
          section_01_span="Predict accurate demand to plan receipts and maintain optimal inventory levels. Use AI/ML driven forecasts to drive Merchandise, Assortment and Allocation planning. Adapt to recent trends, seasonality, stock positions, and promotions during In-season to, and reflect retailers’ unique demand drivers to maximize profitability."
          section_01_span2=''
          section_01_span3=''
          section_02_title="Top reasons organizations are upgrading"
          section_02_title2=" their Retail Demand Planning capabilities"
          section_02_spans={RDP_Ecyion3s_2}
          section_03_img={<div />}
          section_03_title={
            <div>
              Use cases favored by our
              <br />
              clients
            </div>
          }
          section_03_spans={RDP_Ecyion3s_3}
        />
        <UserSubmission
          title={
            <strong>
              Looking for a next-generation Retail Demand Planning solution?
            </strong>
          }
        />
        <WpbWrapper
          leftIcon={orange_left_icon}
          footerClassName="Orange_Footer_hover"
          footerHover={['RelatedSolutions_1', 'RelatedSolutions_2', 'RelatedSolutions_3', 'RelatedSolutions_4']}
        />
      </main>
    </div>
  )
}

export default RDP
