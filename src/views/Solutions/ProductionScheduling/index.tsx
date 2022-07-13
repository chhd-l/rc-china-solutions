import ProductionScheduling_header_bg from '../../../assets/image/ProductionScheduling_header_bg.png'
import logos_home_1_1 from '../../../assets/image/logos-home-1-1.png'
import SupplyChainControlTower_leftIcon from '../../../assets/image/SupplyChainControlTower_leftIcon.png'
import ProductionScheduling_section_02_img from '../../../assets/image/ProductionScheduling_section_02_img.png'
import MoudulUseCase from '../../../components/Solutions/MoudulUseCase/MoudulUseCase'
import SolutionsPlanMoudlu from '../../../components/Solutions/PlanMoudlu/SolutionsPlanMoudlu'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import TopReasons from '../../../components/Solutions/TopReasons/TopReasons'
import UserSubmission from '../../../components/Solutions/UserSubmission/UserSubmission'
import './index.less'
import { ProductionScheduling_case, ProductionScheduling_TRP } from '../modules/ProductionScheduling'
import WpbWrapper from '../../../components/Solutions/WpbWrapper/WpbWrapper'
import { useNavigate } from 'react-router-dom'

const ProductionScheduling = () => {
  const navigate = useNavigate()

  return (
    <div className="ProductionScheduling">
      <SolutionsHeader
        borderColor="#fff"
        headerClassName="text-white"
        headerTilte={<div className="text-rc28 font-bold">Production Scheduling</div>}
        
        TopDividerColor="border-gray-999"
        headerTilteRight={
          <div>
            <span className="cursor-pointer" onClick={() => navigate('/solutions/supply-chain')}>Supply Chain Management </span> —
            <span className="font-bold"> Production Scheduling</span>
          </div>
        }
        headBg={ProductionScheduling_header_bg}
        logoImg={logos_home_1_1}
        footerColor="#fff"
        footerDiviDerColor="rgba(255,255,255,.5)"
        title={
          <div className="text-rc45 whitespace-nowrap">
            Real time visibility<br />
            <strong>& automated response at scale</strong>
          </div>
        }
      />
      <main>
        <section className="bg-black text-white section_01 pt-rc150 px-rc90 pb-rc415">
          <div className="px-rc_15 mx-_rc15">
            <div className="px-rc35">
              <div className="text-rc45 mb-rc40 leading-rc55">
                Deloitte combines the best innovations in production planning and detailed scheduling
              </div>
              <div className="text-rc20 flex">
                <div className="flex-1">
                  With the benefits of a single integrated end-to-end planning platform, with a natively integrated
                  scheduling UI in Deloitte’s end-to-end Planning framework to avoid silos in process and data
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section_02 px-rc90 pb-rc354 relative">
          <div className="m-auto bg_2 absolute">
            <img src={ProductionScheduling_section_02_img} alt="" />
          </div>
        </section>
        <TopReasons
          spans={ProductionScheduling_TRP}
        />
        <MoudulUseCase
          title="With our Deloitte natively integrated Production Planning and Detailed Scheduling Solutions, "
          span="our customers are able to achieve near real-time production scheduling and sequencing for complex operations."
          spans={ProductionScheduling_case}
        />
        <SolutionsPlanMoudlu
          spans={[
            'Deloitte’s next-generation production scheduling software capabilities are helping global enterprises improve planning accuracy, which leads to better plans and improved financial performance. And when a business plans better, it creates operational efficiencies that significantly reduce wastage.',
            'The integrated planning efficiencies delivered by Deloitte is helping corporations do more, be more and mean more, internally and to the world at large.',
          ]}
          title='Take the first step to natively integrate production scheduling
          into your planning workflows'
        />
        <UserSubmission
          title={<strong>Get real time visibility. Leverage the Deloitte Digital Brain in your business.</strong>}
        />
        <WpbWrapper
          leftIcon={SupplyChainControlTower_leftIcon}
          footerClassName="Purple_Footer_hover"
          footerHover={[
            'RelatedSolutions_1',
            'RelatedSolutions_2',
            'RelatedSolutions_3',
            'RelatedSolutions_4',
            'RelatedSolutions_5',
          ]}
        />
      </main>
    </div>
  )
}

export default ProductionScheduling
