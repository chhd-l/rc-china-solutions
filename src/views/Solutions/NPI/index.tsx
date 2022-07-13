import DemandPlanning_leftIcon from '../../../assets/image/DemandPlanning_leftIcon.png'
import SupplyChainControlTowerLogo from '../../../assets/image/SupplyChainControlTower_logo@2x.png'
import SolutionsPlanMoudlu from '../../../components/Solutions/PlanMoudlu/SolutionsPlanMoudlu'
import Sections from '../../../components/Solutions/Sections/Sections'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import TopReasons from '../../../components/Solutions/TopReasons/TopReasons'
import MoudulUseCase from '../../../components/Solutions/MoudulUseCase/MoudulUseCase'
import UserSubmission from '../../../components/Solutions/UserSubmission/UserSubmission'
import { NPI_MoudulUseCase, NPI_TRP } from '../modules/SolutionsNpi'
import WpbWrapper from '../../../components/Solutions/WpbWrapper/WpbWrapper'
import { Red_footerIcons } from '../modules/footerIcons'

const NPI = () => {
  return (
    <div className="NPI">
      <SolutionsHeader
        borderColor="#000"
        headerTilte={<div className="text-rc28 font-bold">New Product Introduction (NPI) Software</div>}
        TopDividerColor="border-gray-999"
        logoImg={SupplyChainControlTowerLogo}
        title={
          <div className="text-rc45 whitespace-nowrap">
            Introduce new products <br />
            with a holistic view
          </div>
        }
      />
      <main>
        <Sections
          section_01_video={<div className="relative w-full h-rc90" />}
          section_01_text1="Balance market needs versus operations complexity."
          section_01_text2="Increase success of new product introduction with smoother launches and transitions. Optimize your product portfolio range with Advanced Segmentation, Analytics and Scenario Planning capabilities. Use cross-functional planning and collaborate across Product, Marketing, Sales & Supply Chain functions."
          section_02_video={<div className="h-rc242" />}
          section_02_text1="Deloitte’s NPI software shows a comprehensive view of the New Product Introduction planning process."
          section_02_text2=""
          section_02_text3="Addressing common problems by creating placeholder SKUs before the product is created in the ERP system. Using like products and various planning parameters it can generate a new product forecast and determine the cannibalization impact of the new product."
        />
        <TopReasons spans={NPI_TRP} />
        <MoudulUseCase
          flexOpen={false}
          spans={NPI_MoudulUseCase}
          title="With Deloitte New Product Introduction planning 
          customers "
          span="can take product innovation to a 
          new level"
        />
        <SolutionsPlanMoudlu
          spans={[
            'Deloitte’s next-generation demand planning software capabilities are helping global enterprises improve forecast accuracy, which directly correlates to better plans and improved financial performance. And when a business plans better, it creates operational efficiencies that significantly reduce wastage.',
            'The integrated planning efficiencies delivered by Deloitte is helping corporations do more, be more and mean more, internally and to the world at large.',
          ]}
          title='Plan better. Reduce waste. Create an efficient business for a better planet.'
          bg={false}
        />
        <UserSubmission
          title={<strong>Introduce new products with a holistic view. Leverage the Deloitte Digital Brain in your business.</strong>}
        />
        <WpbWrapper
          leftIcon={DemandPlanning_leftIcon}
          footerClassName="Red_Footer_hover"
          footerHover={Red_footerIcons}
        />
      </main>
    </div>
  )
}

export default NPI
