import { Col, Row } from 'antd'
import EKG_3D_cube_animation from '../../../../../assets/video/EKG-3D-cube-animation-5.mp4'
import { brainData } from '../../../modules/TheDigitalBrain'

const BrainFirstPart = () => {
  return (
    <Row gutter={[0, 100]} className="border-b border-gray-E4E4E4">
      <Col span={24}>
        <div className="">
          <video loop width={1800} autoPlay muted playsInline preload="auto" height={700}>
            <source src={EKG_3D_cube_animation} type="video/mp4" />
          </video>
        </div>
      </Col>
      <Col span={16} offset={5}>
        <p className="text-rc22 font-light ">
          Are you also facing these common challenges in planning and decision-making?
        </p>
      </Col>
      <Col
        xs={{ span: 18, offset: 3 }}
        sm={{ span: 16, offset: 4 }}
        md={{ span: 14, offset: 5 }}
        lg={{ span: 8, offset: 3 }}
        xl={{ span: 20, offset: 2 }}
      >
        <div className="  grid grid-cols-1 gap-4  lg:grid-cols-3">
          {brainData.map((item) => (
            <div className="border-gray-E4E4E4 border p-rc35" key={item.strong}>
              <img src={item.img} alt="" className=" w-rc40 h-rc40 mb-rc30" />
              <p className="text-rc17">
                <strong className=" font-semibold">{item.strong}</strong>
                {item.span}
                <span>{item.href1}</span>
                <span>{item.href2}</span>
                {item.rest}
              </p>
            </div>
          ))}
        </div>
      </Col>
      <Col span={12} offset={6}>
        <h3 className="text-rc22 font-light pb-rc_7">
          The solution: Next-generation Integrated Business Planning (IBP) capabilities enabled by a platform like o9’s
          Digital Brain. The human brain was our inspiration.
        </h3>
      </Col>
    </Row>
  )
}

export default BrainFirstPart
