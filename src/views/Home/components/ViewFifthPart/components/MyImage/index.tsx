import styled from 'styled-components'

type MyImageProps = {
  image: string
}
export const MyImage = styled.div<MyImageProps>`
  background: url(${(props) => props.image}) center no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 570px;
`
