import { useNavigate } from "react-router-dom"

type breadcrumbsType = {
  bodys: any[]
  title: any
  img?: string
  footerHover: {url: string, name: string}[]
  footerSpan: any
  footerP: any
  footerTitle: any
  footerHover_icon: string
  footerClassName: string
}

const Breadcrumbs = ({
  bodys,
  title,
  img,
  footerHover,
  footerTitle,
  footerP,
  footerSpan,
  footerHover_icon,
  footerClassName,
}: breadcrumbsType) => {
  const navigate = useNavigate()

  return (
    <div id="content">
      <section className="bg-black px-rc90 py-rc125 text-white">
        <div className="px-rc242 text-rc45">
          {title}
          <img src={img} alt="" />
        </div>
      </section>
      <section id="capabilities">
        {bodys.map((item, idx) => (
          <div key={idx} className={`flex px-rc90 py-rc150 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-300'}`}>
            <div className="w-rc_75 text-rc35 font-bold leading-rc43 mr-rc60">{item.title}</div>
            <div>
              <div className="pt-rc30 border-t border-solid border-black text-rc17 leading-rc32 mb-rc25">
                <strong>{item?.strong}</strong>
                {item.span}
              </div>
              <div>
                <img src={item.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="px-rc90 py-rc100 bg-black_111 text-white" id='solutions'>
        <div className="flex">
          <div className="w-rc_30 text-rc35 leading-rc42 mr-rc60">{footerTitle}</div>
          <div className="text-rc17 leading-rc32 border-t border-solid border-white">
            <div className="py-rc20">{footerP}</div>
            <div>{footerSpan}</div>
          </div>
        </div>
        <div className={`flex flex-wrap mt-rc74 ${footerClassName}`}>
          {footerHover.map((item, idx) => (
            <div onClick={() => navigate(item.url)} key={idx} className={`transition-all group ${'RelatedSolutions_' + (idx + 1)} hover:bg-black flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30`}>
              <div className="w-rc100 h-full" />
              <div>{item.name}</div>
              <img
                className="transition-all opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
                src={footerHover_icon}
                alt=""
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Breadcrumbs
