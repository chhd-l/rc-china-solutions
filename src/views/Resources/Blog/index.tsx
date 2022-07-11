import { useSelections } from 'ahooks'
import { Col, Row, Input } from 'antd'
import BounceArrow from '../../../components/BounceArrow'
import BlobCheckBox from './components/BlobCheckBox'
import './index.less'
import { CheckBoxData } from './mock'

const { TextArea } = Input
const Blog = () => {
  const { isSelected, toggle } = useSelections(CheckBoxData)

  return (
    <div className=" bg-111111">
      <Row justify="center">
        <Col span={24}>
          <div className=" relative ">
            <div className="modal-ready">
              <div className=" relative w-full pt-rc35 pb-rc70 z-50 mb-0 bg-100%">
                <div className="using-image">
                  <div className="img"></div>
                </div>
                <div className="row-bg-overlay"></div>
                <Row justify="center">
                  <Col span={20} style={{ zIndex: 10 }}>
                    <p className="text-white text-rc20 border-gray-rgba255 border-b pb-rc20 mb-rc100">Deloitte Blog</p>
                    <Row justify="center">
                      <Col
                        xs={{ span: 18 }}
                        sm={{ span: 16 }}
                        md={{ span: 11 }}
                        lg={{ span: 11 }}
                        xl={{ span: 17 }}
                        style={{ zIndex: 10 }}
                      >
                        <p className="text-rc72 text-white text-rc7 leading-rc75 animate__animated animate__fadeInDown">
                          Thought leadership that will inspire your digital transformation journey.
                        </p>
                      </Col>
                      <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 11 }} lg={{ span: 11 }} xl={{ span: 7 }}>
                        <BounceArrow type="white" />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <Row justify="center" gutter={20}>
                <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 11 }} lg={{ span: 11 }} xl={{ span: 20 }}>
                  <Row justify="center" className="bg-black  ">
                    <Col
                      xs={{ span: 18 }}
                      sm={{ span: 16 }}
                      md={{ span: 11 }}
                      lg={{ span: 11 }}
                      xl={{ span: 3 }}
                      className="py-rc36"
                    >
                      <p className="  w-full text-white text-rc22">
                        Search and <strong>filter</strong> articles
                      </p>
                    </Col>
                    <Col
                      xs={{ span: 18 }}
                      sm={{ span: 16 }}
                      md={{ span: 11 }}
                      lg={{ span: 11 }}
                      xl={{ span: 21 }}
                      className="py-rc20"
                    >
                      <div className="flex flex-row">
                        {CheckBoxData.map((item) => (
                          <BlobCheckBox onClick={() => toggle(item)} selected={isSelected(item)}>
                            {item}
                          </BlobCheckBox>
                        ))}
                        <Input placeholder="Basic usage" />
                      </div>
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

export default Blog
