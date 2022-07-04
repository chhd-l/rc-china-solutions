import styled from 'styled-components'

type IconProps = {
  isActive?: boolean
}
export const Icon = styled.div<IconProps>`
  width: 30px;
  height: 30px;
  /* position: absolute;
  right: 20px; */
  border-radius: 30px 30px;
  transition: border-color 0.15s ease;

  ::before {
    content: ' ';
    top: 14px;
    left: 6px;
    margin-top: -2px;
    width: 14px;
    height: 2px;
    position: absolute;
    background-color: ${(props) => (props.isActive ? 'var(--blue)' : 'var(--primary-color)')};
    transition: background-color 0.15s ease;
  }

  ::after {
    content: ' ';
    top: 6px;
    left: 14px;
    width: 2px;
    margin-left: -2px;
    height: 14px;
    position: absolute;
    background-color: ${(props) => (props.isActive ? 'var(--blue)' : 'var(--primary-color)')};
    transition: transform 0.45s cubic-bezier(0.3, 0.4, 0.2, 1), background-color 0.15s ease;
    transform: scale(${(props) => (props.isActive ? 1 : 'none')}, 0);
  }
`
