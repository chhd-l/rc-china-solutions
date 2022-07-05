import { Col, Row } from 'antd'
import EKG_3D_cube_animation from '../../../../../assets/video/EKG-3D-cube-animation-5.mp4'

const BrainFirstPart = () => {
  return (
    <Row>
      <Col span={24}>
        <div className="">
          <video loop className="w-full h-full" autoPlay muted playsInline preload="auto">
            <source src={EKG_3D_cube_animation} type="video/mp4" />
          </video>
        </div>
      </Col>
      <Col span={24}>Are you also facing these common challenges in planning and decision-making?</Col>
    </Row>
  )
}

export default BrainFirstPart
