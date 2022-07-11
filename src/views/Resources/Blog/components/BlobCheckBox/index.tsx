import styled from 'styled-components'

type BlobCheckBoxProps = {
  selected: boolean
}
const BlobCheckBox = styled.div<BlobCheckBoxProps>`
  width: 119px;
  height: 96px;
  line-height: 96px;
  text-align: center;
  color: var(--primary-color);
  margin-right: 10px;
  display: inline-block;
  background-color: ${(props) => (props.selected ? '#0037ff' : '#000000')};
  border: 1px solid ${(props) => (props.selected ? '#0037ff' : '#2C2C2C')};
  &:hover {
    background-color: #111;
  }
`

export default BlobCheckBox
