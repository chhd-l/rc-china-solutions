import './index.less'

type WpbRowType = {
    title?: string
    span1: string
    span2: string
    span3: string
    img: string
}

const WpbRow = ({title, span1, span2, span3, img}: WpbRowType) => {
    return <section className="WpbRow bg-black text-rc17 text-white flex">
    <div className="w-rc517 mr-rc60">
      <img className="mb-rc24" src={img} alt="" />
      <div className="text-center">{title}</div>
    </div>
    <div className="leading-rc32 pr-rc35 flex-1">
      <div className="text-rc35 leading-rc43 mb-rc45">
        {span1}
      </div>
      <div className="mb-rc27">
        {span2}
      </div>
      <div>
        {span3}
      </div>
    </div>
  </section>
}

export default WpbRow