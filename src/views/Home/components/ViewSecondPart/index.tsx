import { Col, Row } from 'antd'
import leader_logo from '../../../../assets/image/leader_logo.png'
import { NectarButton } from '../../../../components/common/NectarButton'
import { SolidButton } from './components/SolidButton'

const ViewSecondPart = () => {
  return (
    <div className="bg-white py-rc50  ">
      <Row justify="center">
        <Col xs={{ span: 16 }} sm={{ span: 16 }} md={{ span: 14 }} lg={{ span: 8 }} xl={{ span: 7 }}>
          <img src={leader_logo} alt="" className=" h-full w-full" />
        </Col>
        <Col
          xs={{ span: 16 }}
          sm={{ span: 16 }}
          md={{ span: 14 }}
          lg={{ span: 10 }}
          xl={{ span: 11 }}
          className="border border-gray-400 border-solid pr-rc20 pl-rc41 pt-rc41 pb-rc20"
        >
          <div className=" text-rc22 mb-rc20">
            <strong>Deloitte Solutions recognized as a Leader </strong>
            in the 2022 Gartner® Magic Quadrant™ for Supply Chain Planning Solutions
          </div>
          <SolidButton>Read the report</SolidButton>
        </Col>
      </Row>

      <Row justify="center" className=" mt-rc_11" gutter={20}>
        <Col xs={{ span: 16 }} sm={{ span: 16 }} md={{ span: 14 }} lg={{ span: 8 }} xl={{ span: 9 }}>
          <p className=" text-rc40">
            <strong>The Deloitte Digital Brain:</strong> The platform at the core of your digital transformation.
          </p>
        </Col>
        <Col xs={{ span: 16 }} sm={{ span: 16 }} md={{ span: 14 }} lg={{ span: 9 }} xl={{ span: 9 }}>
          <div className=" text-rc20 font-thin leading-rc36">
            Are slow and siloed planning capabilities preventing your company from detecting market changes, forecasting
            demand accurately, evaluating demand/supply scenarios, and driving integrated commercial, supply chain and
            financial plans and decisions at the speed and scale needed to compete in the digital age?
          </div>
        </Col>
      </Row>
      <Row justify="center" className=" mt-rc_7">
        <Col xs={{ span: 16 }} sm={{ span: 16 }} md={{ span: 14 }} lg={{ span: 16 }} xl={{ span: 16 }}>
          <iframe
            title="video"
            height={540}
            className="w-full "
            src="https://fast.wistia.net/embed/iframe/vjop3ng9cl?dnt=1&wvideo=vjop3ng9cl#?secret=3Yjk7CBwwq"
          />
        </Col>
      </Row>
      <div className=" mt-rc_2 text-center">
        <NectarButton hoverBorderColor="#000000" color="#000000">
          Learn more about the Deloitte Digital Brain
        </NectarButton>
      </div>
    </div>
  )
}

export default ViewSecondPart
