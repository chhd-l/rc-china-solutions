import { useNavigate } from 'react-router-dom'
import orange_left_icon from '../../../assets/image/orange_left_icon.png'
import SupplyChainControlTowerLogo from '../../../assets/image/SupplyChainControlTower_logo@2x.png'
import BounceArrow from '../../../components/BounceArrow'
import SolutionSEcyion3s from '../../../components/Solutions/SolutionSEcyion3s/SolutionSEcyion3s'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import UserSubmission from '../../../components/Solutions/UserSubmission/UserSubmission'
import WpbWrapper from '../../../components/Solutions/WpbWrapper/WpbWrapper'
import { Red_footerIcons } from '../modules/footerIcons'
import { RetailAnalytics_Ecyion3s_2, RetailAnalytics_Ecyion3s_3 } from '../modules/RetailAnalytics'

const RetailAnalytics = () => {
  const navigate = useNavigate()

  return (
    <div className="RetailAnalytics">
      <SolutionsHeader
        borderColor="#000"
        headerTilte={<strong className="text-rc20">Retail Analytics</strong>}
        logoImg={SupplyChainControlTowerLogo}
        titleRight={<BounceArrow />}
        title={
          <div className="w-rc_120 w-rc_120 -mt-rc80 mb-rc60">
            Develop <span className="border-b-4 border-orange-900 border-solid inline-block">unprecedented</span>{' '}
            insights tied to plans
          </div>
        }
        titleBtn={<div></div>}
      />
      <main>
        <SolutionSEcyion3s
          section_01_title="Transform retail planning with AI and M/L "
          section_01_title2="powered analytics to improve alignment of plans to business strategies and market 
          needs."
          section_01_span={
            <div className='text-white'>
              Leverage embedded retail analytics to drive improvements to retail planning processes such as{' '}
              <span className='text-gray-999 cursor-pointer transition-colors duration-300 hover:text-white' onClick={() => navigate('/solutions/merchandise-financial-planning')}>merchandise financial planning.</span> Incorporate insights into market size, share and trends,{' '}
              <span className='text-gray-999 cursor-pointer transition-colors duration-300 hover:text-white' onClick={() => navigate('/solutions/assortment-planning')}>assortment</span> and buying towards better localization and competitive positioning. Pricing and
              promotion planning with improving ASP and promotional effectiveness. Allocation and{' '}
              <span className='text-gray-999 cursor-pointer transition-colors duration-300 hover:text-white' onClick={() => navigate('/solutions/replenishment-flow-planning')}>replenishment planning</span> by improve in-stock and forecast accuracy.
            </div>
          }
          section_02_title="Top reasons organizations are upgrading"
          section_02_title2=" their retail analytics capabilities"
          section_02_spans={RetailAnalytics_Ecyion3s_2}
          section_03_img={<div />}
          section_03_title={
            <div>
              Use cases favored by our
              <br />
              clients
            </div>
          }
          section_03_spans={RetailAnalytics_Ecyion3s_3}
        />
        <UserSubmission
          title={<strong>Looking for retail analytics solution to get unprecedented insights tied to plan?</strong>}
        />
        <WpbWrapper
          leftIcon={orange_left_icon}
          footerClassName="Red_Footer_hover"
          footerHover={Red_footerIcons}
        />
      </main>
    </div>
  )
}

export default RetailAnalytics
