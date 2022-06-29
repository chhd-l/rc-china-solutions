import { Input, InputProps } from 'antd'
import styled from 'styled-components'
import { CloseOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { IconFont } from '../../../../IconFont'

type MyInputProps = {
  backgroundcolor?: string
}
export const MyInput = styled(Input)<MyInputProps>`
  width: 220px;
  color: black;
  background-color: ${(props) => props.backgroundcolor || '#FBFBFB'};
  border-radius: 4px;
  .ant-input {
    background-color: ${(props) => props.backgroundcolor || '#FBFBFB'};
    color: ${(props) => (props?.backgroundcolor === '#0B121C' ? '#fff' : '#0B121C' || '')};
  }
`

type SearchInputProps = Omit<InputProps, 'suffix' | 'prefix' | 'allowClear ' | 'onChange' | 'value'> & {
  onChange: (value: string) => void
  value: string
}

export const SearchInput = ({ value, onChange, ...restProps }: SearchInputProps) => {
  return (
    <MyInput
      suffix={value && <CloseOutlined style={{ color: '#9E9898' }} onClick={() => onChange('')} />}
      prefix={<IconFont type="icon-bianzu" />}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...restProps}
    />
  )
}
