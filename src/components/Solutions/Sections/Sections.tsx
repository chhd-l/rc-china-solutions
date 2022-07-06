import './index.less'

const Sections = ({ section_01_video, section_01_text1, section_01_text2, section_02_video, section_02_text1, section_02_text2, section_02_text3 }: any) => {
    return <div className="Sections">
    <section className="bg-black text-white section_01">
      {section_01_video}
      <div className="px-rc_15 mx-_rc15">
        <div className="px-rc35">
          <div className="text-rc45 mb-rc40 leading-rc55">
            {section_01_text1}
          </div>
          <div className="text-rc20">
            {section_01_text2}
          </div>
        </div>
      </div>
    </section>
    <section className="section_02">
      <div className="m-auto bg_2">
        <img src={section_02_video} alt="" />
      </div>
      <div className="flex pl-rc_8 pr-rc_8 text-rc17 -mt-rc_10">
        <div className="pl-rc35 pr-rc35">
          <div className="text-rc35 leading-rc43">{section_02_text1}</div>
          <div>
            {section_02_text2}
          </div>
        </div>
        <div className="border-t border-solid pt-rc20 dividon_02">
          {section_02_text3}
        </div>
      </div>
    </section>
    </div>
}

export default Sections