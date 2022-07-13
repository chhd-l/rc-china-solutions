import SalesOperationsPlanning_section_02_bg from '../../../assets/image/SalesOperationsPlanning_section_02_bg.png'
import SalesOperationsPlanning_header_bg from '../../../assets/image/SalesOperationsPlanning_header_bg.png'
import section_09_left_icon from '../../../assets/image/section_09_left_icon.png'
import logos_home_1_1 from '../../../assets/image/logos-home-1-1.png'
import SolutionsPlanMoudlu from '../../../components/Solutions/PlanMoudlu/SolutionsPlanMoudlu'
import Sections from '../../../components/Solutions/Sections/Sections'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import TopReasons from '../../../components/Solutions/TopReasons/TopReasons'
import MoudulUseCase from '../../../components/Solutions/MoudulUseCase/MoudulUseCase'
import UserSubmission from '../../../components/Solutions/UserSubmission/UserSubmission'
import { SalesOperationsPlanning_TopReasons, SalesOperationsPlanning_UseCase } from '../modules/SalesOperationsPlanning'
import WpbWrapper from '../../../components/Solutions/WpbWrapper/WpbWrapper'
import { useNavigate } from 'react-router-dom'

const SalesOperationsPlanning = () => {
  const navigate = useNavigate()

  return (
    <div className="SalesOperationsPlanning">
      <SolutionsHeader
        borderColor="#fff"
        headerTilte={<div className="text-rc28 font-bold">Sales & operations planning (S&OP) software</div>}
        headerClassName="text-white"
        TopDividerColor="border-gray-999"
        headerTilteRight={
          <div>
            <span className="cursor-pointer" onClick={() => navigate('/solutions/integrated-business-planning')}>
              Integrated Business Planning (IBP)
            </span>{' '}
            —<span className="font-bold"> Sales & Operations Planning (S&OP)</span>
          </div>
        }
        headBg={SalesOperationsPlanning_header_bg}
        logoImg={logos_home_1_1}
        footerColor="#fff"
        footerDiviDerColor="rgba(255,255,255,.5)"
        title={
          <div className="text-rc45 whitespace-nowrap">
            Reimagine
            <strong> Sales & Operations Planning</strong>
          </div>
        }
      />
      <main>
        <Sections
          section_01_video={<div className="relative w-full h-rc160" />}
          section_01_text1="Redefine Sales & Operations Planning with in-line collaboration"
          section_01_text2="Deloitte is helping organizations move from executive dash-boarding to a collaborative, analytic insights driven platform for alignment of cross-functional plans and initiatives. Enable your digital transformation of S&OP by integrating commercial planning and finance into an existing S&OP with on system meetings."
          section_02_video={SalesOperationsPlanning_section_02_bg}
          section_02_text1="Create a unified plan with live data"
          section_02_text2=""
          section_02_text3="Integrate all plans with the flexibility to model different sources of data, and accommodate the different granularity of the plans and understand the gaps between the plans. Resulting in a unified plan, in volume and value, constrained and fully financialized. Use the S&OP dashboard as a part of the full Integrated Business Planning (IBP) solution from Deloitte."
        />
        <TopReasons spans={SalesOperationsPlanning_TopReasons} />
        <MoudulUseCase flexOpen={false} spans={SalesOperationsPlanning_UseCase} />
        <SolutionsPlanMoudlu
          spans={[
            'Deloitte’s Integrated Business planning software capabilities including S&OP are helping global enterprises improve the overall plan, which directly correlates to better and improved financial performance. And when a business plans better, it creates operational efficiencies that significantly reduce wastage.',
            'The integrated planning efficiencies delivered by Deloitte is helping corporations do more, be more and mean more, internally and to the world at large.',
          ]}
          bg={false}
        />
        <UserSubmission
          title={<strong>Take the first step to redefining your Sales & Operations Planning workflows</strong>}
        />
        <WpbWrapper
          leftIcon={section_09_left_icon}
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

export default SalesOperationsPlanning
