import { Col, Row } from 'antd'
import leader_logo from '../../../../assets/image/leader_logo.png'
import { NectarButton } from '../../../../components/common/NectarButton'
import { SolidButton } from './components/SolidButton'

const ViewSecondPart = () => {
  return (
    <div className="bg-white py-rc50  ">
      <Row>
        <Col
          xs={{ span: 16, offset: 4 }}
          sm={{ span: 16, offset: 4 }}
          md={{ span: 14, offset: 5 }}
          lg={{ span: 8, offset: 3 }}
          xl={{ span: 7, offset: 3 }}
        >
          <img src={leader_logo} alt="" className=" h-full w-full" />
        </Col>
        <Col
          xs={{ span: 16, offset: 4 }}
          sm={{ span: 16, offset: 4 }}
          md={{ span: 14, offset: 5 }}
          lg={{ span: 10, offset: 0 }}
          xl={{ span: 11, offset: 0 }}
          className="border border-gray-400 border-solid pr-rc20 pl-rc41 pt-rc41 pb-rc20"
        >
          <div className=" text-rc22 mb-rc20">
            <strong>:o9 Solutions recognized as a Leader </strong>
            in the 2022 Gartner® Magic Quadrant™ for Supply Chain Planning Solutions
          </div>
          <SolidButton>Read the report</SolidButton>
        </Col>
      </Row>

      <Row className=" mt-rc_11">
        <Col
          className=" text-rc40"
          xs={{ span: 16, offset: 4 }}
          sm={{ span: 16, offset: 4 }}
          md={{ span: 14, offset: 5 }}
          lg={{ span: 8, offset: 3 }}
          xl={{ span: 9, offset: 3 }}
        >
          <strong>The :o9 Digital Brain:</strong> The platform at the core of your digital transformation.
        </Col>

        <Col
          xs={{ span: 16, offset: 4 }}
          sm={{ span: 16, offset: 4 }}
          md={{ span: 14, offset: 5 }}
          lg={{ span: 9, offset: 1 }}
          xl={{ span: 8, offset: 1 }}
        >
          <div className=" text-rc20 font-thin leading-rc36">
            Are slow and siloed planning capabilities preventing your company from detecting market changes, forecasting
            demand accurately, evaluating demand/supply scenarios, and driving integrated commercial, supply chain and
            financial plans and decisions at the speed and scale needed to compete in the digital age?
          </div>
        </Col>
      </Row>

      <Row className=" mt-rc_7">
        <Col
          xs={{ span: 16, offset: 4 }}
          sm={{ span: 16, offset: 4 }}
          md={{ span: 14, offset: 5 }}
          lg={{ span: 14, offset: 5 }}
          xl={{ span: 16, offset: 4 }}
          className=" bg-black h-rc500"
        ></Col>
      </Row>
      <div className=" mt-rc_2 text-center">
        <NectarButton hoverBorderColor="#000000" color="#000000">
          Learn more about the o9 Digital Brain
        </NectarButton>
      </div>
    </div>
  )
}

export default ViewSecondPart
