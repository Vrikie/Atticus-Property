import React, { useState, useRef, useEffect } from "react";
import * as IonIcons from "react-icons/io";
import styled, { css } from "styled-components";

const FaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  background-color: #9fc7d6;
`;

const FaderSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const FaderSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FaderImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const FaderContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #fff;

  h1 {
    font-size: clamp(1rem, 8vw, 3rem);
    font-family: Arial, Helvetica, sans-serif;
    text-shadow: 0px 0px 15px black;
    text-align: center;
  }
`;

const FaderButtons = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
`;

const arrowButtons = css`
  width: 40px;
  height: 40px;
  color: #fff;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 40px;
  padding: 10px;
  user-select: none;
  transition: 0.5;

  &:hover {
    background: rgb(20, 47, 113);
    transform: scale(1.1);
  }
`;

const PrevArrow = styled(IonIcons.IoIosArrowBack)`
  ${arrowButtons}
`;

const NextArrow = styled(IonIcons.IoIosArrowForward)`
  ${arrowButtons}
`;

const Fader = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 5000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="Display">
      <FaderWrapper>
        {slides.map((slide, index) => {
          return (
            <FaderSlide
              key={index}
              className={index === current ? "fade active" : "fade"}
            >
              {index === current && (
                <FaderSlider>
                  <FaderImg src={slide.img} alt={slide.alt} />
                  <FaderContent>
                    <h1>{slide.text}</h1>
                  </FaderContent>
                </FaderSlider>
              )}
            </FaderSlide>
          );
        })}
        <FaderButtons>
          <PrevArrow className="l-arrow" onClick={prevSlide} />
          <NextArrow className="r-arrow" onClick={nextSlide} />
        </FaderButtons>
      </FaderWrapper>
    </div>
  );
};

export default Fader;