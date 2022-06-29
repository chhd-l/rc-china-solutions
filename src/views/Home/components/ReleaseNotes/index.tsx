import styled from 'styled-components'
import MyTitle from '../MyTitle'

const Wrapper = styled.div`
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 4px 4px 0px;
  /* margin-right: 7%; */
  width: 1200px;
  margin: 0 auto;
`
const List = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px dashed #e6e6e6;
  /* line-height: 56px; */
  padding: 10px;
  font-size: 16px;
`
const data = [
  {
    date: '15 June 2022',
    type: 'HTTP API',
    text: 'Published basic APIs for subscription and marketing modules, and improved other basic modules',
  },
  {
    date: '15 June 2022',
    type: 'Seller Center',
    text: 'Published subscription, marketing management module and intelligent recommendation function',
  },
  {
    date: '13 May 2022',
    type: 'HTTP API',
    text: 'DTC platform API basic version released',
  },
  {
    date: '13 May 2022',
    type: 'Seller Center',
    text: 'Merchants can manage products in the Seller Center and provide products to the consumers to place orders in Mini program, then Merchants can complete the delivery process with Seller Center.',
  },
]

const ReleaseNotes = () => {
  return (
    <div className=" mt-am56 mb-am112">
      <MyTitle>Release Notes</MyTitle>
      <Wrapper className="mt-am18">
        {data.map((item) => (
          <List key={item.text}>
            <div className=" text-left flex flex-row ml-6 text-am_568300">
              <div className="w-40 text-left">{item.date}</div>
              <div className="w-24 text-left">{item.type}</div>
            </div>
            <div className=" text-left ml-28  leading-7">{item.text}</div>
          </List>
        ))}
      </Wrapper>
    </div>
  )
}

export default ReleaseNotes
