import { HeaderBox } from './components/HeaderBox'
import './index.less'
import LOGO_white from '../../../assets/image/LOGO_white.png'
import { Menu } from './components/Menu'
import { NectarButton } from '../NectarButton'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()
  return (
    <HeaderBox>
      <img src={LOGO_white} alt="" className="h-rc18 w-rc97 cursor-pointer" onClick={() => navigate('/')} />
      <Menu />
      <NectarButton borderColor="#0037ff">Request a demo</NectarButton>
    </HeaderBox>
  )
}
