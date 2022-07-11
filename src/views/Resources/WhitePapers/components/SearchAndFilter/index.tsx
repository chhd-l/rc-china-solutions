import { Col, Row } from 'antd'
import { SearchInput } from '../SearchInput'
import { Wrapper } from '../Wrapper'
import { searchContent, searchItem, SearchValue } from './modules'
import { useSelections } from 'ahooks'
import { MyCheckBox } from '../MyCheckBox'
import MyCart from '../MyCart'

const SearchAndFilter = () => {
  const { selected, isSelected, toggle } = useSelections(SearchValue)
  console.log('selected', selected)
  return (
    <Row>
      <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 11 }} lg={{ span: 11 }} xl={{ span: 8 }}>
        <Wrapper>
          <p className=" text-rc18">Search Resources</p>
          <SearchInput placeholder="Type to search ..." />
        </Wrapper>
        {searchItem.map((item) => (
          <Wrapper key={item.title}>
            <p className=" text-rc18">{item.title}</p>
            {item.list.map((child) => (
              <p
                key={child.label}
                onClick={() => {
                  toggle(child.value)
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
        <Row gutter={[20, 20]}>
          {searchContent.map((item) => (
            <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 11 }} lg={{ span: 11 }} xl={{ span: 8 }}>
              <MyCart {...item} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}

export default SearchAndFilter
