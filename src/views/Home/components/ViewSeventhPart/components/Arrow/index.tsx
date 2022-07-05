import styled from 'styled-components'
import left_Arrow from '../../../../../../assets/image/arrow-right-black.svg'

export const Arrow = styled.span`
  font-size: 16px;
  font-weight: bold;
  transform: translateX(0px);
  display: inline-block;
  cursor: pointer;
  margin-right: 60px;
  &:hover {
    transform: translateX(10px);
    transition: all 0.25s ease;
  }
  &::before {
    content: '' !important;
    background-image: url(${left_Arrow});
    background-size: contain;
    width: 14px;
    height: 18px;
    vertical-align: middle;
    background-repeat: no-repeat;
    display: inline-block !important;
    margin-right: 8px;
    transition: all 0.25s ease;
  }
`
