import { useRef, useState } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { slickImgList } from '../../module'

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
  /* span {
    border-bottom: 3px solid transparent;
  }
  :hover {
    span {
      border-bottom: 3px solid var(--primary-color);
    }
  } */
`

type SlickSliderProps = {
  slickGoTo: (e: any) => void
  setSlideIndex: (count: any) => void
}

const SlickSlider = ({ slickGoTo, setSlideIndex }: SlickSliderProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // afterChange: () => setUpdateCount(),
    // beforeChange: (_, next) => setSlideIndex(next),
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
      <Slider ref={(sliderParams) => slickGoTo(sliderParams)} {...settings}>
        {slickImgList.map((item) => (
          <div key={item.path} style={{ width: 480, height: 565 }}>
            <Img backgroundImg={item.path}>
              <span className="text-rc24 absolute left-rc10 bottom-4 hover:underline">{item.title}</span>
              {/* <div className=" text-rc24 absolute left-rc10 h-rc_35 my-rc_10 bottom-0  text-left">
                <a className=" inline-flex items-end">{item.title}</a>
              </div> */}
            </Img>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SlickSlider
