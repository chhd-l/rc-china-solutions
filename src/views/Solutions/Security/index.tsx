import { Col, Row } from 'antd'
import BounceArrow from '../../../components/BounceArrow'
import { SecurityData } from '../modules/Security'
import soc_Service from '../../../assets/image/SOC-Service-Org_B_Marks_2c_Web-300x274-1.png'

const Security = () => {
  return (
    <div className=" pb-rc90">
      <Row justify="center" className="bg-gray-e5e6e5">
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 19 }} lg={{ span: 18 }} xl={{ span: 20 }}>
          <div className="flex flex-row justify-between pt-rc30 w-full h-rc70 mb-rc_7">
            <p className=" text-rc20 font-bold    mb-rc_10">Security</p>
            <p className="text-white text-rc14 font-bold">Security</p>
          </div>
        </Col>
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 19 }} lg={{ span: 18 }} xl={{ span: 15 }}>
          <p className=" text-rc72 animate__animated animate__fadeInUp leading-rc75">
            A secure platform is our priority
          </p>
        </Col>
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 19 }} lg={{ span: 5 }} xl={{ span: 5 }}>
          <BounceArrow />
        </Col>
      </Row>
      <Row justify="center" className="mt-rc_7">
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 19 }} lg={{ span: 15 }} xl={{ span: 16 }}>
          <p className="text-rc24  ">o9 SOC-2 Attestation</p>
          <span className="text-rc17">
            o9 Solutions has been attested by independent 3rd party to conform to SSAE 16 / SOC-2 controls.
          </span>
          <p className="text-rc24 mt-rc26">Physical Security</p>
          <span className="text-rc17">
            Depending on the chosen hosting provider, our servers are located within Azure, AWS or Google enterprise.
            Access is restricted to authorized staff by a combination of biometric systems and 24/7 onsite security
            guards, and is continually audited to meet SOC 2 Type II standards.
          </span>
        </Col>
        <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 19 }} lg={{ span: 5 }} xl={{ span: 4 }}>
          <img src={soc_Service} alt="" width={300} height={274} />
        </Col>
        {SecurityData.map((item) => (
          <Col
            xs={{ span: 18 }}
            sm={{ span: 16 }}
            md={{ span: 19 }}
            lg={{ span: 18 }}
            xl={{ span: 20 }}
            key={item.title}
          >
            <p className="text-rc24 mt-rc26">{item.title}</p>
            <span className="text-rc17">{item.desc}</span>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Security
