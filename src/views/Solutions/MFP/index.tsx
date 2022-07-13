import orange_left_icon from '../../../assets/image/orange_left_icon.png'
import AOP_Ecyion3s_3_img from '../../../assets/image/AOP_Ecyion3s_3_img.png'
import logos_home_1_1 from '../../../assets/image/logos-home-1-1.png'
import MFP_header_bg from '../../../assets/image/MFP_header_bg.png'
import BounceArrow from '../../../components/BounceArrow'
import SolutionSEcyion3s from '../../../components/Solutions/SolutionSEcyion3s/SolutionSEcyion3s'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import UserSubmission from '../../../components/Solutions/UserSubmission/UserSubmission'
import WpbWrapper from '../../../components/Solutions/WpbWrapper/WpbWrapper'
import { MFP_Ecyion3s_2, MFP_Ecyion3s_3 } from '../modules/MFP'
import { useNavigate } from 'react-router-dom'
import { Orange_footerIcons } from '../modules/footerIcons'

const MFP = () => {
  const navigate = useNavigate()

  return (
    <div className="MFP">
      <SolutionsHeader
        headerTilte={<strong className="text-rc20">Merchandise Financial Planning</strong>}
        titleBtn={<div></div>}
        headBg={MFP_header_bg}
        footerColor="#fff"
        hiderMask={true}
        footerDiviDerColor="rgba(255,255,255,.5)"
        TopDividerColor="border-gray-999"
        headerTilteRight={
          <div>
            <span className="cursor-pointer" onClick={() => navigate('/solutions/merchandising')}>Merchandising & Assortment Management</span> —
            <span className="font-bold"> Merchandise Financial Planning</span>
          </div>
        }
        headerClassName="pb-rc65 text-white"
        logoImg={logos_home_1_1}
        title={
          <div className="w-rc_120 w-rc_120 -mt-rc80 mb-rc60">
            Develop <span className="border-b-4 border-orange-900 border-solid inline-block">groundbreaking</span>{' '}
            omni-channel strategies
          </div>
        }
        titleRight={<BounceArrow type="white" />}
      />
      <main>
        <SolutionSEcyion3s
          section_01_title="Build and manage customer-centric Merchandise Financial Plans. "
          section_01_title2="Struggle to reconcile top down targets with bottom up forecasts? Find it difficult to understand the margin impact of mix changes? Don’t have good visibility to the assumptions and initiatives driving bottom up forecasts?"
          section_01_span={<div>
            Deploy the “Digital Market Knowledge” model from Deloitte. Bring together rich Market Data, Advanced Analytics and Integrated Planning capabilities. Transform unmanageable and uncertain revenue planning & budgeting processes. Drive growth based on facts and data.
            <div className='mt-rc40'>Deloitte’s AI platform can upgrade your revenue planning to empower channel, sales, finance and product marketing to collaborate, plan and align on plans, initiatives and resources to optimize revenue and margin performance.</div>
          </div>}
          section_02_title="Top reasons organizations are upgrading"
          section_02_title2=" their Merchandise Financial Planning capabilities"
          section_02_spans={MFP_Ecyion3s_2}
          section_03_img={AOP_Ecyion3s_3_img}
          section_03_title={
            <div>
              Use cases favored by our
              <br />
              clients
            </div>
          }
          section_03_spans={MFP_Ecyion3s_3}
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
          leftIcon={orange_left_icon}
          footerClassName="Orange_Footer_hover"
          footerHover={Orange_footerIcons}
        />
      </main>
    </div>
  )
}

export default MFP
