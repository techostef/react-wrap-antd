/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import Carousel, { CarouselEffect, CarouselDotPosition } from '../Carousel';
import { Radio } from 'antd';

export default {
  title: 'DataDisplay/Carousel',
  component: Carousel,
  argTypes: {
    afterChange: argTypesEnum.EVENTS,
    autoplay: argTypesEnum.BOOL_FALSE,
    beforeChange: argTypesEnum.EVENTS,
    className: argTypesEnum.STRING,
    dataTestId: argTypesEnum.STRING,
    dotPosition: argTypesEnum.RADIO({
      defaultValue: CarouselDotPosition.bottom,
      options: CarouselDotPosition,
    }),
    dots: argTypesEnum.BOOL_TRUE,
    easing: argTypesEnum.STRING,
    effect: argTypesEnum.RADIO({
      defaultValue: CarouselEffect.scrollx,
      options: CarouselEffect,
    }),
  },
};

const TemplateBasicCarousel = () => {
 const onChange = (a, b, c) => {
    console.log(a, b, c);
  }
  
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  
  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  )
}

const TemplateCarouselWithPosition = () => {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  
  const [dotPosition, setDotPosition] = useState(CarouselDotPosition.top);

  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };
  
  return (
    <>
      <Radio.Group onChange={handlePositionChange} value={dotPosition} style={{ marginBottom: 8 }}>
        <Radio.Button value={CarouselDotPosition.top}>Top</Radio.Button>
        <Radio.Button value={CarouselDotPosition.bottom}>Bottom</Radio.Button>
        <Radio.Button value={CarouselDotPosition.left}>Left</Radio.Button>
        <Radio.Button value={CarouselDotPosition.right}>Right</Radio.Button>
      </Radio.Group>
      <Carousel dotPosition={dotPosition}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </>
  );
}

const TemplateCarouselWithAutolay = () => {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  
  return (
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  )
}

const TemplateCarouselWithEffect = () => {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  
  return (
    <Carousel effect={CarouselEffect.fade}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  )
}

export const CarouselBasic = TemplateBasicCarousel.bind({});
export const CarouselWithPosition = TemplateCarouselWithPosition.bind({});
export const CarouselWithAutoplay = TemplateCarouselWithAutolay.bind({});
export const CarouselWithEffect = TemplateCarouselWithEffect.bind({});
