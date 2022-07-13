import { useRequest, useSelections } from 'ahooks'
import { Col, Row, Input } from 'antd'
import FloadCard from '../../../components/FloatCard'
import BounceArrow from '../../../components/BounceArrow'
import BlobCheckBox from './components/BlobCheckBox'
import './index.less'
import { CheckBoxData, searchList } from './mock'
import { useState } from 'react'
import { toLower } from 'lodash'

type ItemType = typeof searchList[0]
const Blog = () => {
  const { isSelected, toggle, selected } = useSelections(CheckBoxData)
  const [searchData, setSearchData] = useState({ check: '', keyWords: '' })
  const { loading, data } = useRequest(
    async () => {
      const res: any = await new Promise((resolve) => {
        setTimeout(() => {
          let search = searchList.filter((item) => toLower(item.desc).indexOf(toLower(searchData.keyWords)) > -1)
          if (searchData.keyWords === '') {
            search = searchList
          }
          console.log('search', search, selected)
          if (selected.length) {
            search = search.filter((item) => selected.includes(item.tip))
          }
          resolve(search)
        }, 1000)
      })
      return res
    },
    {
      debounceWait: 1000,
      refreshDeps: [searchData],
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
                <div className="row-bg-overlay" />
                <Row justify="center">
                  <Col span={20} style={{ zIndex: 10 }}>
                    <p className="text-white text-rc20 border-gray-rgba255 border-b pb-rc20 mb-rc100">Deloitte Blog</p>
                    <Row justify="center">
                      <Col
                        xs={{ span: 18 }}
                        sm={{ span: 16 }}
                        md={{ span: 22 }}
                        lg={{ span: 20 }}
                        xl={{ span: 17 }}
                        style={{ zIndex: 10 }}
                      >
                        <p className="text-rc72 text-white text-rc7 leading-rc75 animate__animated animate__fadeInDown">
                          Thought leadership that will inspire your digital transformation journey.
                        </p>
                      </Col>
                      <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 22 }} lg={{ span: 11 }} xl={{ span: 7 }}>
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
                  <Row className="bg-black absolute z-2 top-_rc43 py-rc20 transform -translate-x-1/2 left-rc_50 w-full">
                    <Col
                      xs={{ span: 18 }}
                      sm={{ span: 16 }}
                      md={{ span: 11 }}
                      lg={{ span: 3 }}
                      xl={{ span: 3 }}
                      className=" ml-rc45 mr-rc120"
                    >
                      <p className="  w-full text-white text-rc22 mr-rc_5">
                        Search and <strong>filter</strong> articles
                      </p>
                    </Col>
                    {CheckBoxData.map((item) => (
                      <Col
                        xs={{ span: 18 }}
                        sm={{ span: 16 }}
                        md={{ span: 24 }}
                        lg={{ span: 20 }}
                        xl={{ span: 2 }}
                        className=" mr-0 lg:mr-rc20"
                      >
                        <BlobCheckBox
                          className="w-full lg:w-rc119"
                          onClick={() => {
                            toggle(item)
                            setSearchData({ ...searchData, check: item })
                          }}
                          selected={isSelected(item)}
                          key={item}
                        >
                          {item}
                        </BlobCheckBox>
                      </Col>
                    ))}

                    <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 11 }} lg={{ span: 20 }} xl={{ span: 3 }}>
                      <Input
                        placeholder="Search articles …"
                        style={{
                          width: 306,
                          marginLeft: 25,
                          height: 96,
                        }}
                        onChange={(e) => setSearchData({ ...searchData, keyWords: e.target.value })}
                        className="blogInput w-full lg:w-rc306"
                      />
                    </Col>
                  </Row>
                </Col>
                <Col
                  xs={{ span: 18 }}
                  sm={{ span: 16 }}
                  md={{ span: 16 }}
                  lg={{ span: 21 }}
                  xl={{ span: 21 }}
                  id="content"
                >
                  <Row align="top" className=" mt-rc_15 relative" gutter={25}>
                    {data &&
                      data?.map((item: ItemType, index: number) => (
                        <FloadCard {...item} key={index} bgColor="black" textColor="white" />
                      ))}
                    {loading && <div className=" bg-black absolute h-full w-full z-2 opacity-50" />}
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
