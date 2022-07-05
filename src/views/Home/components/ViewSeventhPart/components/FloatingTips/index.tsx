import styled from 'styled-components'

export const FloatingTips = styled.div`
  width: 119px;
  height: 32px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 0px 8px 0px 4px;
  position: absolute;
  font-size: 16px;
  color: var(--primary-color);
  text-align: center;
  top: 0;
  right: 0;
  font-weight: 400;
  transition: transform 0.45s cubic-bezier(0.3, 0.4, 0.2, 1), background-color 0.15s ease;
`
