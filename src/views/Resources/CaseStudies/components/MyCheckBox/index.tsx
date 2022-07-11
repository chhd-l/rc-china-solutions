import { PropsWithChildren } from 'react'
import styled from 'styled-components'

type MyCheckBoxProps = PropsWithChildren<{
  checked: boolean
}>
const Box = styled.div<MyCheckBoxProps>`
  width: 18px;
  height: 18px;
  background-color: ${(props) => (props.checked ? '#0037ff' : '#252525')};
  border-width: 3px;
  transition: all 0.15s ease;
  border-color: #5e5e5e;
`
export const MyCheckBox = ({ checked, children }: MyCheckBoxProps) => {
  return (
    <div className="flex flex-row items-start cursor-pointer">
      <Box checked={checked} />
      <div className="px-rc10 leading-rc18">{children}</div>
    </div>
  )
}
