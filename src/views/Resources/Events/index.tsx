import { Anchor, Col, Row } from 'antd'
import { AnchorContainer } from 'antd/lib/anchor/Anchor'
import { useEffect, useState } from 'react'
import BrounceArrow from '../../../components/BounceArrow'
import EventsCard from './components/EventsCard'
import './index.less'
import { eventsData } from './mock'

const { Link } = Anchor
const Events = () => {
  const [targetOffset, setTargetOffset] = useState<number | undefined>(undefined)

  useEffect(() => {
    setTargetOffset(window.innerHeight / 2)
  }, [])
  return (
    <div id="">
      <Row justify="center">
        <Col span={24}>
          <div className=" relative ">
            <div className="events-ready">
              <div className=" relative w-full pt-rc35 pb-rc70 z-50 mb-0 bg-100%">
                <div className="using-image">
                  <div className="img"></div>
                </div>
                <Row justify="center">
                  <Col span={20} style={{ zIndex: 10 }}>
                    <p className="  border-black border-b pb-rc15 mb-rc100 flex flex-row justify-between">
                      <span className=" text-rc20 font-bold">Events</span>
                      <span className="text-white text-rc14">Events</span>
                    </p>
                    <Row justify="center">
                      <Col
                        xs={{ span: 18 }}
                        sm={{ span: 16 }}
                        md={{ span: 11 }}
                        lg={{ span: 11 }}
                        xl={{ span: 17 }}
                        style={{ zIndex: 10 }}
                      >
                        <p className="text-rc72  text-rc7 leading-rc75 animate__animated animate__fadeInDown font-light">
                          Come meet us <span className="animation_underline relative inline-block">digitally</span> in
                          industry events
                        </p>
                      </Col>
                      <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 11 }} lg={{ span: 11 }} xl={{ span: 7 }}>
                        <BrounceArrow type="black" />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <Row justify="center" className="bg-gray-300 " id="anchor-content">
                <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 11 }} lg={{ span: 20 }} xl={{ span: 20 }}>
                  <Row justify="center" className=" mt-rc_10">
                    <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 2 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                      <Anchor
                        targetOffset={targetOffset}
                        getContainer={() => document.querySelector('#anchor-content') as AnchorContainer}
                        // affix
                      >
                        <Link href="#Upcoming" title="Upcoming" />
                        <Link href="#PastEvents" title="PastEvents" />
                      </Anchor>
                    </Col>
                    <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 22 }} lg={{ span: 20 }} xl={{ span: 20 }}>
                      <Row justify="center" gutter={10} className="afterline" id="Upcoming">
                        {eventsData.Upcoming.map((item, index) => (
                          <Col
                            key={index}
                            xs={{ span: 18 }}
                            sm={{ span: 16 }}
                            md={{ span: 11 }}
                            lg={{ span: 11 }}
                            xl={{ span: 12 }}
                          >
                            <EventsCard {...item} />
                          </Col>
                        ))}
                      </Row>
                      <Row justify="center" gutter={10} className=" mt-rc_5 pb-rc_15" id="PastEvents">
                        {eventsData.PastEvents.map((item, index) => (
                          <Col
                            key={index}
                            xs={{ span: 18 }}
                            sm={{ span: 16 }}
                            md={{ span: 11 }}
                            lg={{ span: 11 }}
                            xl={{ span: 12 }}
                          >
                            <EventsCard {...item} />
                          </Col>
                        ))}
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Events
