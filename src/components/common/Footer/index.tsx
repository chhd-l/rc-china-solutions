import { useNavigate } from 'react-router-dom'
import './index.less'
import { LeftContent } from './modules/footer'

const Footer = () => {
  const navigate = useNavigate()

  return (
    <div className='Footer'>
      <div className="flex">
        <div className="FooterLeft flex flex-col">
          <div className="flex-1 flex">
            {LeftContent.map((item, idx) => (
              <div key={idx} className={`${idx !== 0 && 'flex-1'} LeftContent`}>
                <div className='title mb-rc20'>
                  <span onClick={() => item.url && navigate(item.url)} className={`${item.url && 'cursor-pointer hover:underline'}`}>{item.title}</span>
                </div>
                {item.span.map((str, index) => (
                  <div key={index} className="h-rc38">
                    <span onClick={() => str.url && navigate(str.url)} className={`${str.url && 'cursor-pointer hover:underline'}`}>{str.span}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="FooterRight flex-1"></div>
      </div>
      <div className="landmark flex items-center">
        <span className='mr-rc_2'>Copyright © 2022 Deloitte</span>
        <span className='mr-rc_2'>Privacy policy</span>
        <span className='mr-rc_2'>Cookie policy</span>
        <span className='mr-rc_2'>Support</span>
        <span>Deloitte Guides</span>
      </div>
    </div>
  )
}

export default Footer
