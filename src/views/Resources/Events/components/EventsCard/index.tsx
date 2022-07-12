import './index.less'

type EventsCardProps = {
  date: string
  title: string
  buttonText: string
  desc: string
  span?: string
}
const EventsCard = ({ date, title, buttonText, desc, span }: EventsCardProps) => {
  return (
    <div className="wrapper m-rc10 ">
      <div className="p-rc30 bg-white inline-block w-full">
        <div className="layout_1">
          <div className="element_1">{date}</div>
          <div className="element_2">{title}</div>
        </div>
        <div className="layout_2">
          <div className="element_3">{buttonText}</div>
          <div className="element_4">{desc}</div>
          <div className=" text-right">
            <div className="event-button">Visit event website</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsCard
