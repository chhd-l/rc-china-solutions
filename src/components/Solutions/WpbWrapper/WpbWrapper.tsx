type WpbWrapperType = {
    leftIcon: string
    footerClassName: string
    footerHover: string[]
}

const WpbWrapper = ({leftIcon, footerClassName, footerHover}: WpbWrapperType) => {
    return <section className="text-rc20 px-rc90 py-rc150" id="RelatedSolutions">
      <div className="mb-rc45 text-rc35">Related Solutions</div>
      <div className={`flex flex-wrap ${footerClassName}`}>
      {footerHover.map((item, idx) => (
            <div key={idx} className={`transition-all group ${item} hover:bg-black hover:text-white flex items-center justify-between w-1/2 border border-solid border-gray-e5e6e5 py-rc25 pl-rc15 pr-rc30`}>
              <div className="w-rc100 h-full" />
              <div>Supply Chain Master Planning</div>
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