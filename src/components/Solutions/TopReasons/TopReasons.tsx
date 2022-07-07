import DividerLeft from '../../DividerLeft'
import './index.less'

type TopReasonsType = {
    title?: string
    spans: any[]
}

const TopReasons = ({title, spans}: TopReasonsType) => {
    return <section className="TopReasonsType">
    <DividerLeft dividerColor="rgba(0, 0, 0, 0.2)">
      <h5>Top reasons</h5>
    </DividerLeft>
    <div className="text-rc35 mt-rc25 mb-rc45 tracking-rc5">Why customers choose Deloitte</div>
    <div className="flex flex-wrap justify-between">
      {spans.map((item, idx) => (
        <div className="w-rc_30 mb-rc25" key={idx}>
          <img className="w-rc32 mb-rc12" src={item.icon} alt="" />
          <p className="text-rc17 leading-rc32">
            <strong>{item.title}</strong><br />
            {item.span1}
            <strong>{item.strong}</strong>
            {item.span2}
            <strong>{item?.strong2}</strong>
            {item?.span3}
            <strong>{item?.strong3}</strong>
            {item?.span4}
          </p>
        </div>
      ))}
    </div>
  </section>
}

export default TopReasons