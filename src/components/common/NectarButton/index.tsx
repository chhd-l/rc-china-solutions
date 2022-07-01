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
  /* width: ${(props) => props?.width || '162px'}; */
  font-size: 16px;
  padding: 9px 35px;
  border-radius: 30px;
  cursor: pointer;
  display: inline-block;
  :hover {
    border: 3px solid ${(props) => props.hoverBorderColor || '#ffffff'};
  }
`
