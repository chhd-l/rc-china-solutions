import { Col, Row, TreeSelect } from 'antd'
import { SearchInput } from '../SearchInput'
import { Wrapper } from '../Wrapper'
import { searchContent, searchItem, SearchValue, treeData } from './mockData'
import { useRequest, useSelections } from 'ahooks'
import { MyCheckBox } from '../MyCheckBox'
import CaseStudiesCart from '../CaseStudiesCart'
import { useState } from 'react'
import { toLower } from 'lodash'
import './index.less'

const SearchAndFilter = () => {
  const { isSelected, toggle } = useSelections(SearchValue)
  const [searchData, setSearchData] = useState(searchContent)
  const { loading, run } = useRequest(
    (val) =>
      new Promise(() => {
        const search = searchContent.filter((item) => toLower(item.desc).indexOf(val) > -1)
        setSearchData(search)
      }),
    {
      debounceWait: 1000,
      manual: true,
    },
  )

  return (
    <Row className="my-rc100">
      <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 11 }} lg={{ span: 11 }} xl={{ span: 8 }}>
        <p className=" text-rc35 text-white font-light  text-left w-rc315">
          Search and <span className=" font-semibold">filter</span> case studies
        </p>
        <Wrapper>
          <p className=" text-rc18">Search Case Studies</p>
          <SearchInput placeholder="Type to search ..." onChange={(e) => run(e.target.value)} />
        </Wrapper>
        <Wrapper>
          <p className=" text-rc18">Industry</p>
          {/* <SearchInput placeholder="Type to search ..." onChange={(e) => run(e.target.value)} /> */}
          <TreeSelect
            style={{ width: '100%' }}
            // value={value}
            showArrow
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            treeData={treeData}
            placeholder="Please select"
            treeDefaultExpandAll
            // onChange={onChange}
          />
        </Wrapper>
        {searchItem.map((item, index) => (
          <Wrapper key={index}>
            <p className=" text-rc18">{item.title}</p>
            {item.list.map((child, idx) => (
              <p
                key={idx}
                onClick={() => {
                  toggle(child.value)
                  const res = searchData.filter((it) => toLower(it.desc).indexOf(toLower(child.value)) > -1)
                  setSearchData(res)
                }}
              >
                <MyCheckBox checked={isSelected(child.value)}>
                  <span className="text-white">{child.label}</span>
                </MyCheckBox>
              </p>
            ))}
          </Wrapper>
        ))}
      </Col>

      <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 11 }} lg={{ span: 11 }} xl={{ span: 16 }}>
        <Row gutter={[20, 20]} align="top">
          {searchData.map((item, index) => (
            <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 11 }} lg={{ span: 11 }} xl={{ span: 8 }} key={index}>
              <CaseStudiesCart {...item} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}

export default SearchAndFilter
