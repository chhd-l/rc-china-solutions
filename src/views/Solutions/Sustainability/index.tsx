import logos_home_1_1 from '../../../assets/image/logos-home-1-1.png'
import Sustainability_section_02_bg from '../../../assets/image/Sustainability_section_2_bg.png'
import ReadOurWhitePaper from '../../../assets/image/ReadOurWhitePaper.png'
import Sustainability_header_bg from '../../../assets/image/Sustainability_header_bg.png'
import './index.less'
import { Sustainability_section_01_content, Sustainability__TopReasons } from '../modules/Sustainability'
import SolutionsPlanMoudlu from '../../../components/Solutions/PlanMoudlu/SolutionsPlanMoudlu'
import TopReasons from '../../../components/Solutions/TopReasons/TopReasons'
import SolutionsHeader from '../../../components/Solutions/SolutionsHeader/SolutionsHeader'

const Sustainability = () => {
  return (
    <div className="Sustainability">
      <SolutionsHeader
        headerClassName="text-white"
        headerTilte={<div className="text-rc28 font-bold">Sustainability</div>}
        TopDividerColor="border-gray-999"
        borderColor="#fff"
        logoImg={logos_home_1_1}
        footerColor="#fff"
        footerDiviDerColor="rgba(255,255,255,.5)"
        headBg={Sustainability_header_bg}
        title={
          <div>
            <span className="font-bold">Deloitte Sustainable</span>
            <br />Supply Chain Management Platform
          </div>
        }
      />
      <main>
        <section className="bg-black text-white section_01">
          <div className=" pl-rc_15 pr-rc_15 ml-_rc15 mr-_rc15">
            <div className="pl-rc35 pr-rc35 text-rc20">
              <div className="text-rc45">{Sustainability_section_01_content.title}</div>
              <div className="mt-rc40 mb-rc27">{Sustainability_section_01_content.span}</div>
              <div>{Sustainability_section_01_content.span2}</div>
            </div>
          </div>
        </section>
        <section className="pl-rc90 pr-rc90 relative section_02">
          <div className="absolute m-auto bg_2">
            <img src={Sustainability_section_02_bg} alt="" />
          </div>
          <div className="flex pl-rc_8 pr-rc_8 text-rc17">
            <div className="w-1/2 mr-rc60">
              <div className="text-rc35 leading-rc43">Sustainability done better with the o9 platform</div>
              <div className="py-rc20">
                Our industry-leading software digitally transforms operations to address the end-to-end environmental,
                social, and governance footprint of your organization.
              </div>
              <div className="pt-rc20 border-t border-solid" style={{ borderColor: 'rgba(0,0,0,.12)' }}>
                Track, measure, and manage ESG metrics at every level of supplier through to the end customer. Gain the
                predictive intelligence and prescriptive decision recommendations that will help reduce your carbon
                footprint.
              </div>
            </div>
            <div className="flex-1 h-full bg-white p-rc40 text-rc24 mr-rc35">
              <div style={{ transform: 'translateY(-20%)' }}>
                <img className="w-rc200" src={ReadOurWhitePaper} alt="" />
              </div>
              <div className="-mt-rc30 mb-rc15">
                Sustainable supply chains can have significant benefits for your business.
              </div>
              <div className="bg-black text-white inline-block text-rc16 py-rc12 px-rc35 rounded-full">
                Read our white paper
              </div>
            </div>
          </div>
        </section>
        <TopReasons spans={Sustainability__TopReasons} />
        <SolutionsPlanMoudlu
          spans={[
            'The Deloitte Sustainability Supply Chain Management capabilities have been built by a team of sustainability, supply chain, and technology experts who have decades of experience across numerous industries. They have a driving passion for enabling organizations to have a positive impact on the planet through technology. Their expertise ensures our software will drive real impact in your business.',
          ]}
        />
      </main>
    </div>
  )
}

export default Sustainability
