import './index.less'
import { LeftContent } from './modules/footer'

const Footer = () => {
  return (
    <div className='flex Footer'>
      <div className="FooterLeft flex flex-col">
        <div className="flex-1 flex">
            {
                LeftContent.map((item, idx) => <div key={idx} className={`${idx !== 0 && 'flex-1'} LeftContent`}>
                    <div className={`${idx === 0 && 'hover:cursor-pointer hover:underline'} title mb-rc20`}>{item.title}</div>
                    {item.span.map((str, index) => <div key={index} className='h-rc38 hover:cursor-pointer hover:underline'>{str}</div>)}
                </div>)
            }
        </div>
        <div className="landmark flex justify-between items-center">
          <span>Copyright © 2022 Deloitte</span>
          <span>Privacy policy</span>
          <span>Cookie policy</span>
          <span>Support</span>
          <span>o9 Guides</span>
        </div>
      </div>
      <div className='FooterRight flex-1'></div>
    </div>
  )
}

export default Footer
