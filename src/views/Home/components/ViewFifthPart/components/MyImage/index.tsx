import styled from 'styled-components'

type MyImageProps = {
  image: string
}
export const MyImage = styled.div<MyImageProps>`
  background: url(${(props) => props.image}) center no-repeat;
  background-size: cover;
  width: 100%;
  /* padding: 300px 0 86px; */
  background-position: center center;
`
