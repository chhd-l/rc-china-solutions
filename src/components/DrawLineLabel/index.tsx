import styled from 'styled-components'

type DrawLineLabelProps = {
  backGroundColor?: string
}
export const DrawLineLabel = styled.span<DrawLineLabelProps>`
  @keyframes drawline {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
  display: inline-block;
  position: relative;
  &::before {
    content: '';
    background: ${(props) => props?.backGroundColor || '#000'};
    position: absolute;
    height: 4px;
    bottom: 4px;
    left: 0px;
    width: 0%;
    animation: 1s drawline;
    animation-fill-mode: forwards;
    animation-delay: 1s;
  }
`
