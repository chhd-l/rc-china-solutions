import { Col, Row } from 'antd'
import { SearchInput } from '../SearchInput'
import { Wrapper } from '../Wrapper'
import { searchContent, searchItem, SearchValue } from './mockData'
import { useRequest, useSelections } from 'ahooks'
import { MyCheckBox } from '../MyCheckBox'
import MyCart from '../MyCart'
import { useState } from 'react'
import { divide, toLower } from 'lodash'

const SearchAndFilter = () => {
  const { isSelected, toggle, selected } = useSelections(SearchValue)
  const [searchData, setSearchData] = useState({ check: '', keyWords: '' })
  const { loading, data } = useRequest(
    async () => {
      const res: any = await new Promise((resolve) => {
        setTimeout(() => {
          let search = searchContent.filter((item) => toLower(item.desc).indexOf(toLower(searchData.keyWords)) > -1)
          if (searchData.keyWords === '') {
            search = searchContent
          }
          if (selected.length) {
            search = search.filter((item) => selected.includes(item.desc))
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
    <Row className=" px-rc90">
      <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 11 }} lg={{ span: 11 }} xl={{ span: 6 }}>
        <Wrapper>
          <p className=" text-rc18">Search Resources</p>
          <SearchInput
            placeholder="Type to search ..."
            onChange={(e) => setSearchData({ ...searchData, keyWords: e.target.value })}
            disabled={loading}
          />
        </Wrapper>
        {searchItem.map((item) => (
          <Wrapper key={item.title}>
            <p className=" text-rc18">{item.title}</p>
            {item.list.map((child) => (
              <p
                key={child.label}
                onClick={() => {
                  toggle(child.value)
                  setSearchData({ ...searchData, check: child.label })
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

      <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 11 }} lg={{ span: 11 }} xl={{ span: 18 }}>
        <Row gutter={[20, 20]} align="top" className="relative">
          {data &&
            data?.map((item: { path: string; desc: string }) => (
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
          {loading && <div className=" bg-black absolute h-full w-full z-2 opacity-50" />}
        </Row>
        {data.length === 0 && <div className="text-gray-999 text-center text-rc18 w-full">No post found</div>}
      </Col>
    </Row>
  )
}

export default SearchAndFilter
