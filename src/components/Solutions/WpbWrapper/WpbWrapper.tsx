import { useNavigate } from "react-router-dom"

type WpbWrapperType = {
    leftIcon: string
    footerClassName: string
    footerHover: {url: string, name: string}[]
}

const WpbWrapper = ({leftIcon, footerClassName, footerHover}: WpbWrapperType) => {
  const navigate = useNavigate()

    return <section className="text-rc20 px-rc90 py-rc150">
      <div className="mb-rc45 text-rc35">Related Solutions</div>
      <div className={`flex flex-wrap ${footerClassName}`}>
      {footerHover.map((item, idx) => (
            <div onClick={() => navigate(item.url)} key={idx} className={`transition-all group ${'RelatedSolutions_' + (idx + 1)} hover:bg-black hover:text-white flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30`}>
              <div className="w-rc100 h-full" />
              <div>{item.name}</div>
              <img
                className="transition-all opacity-0 transform -translate-x-1/2 h-rc35 group-hover:translate-x-0 group-hover:opacity-100"
                src={leftIcon}
                alt=""
              />
            </div>
          ))}
      </div>
    </section>
}

export default WpbWrapper