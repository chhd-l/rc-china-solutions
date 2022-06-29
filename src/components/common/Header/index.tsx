import { useState } from 'react'
import { HeaderBox } from './components/HeaderBox'
import './index.less'
import LOGO_white from '../../../assets/image/LOGO_white.png'

export const Header = () => {
  const [current, setCurrent] = useState('SubMenu')

  // const onClick: MenuProps['onClick'] = (e) => {
  //   console.log('click ', e)
  //   setCurrent(e.key)
  // }

  return (
    <HeaderBox>
      <img src={LOGO_white} alt="" className="h-rc18 w-rc97 ml-rc60" />
    </HeaderBox>
  )
}
