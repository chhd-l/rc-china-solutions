import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ValuesType } from '../../../../../type'
import { useState } from 'react'
import { MenuData } from '../../../../../router/MenuData'
import SubMenu from '../SubMenu'

export type Current = ValuesType<typeof MenuData>['label'] | 'default'

const MenuItem = styled.div`
  color: #eaeaea;
  font-size: 14px;
  font-weight: 600;
  padding: 0 42px;
  cursor: pointer;
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
    <div className="flex flex-row justify-center  h-full">
      {MenuData.map((item) => (
        <MenuItem
          key={item.label}
          onClick={() => navigate(item.path)}
          onMouseEnter={() => setCurrent(item.label)}
          onMouseLeave={() => setCurrent('default')}
        >
          <span>{item.label}</span>
          {<SubMenu current={current} getCurrent={getCurrent} subMenuData={item.children} />}
        </MenuItem>
      ))}
    </div>
  )
}
