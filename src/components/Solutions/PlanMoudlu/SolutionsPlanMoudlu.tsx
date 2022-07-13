import { useEffect, useState } from 'react'
import './index.less'

type SolutionsPlanMoudluType = {
  title?: string
  spans?: string[]
  bg?: boolean
}

const SolutionsPlanMoudlu = ({ title, spans, bg = true }: SolutionsPlanMoudluType) => {
  const [scrollTop, setScrollTop] = useState(0)

  const handlScroll = () => {
    const windowTop = document.querySelector('#test')?.getBoundingClientRect().top || 0
    if (windowTop < 600 && windowTop > -800) {
      setScrollTop(windowTop)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handlScroll, true)
    return () => {
      window.removeEventListener('scroll', handlScroll, true)
    }
  }, [])

  return (
    <section id="test" className="SolutionsPlanMoudlu relative overflow-hidden">
      <div className="using-image absolute top-0 left-0" style={{ filter: bg ? 'grayscale(1)' : '' }}>
        <div
          className="section_06_bg"
          style={{
            backgroundPositionY: (scrollTop > 0 ? '-' + scrollTop / 2 : Math.abs(scrollTop) / 2) + 'px'
          }}
        />
      </div>
      <div className="max-w-rc900 m-auto text-white">
        <div className="text-rc45 leading-rc55">
          {title || 'Plan better. Create an efficient supply chain. Make the planet a healthy place to live'}
        </div>
        <div className="flex justify-between text-rc17 leading-rc32 mt-rc60">
          {spans?.map((str, idx) => (
            <div
              className={`flex-1 pt-rc15 border-t border-solid border-gray-rgba209 ${idx !== 0 && 'ml-rc60'}`}
              key={idx}
            >
              {str}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionsPlanMoudlu
