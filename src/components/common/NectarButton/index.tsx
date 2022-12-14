import styled from 'styled-components'

type NectarButtonProps = {
  borderColor?: string
  width?: string
  hoverBorderColor?: string
  color?: string
}
export const NectarButton = styled.div<NectarButtonProps>`
  background-color: transparent;
  color: ${(props) => props.color || '#ffffff'};
  font-weight: bold;
  border: 3px solid ${(props) => props.borderColor || '#999'};
  font-size: 16px;
  padding: 9px 35px;
  border-radius: 30px;
  cursor: pointer;
  display: inline-block;
  transition: all .3s ease;
  :hover {
    border: 3px solid ${(props) => props.color || '#ffffff'};
  }
`
