import React, { Component } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { slickImgList } from '../../module'

type ImgProps = {
  backgroundImg: string
}
const Img = styled.div<ImgProps>`
  background: url(${(props) => props.backgroundImg}) no-repeat;
  background-size: 100% 100%;
  width: 384px;
  height: 306px;
  color: var(--primary-color);
  cursor: pointer;
  position: relative;
  span {
    border-bottom: 3px solid transparent;
  }
  :hover {
    span {
      border-bottom: 3px solid var(--primary-color);
    }
  }
`
const SlickSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <div>
      <Slider {...settings}>
        {slickImgList.map((item) => (
          <div key={item.path} style={{ width: 480, height: 565 }}>
            <Img backgroundImg={item.path}>
              <span className=" text-rc24 absolute left-4 bottom-rc43 ">{item.title}</span>
            </Img>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SlickSlider
