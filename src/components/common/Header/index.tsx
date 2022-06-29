import { useState } from 'react'
import { HeaderBox } from './components/HeaderBox'
import './index.less'
import LOGO_white from '../../../assets/image/LOGO_white.png'
import { Menu } from './components/Menu'
import { Button } from 'antd'
import { SubMenu } from './components/SubMenu'

export const Header = () => {
  const [current, setCurrent] = useState('')

  // const onClick: MenuProps['onClick'] = (e) => {
  //   console.log('click ', e)
  //   setCurrent(e.key)
  // }

  // const getCurrent = (key: string) => setCurrent(key)

  return (
    <HeaderBox>
      <img src={LOGO_white} alt="" className="h-rc18 w-rc97" />
      <Menu />
      <Button>Request a demo</Button>
    </HeaderBox>
  )
}
