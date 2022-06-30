import { HeaderBox } from './components/HeaderBox'
import './index.less'
import LOGO_white from '../../../assets/image/LOGO_white.png'
import { Menu } from './components/Menu'
import { Button } from 'antd'

export const Header = () => {
  return (
    <HeaderBox>
      <img src={LOGO_white} alt="" className="h-rc18 w-rc97" />
      <Menu />
      <Button>Request a demo</Button>
    </HeaderBox>
  )
}
