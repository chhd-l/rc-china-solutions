import './index.less'

type SectionsType = {
  section_01_video: any,
  section_01_text1: string,
  section_01_text2: string,
  section_01_text3?: string,
  section_02_video: any,
  section_02_text1: string,
  section_02_text2: string,
  section_02_text3: string,
}

const Sections = ({
  section_01_video,
  section_01_text1,
  section_01_text2,
  section_01_text3,
  section_02_video,
  section_02_text1,
  section_02_text2,
  section_02_text3,
}: SectionsType) => {
  return (
    <div className="Sections">
      <section className="bg-black text-white section_01">
        {section_01_video}
        <div className="px-rc_15 mx-_rc15">
          <div className="px-rc35">
            <div className="text-rc45 mb-rc40 leading-rc55">{section_01_text1}</div>
            <div className="text-rc20 flex">
              <div className='flex-1'>{section_01_text2}</div>
              {
                section_01_text3 && <div className='flex-1 ml-rc60'>{section_01_text3}</div>
              }
            </div>
          </div>
        </div>
      </section>
      <section className="section_02">
        <div className="m-auto bg_2">
          <img src={section_02_video} alt="" />
        </div>
        <div className="flex pl-rc_8 pr-rc_8 text-rc17 -mt-rc_10">
          <div className='w-full'>
            <div className="text-rc35 leading-rc43">{section_02_text1}</div>
            <div>{section_02_text2}</div>
          </div>
          <div className="border-t border-solid border-gray-999 pt-rc20 ml-rc60">{section_02_text3}</div>
        </div>
      </section>
    </div>
  )
}

export default Sections
