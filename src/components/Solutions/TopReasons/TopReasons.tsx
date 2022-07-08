import DividerLeft from '../../DividerLeft'
import './index.less'

type TopReasonsType = {
    title?: string
    p?: string
    spans: any[]
}

const TopReasons = ({title, p='Why customers choose Deloitte',  spans}: TopReasonsType) => {
    return <section className="TopReasonsType">
    <DividerLeft dividerColor="rgba(0, 0, 0, 0.2)">
      <h5>Top reasons</h5>
    </DividerLeft>
    <div className="text-rc35 mt-rc25 mb-rc45 tracking-rc5">{p}</div>
    <div className="grid grid-cols-1 gap-x-20 md:grid-cols-3">
      {spans.map((item, idx) => (
        <div className="mb-rc25" key={idx}>
          <img className="w-rc32 mb-rc12" src={item.icon} alt="" />
          <div className="text-rc17 leading-rc32">
            {item.title && <strong>{item.title}<br /></strong>}
            {item.span1}
            <strong>{item.strong}</strong>
            {item.span2}
            <strong>{item?.strong2}</strong>
            {item?.span3}
            <strong>{item?.strong3}</strong>
            {item?.span4}
          </div>
        </div>
      ))}
    </div>
  </section>
}

export default TopReasons