import { Col, Row } from 'antd'
import { SearchInput } from '../SearchInput'
import { Wrapper } from '../Wrapper'
import { searchContent, searchItem, SearchValue } from './mockData'
import { useRequest, useSelections } from 'ahooks'
import { MyCheckBox } from '../MyCheckBox'
import MyCart from '../MyCart'
import { useState } from 'react'
import { toLower } from 'lodash'

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
    <Row>
      <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 11 }} lg={{ span: 11 }} xl={{ span: 8 }}>
        <Wrapper>
          <p className=" text-rc18">Search Resources</p>
          <SearchInput placeholder="Type to search ..." onChange={(e) => run(e.target.value)} />
        </Wrapper>
        {searchItem.map((item) => (
          <Wrapper key={item.title}>
            <p className=" text-rc18">{item.title}</p>
            {item.list.map((child) => (
              <p
                key={child.label}
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
          {searchData.map((item) => (
            <Col
              xs={{ span: 18 }}
              sm={{ span: 16 }}
              md={{ span: 11 }}
              lg={{ span: 11 }}
              xl={{ span: 8 }}
              key={item.path}
            >
              <MyCart {...item} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}

export default SearchAndFilter
