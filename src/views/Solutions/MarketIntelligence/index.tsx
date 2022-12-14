import MasterPlanning_Sections_02 from '../../../assets/image/MasterPlanning_Sections_02.png'
import DemandPlanning_leftIcon from '../../../assets/image/DemandPlanning_leftIcon.png'
import SupplyChainControlTowerLogo from '../../../assets/image/SupplyChainControlTower_logo@2x.png'
import BounceArrow from '../../../components/BounceArrow'
import SolutionSEcyion3s from '../../../components/Solutions/SolutionSEcyion3s/SolutionSEcyion3s'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'
import { MarketIntelligence_Ecyion3s_2, MarketIntelligence_Ecyion3s_3 } from '../modules/MarketIntelligence'
import './index.less'
import { Input, Select } from 'antd'
import { UserSubmissionbody } from '../modules/UserSubmisstion'
import { NectarButton } from '../../../components/common/NectarButton'
import WpbWrapper from '../../../components/Solutions/WpbWrapper/WpbWrapper'
import { Red_footerIcons } from '../modules/footerIcons'

const MarketIntelligence = () => {
  return (
    <div className="MarketIntelligence">
      <SolutionsHeader
        TopDividerColor="border-black"
        headerTilte={<strong className="text-rc20">Market Intelligence</strong>}
        titleBtn={<div></div>}
        headerClassName="pb-rc65"
        logoImg={SupplyChainControlTowerLogo}
        title={<div className="w-rc_120 -mt-rc90">Apply industry insights towards impactful decisions</div>}
        titleRight={<BounceArrow />}
      />
      <main>
        <SolutionSEcyion3s
          section_01_title="Develop insights into changes in market size, market share and demand drivers, powered by an integrated insightful real time market intelligence."
          section_01_title2=""
          section_01_span="Collect and connect data from external and enterprise data sources. Create insightful category, customer, competitor and channel intelligence. Support revenue management and demand planning processes."
          section_02_title="Top reasons organizations are upgrading "
          section_02_title2=" their revenue planning capabilities"
          section_02_spans={MarketIntelligence_Ecyion3s_2}
          section_03_img={MasterPlanning_Sections_02}
          section_03_title={
            <div>
              Use cases favored by our
              <br />
              clients
            </div>
          }
          section_03_spans={MarketIntelligence_Ecyion3s_3}
        />
        <section className="grid grid-cols-2 gap-20 pt-rc100 pb-rc75 px-rc92 bg-gray-300 section_02">
          <div className="text-rc17">
            <strong className="text-rc22">Get in touch</strong>
            <div className="my-rc15">
              Speak to one of our experts to understand how a market intelligence solution can give you real-time
              insights.
            </div>
            <div>
              <Input className="text-rc15 bg-gray-300" placeholder="(Company) Email" />
              <Input
                placeholder="___ ___ ___"
                className="inputPhont mt-rc16"
                addonBefore={
                  <Select defaultValue="China (??????)" className="text-rc17">
                    {UserSubmissionbody.map((item, idx) => (
                      <Select.Option key={idx} value={item.Code}>
                        {item.value}
                      </Select.Option>
                    ))}
                  </Select>
                }
              />
              <div className="leading-normal bg-green00c178 text-white text-rc17 flex justify-center items-center rounded-full py-rc10 hover:opacity-90 transition-all mt-rc20">
                Talk to an expert
              </div>
            </div>
          </div>
          <div className="pl-rc35">
            <strong className="text-rc22">Live demo</strong>
            <div className="my-rc15">
              Click to experience an interactive demo of the art-of-the-possible on Deloitte???s next generation solution for
              Market Intelligence. You will see ???live??? some of the favored use cases of our clients.
            </div>
            <NectarButton className="" color="#000">
              Talk to an expert
            </NectarButton>
            <div className="mt-rc15">
              The link will require you to login using your existing Microsoft account or you can create one for free
            </div>
          </div>
        </section>
        <WpbWrapper
          leftIcon={DemandPlanning_leftIcon}
          footerClassName="Red_Footer_hover"
          footerHover={Red_footerIcons}
        />
      </main>
    </div>
  )
}

export default MarketIntelligence
