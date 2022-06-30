import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { DownOutlined } from '@ant-design/icons'
import { ValuesType } from '../../../../../type'
import { SubMenu } from '../SubMenu'
import { useState } from 'react'
const items = [
  {
    label: 'Solutions',
    path: '/solutions',
  },
  {
    label: 'Resources',
    path: '/resources',
  },
] as const

export type Current = ValuesType<typeof items>['label'] | 'default'

const MenuItem = styled.div`
  color: #eaeaea;
  font-size: 14px;
  font-weight: 600;
  padding: 0 42px;
  cursor: pointer;
  /* height: 62px; */
  line-height: 62px;
  :hover {
    color: var(--primary-color);
  }
`

export const Menu = () => {
  const navigate = useNavigate()
  const [current, setCurrent] = useState<Current>('default')
  const getCurrent = (key: Current) => setCurrent(key)

  return (
    <div className="flex flex-row justify-center w-full h-full">
      {items.map((item) => (
        <MenuItem
          key={item.label}
          onClick={() => navigate(item.path)}
          onMouseEnter={() => setCurrent(item.label)}
          onMouseLeave={() => setCurrent('default')}
        >
          {item.label}
          {/* <DownOutlined /> */}
          {<SubMenu current={current} getCurrent={getCurrent} />}
        </MenuItem>
      ))}
    </div>
  )
}
