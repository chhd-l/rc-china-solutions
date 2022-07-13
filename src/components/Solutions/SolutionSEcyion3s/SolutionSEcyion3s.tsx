import './index.less'

type SolutionSEcyion3sType = {
  section_01_img?: string
  section_01_title: string
  section_01_title2: string
  section_01_span: any
  section_02_title: string
  section_02_title2: string
  section_02_spans: {start: string, span: string,}[]
  section_03_img: any
  section_03_title: any
  section_03_spans: any[]
}

const SolutionSEcyion3s = ({
  section_01_img,
  section_01_title,
  section_01_title2,
  section_01_span,
  section_02_title,
  section_02_title2,
  section_02_spans,
  section_03_img,
  section_03_title,
  section_03_spans,
}: SolutionSEcyion3sType) => {
  return (
    <div id='content' className="SolutionSEcyion3s">
      <section className={`bg-black text-white section_01 px-rc90 pb-rc150 ${section_01_img ? 'pt-rc40' : 'pt-rc150'}`}>
        {
          section_01_img 
          ? <div className="relative px-rc_10 -top-rc90">
          <img className='px-rc35 w-full' src={section_01_img} alt="" />
        </div>
          : null
        }
        <div className=" pl-rc_15 pr-rc_15 ml-_rc15 mr-_rc15">
          <div className="pl-rc35 pr-rc35 text-rc20">
            <div className="text-rc45 leading-rc55">
              {section_01_title}
              <span className="text-gray-999 leading-rc55">{section_01_title2}</span>
            </div>
            <div className="mt-rc40 mb-rc27 text-gray-999 leading-rc32">{section_01_span}</div>
          </div>
        </div>
      </section>
      <section
        className={`text-black bg-gray-e5e6e5 px-rc90 pt-rc150 ${
          typeof section_03_img === 'string' ? 'pb-rc415' : 'pb-rc150'
        }`}
      >
        <div className="px-rc_10 mx-_rc10">
          <div className="text-rc17">
            <div className="text-rc45">
              {section_02_title}
              <span className="text-gray-999">{section_02_title2}</span>
            </div>
            {section_02_spans.length && (
              <div className={`mt-rc40 mb-rc27 grid ${'grid-cols-' + section_02_spans.length} gap-10`}>
                {section_02_spans.map((item, idx) => (
                  <div className="border-t pt-rc20 border-solid border-black" key={idx}>
                    <strong>
                      {item.start}
                      <br />
                    </strong>
                    {item.span}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <section
        className={`section_02 bg-black text-white px-rc90 ${section_03_spans.length ? 'pb-rc150' : ''} ${
          typeof section_03_img === 'string' || 'pt-rc150'
        }`}
      >
        {typeof section_03_img === 'string' ? (
          <div className="m-auto bg_2">
            <img src={section_03_img} alt="" />
          </div>
        ) : (
          section_03_img
        )}
        <div className={`${typeof section_03_img === 'string' && '-mt-rc_10'}`}>
          <div className="text-rc45 mb-rc75">{section_03_title}</div>
          <div className="grid grid-cols-2 gap-x-10 relative">
            {section_03_spans.map((item, idx) => (
              <div className="flex items-center mb-rc20">
                {/* <img className="mr-rc15 mt-rc10 h-rc22" src={SupplyChainControlTower_UseCases_1} alt="" /> */}
                <div className="w-rc10 h-rc10 bg-white rounded-full absolute" />
                <div className='ml-rc35'>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default SolutionSEcyion3s
