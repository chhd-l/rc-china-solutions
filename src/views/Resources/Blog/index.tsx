import { useRequest, useSelections } from 'ahooks'
import { Col, Row, Input } from 'antd'
import FloadCard from '../../../components/FloatCard'
import BounceArrow from '../../../components/BounceArrow'
import BlobCheckBox from './components/BlobCheckBox'
import './index.less'
import { CheckBoxData, searchList } from './mock'
import { useState } from 'react'
import { toLower } from 'lodash'

const Blog = () => {
  const { isSelected, toggle } = useSelections(CheckBoxData)
  const [searchData, setSearchData] = useState(searchList)

  const { loading, run } = useRequest(
    (val) =>
      new Promise(() => {
        let result = searchList.filter((item) => toLower(item.title).indexOf(val.target.value) > -1)
        if (val.target.value === '') {
          result = searchList
        }
        setSearchData(result)
      }),
    {
      debounceWait: 500,
      manual: true,
    },
  )

  return (
    <div className=" bg-181818">
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
              <Row justify="center">
                <Col
                  xs={{ span: 18 }}
                  sm={{ span: 16 }}
                  md={{ span: 16 }}
                  lg={{ span: 21 }}
                  xl={{ span: 21 }}
                  className="relative"
                >
                  <Row
                    justify="center"
                    className="bg-black absolute z-2 top-_rc43 py-rc20 transform -translate-x-1/2 left-rc_50 w-full"
                  >
                    <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 11 }} lg={{ span: 3 }} xl={{ span: 3 }}>
                      <p className="  w-full text-white text-rc22 mr-rc_5">
                        Search and <strong>filter</strong> articles
                      </p>
                    </Col>
                    <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 11 }} lg={{ span: 20 }} xl={{ span: 20 }}>
                      <div className="flex flex-row justify-end">
                        {CheckBoxData.map((item) => (
                          <BlobCheckBox onClick={() => toggle(item)} selected={isSelected(item)} key={item}>
                            {item}
                          </BlobCheckBox>
                        ))}
                        <Input
                          placeholder="Search articles …"
                          style={{
                            width: 306,
                            marginLeft: 30,
                          }}
                          onChange={run}
                          className="blogInput"
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 16 }} lg={{ span: 21 }} xl={{ span: 21 }}>
                  <Row align="top" className=" mt-rc_10" gutter={25}>
                    {searchData.map((item, index) => (
                      <FloadCard {...item} key={index} bgColor="black" textColor="white" />
                    ))}
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
