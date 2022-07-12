import { MutableRefObject } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { slickImgList } from '../../module'
import './index.less'

type ImgProps = {
  backgroundImg: string
}
const Img = styled.div<ImgProps>`
  background: url(${(props) => props.backgroundImg}) center no-repeat;
  background-size: 100% 100%;
  width: 100%;
  background-position: center center;
  -webkit-background-size: cover;
  height: 306px;
  max-height: 45vh;
  color: var(--primary-color);
  cursor: pointer;
  position: relative;
`

type SlickSliderProps = {
  setSlideIndex: (count: any) => void
  sliderRef: MutableRefObject<Slider | undefined>
}

const SlickSlider = ({ sliderRef, setSlideIndex }: SlickSliderProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    swipeToSlide: true,
    arrows: false,
    beforeChange: (_: number, next: number) => setSlideIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div>
      <Slider ref={(slider) => (sliderRef.current = slider!)} {...settings}>
        {slickImgList.map((item) => (
          <div className="group py-rc_10" key={item.title}>
            <div className="owl-item">
              <div className="item">
                <div className="w-full">
                  <div className="industry-image">
                    <span>
                      <img src={item.path} alt="" className=" block" />
                    </span>
                  </div>
                  <div className="industry-title">
                    <span className=" group-hover:underline">{item.title}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          // <div key={item.path} style={{ width: 384, height: 251 }} className="group ">
          //   <Img backgroundImg={item.path} className="industry-image">
          //     <span className="text-rc24 absolute left-rc10 bottom-4  group-hover:underline">{item.title}</span>
          //   </Img>
          // </div>
        ))}
      </Slider>
    </div>
  )
}

export default SlickSlider
