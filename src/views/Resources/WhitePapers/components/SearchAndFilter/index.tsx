import { Col, Row } from 'antd'
import { SearchInput } from '../SearchInput'
import { Wrapper } from '../Wrapper'
import { searchItem } from './modules'

const SearchAndFilter = () => {
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
              <p key={child.label}>
                {child.label}
                <span>({child.count})</span>
              </p>
            ))}
          </Wrapper>
        ))}
      </Col>
      <Col xs={{ span: 18 }} sm={{ span: 16 }} md={{ span: 11 }} lg={{ span: 11 }} xl={{ span: 16 }}></Col>
    </Row>
  )
}

export default SearchAndFilter
