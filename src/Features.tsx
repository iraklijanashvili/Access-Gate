import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import MacBook from "../src/assets/MacBook.svg";
import FeaturesBackground from "../src/assets/ScreenEffect.svg";
import DimondIcon from "../src/assets/DimondIcon.svg";
import { SectionContainer, MiddleContent, TextParagraph } from "./Home";
import Rectangle from "../src/assets/Rectangle.svg";
import SqureIcon from "../src/assets/SqureIcon.svg";

const ResponsiveContainer = styled(SectionContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const appearFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const appearFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

interface AnimatedProps {
  animate: boolean;
}

const MacBookSizeContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const FeaturesBackgroundPositionContainer = styled(MiddleContent)`
  top: 0%;
  left: 0%;
  height: 85%;
  display: flex;
  padding-top: 20px;
  overflow: hidden;
`;

const MainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const FlexboxContainer = styled(MainTextContainer)`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  justify-content: center;
  align-items: start;
  justify-content: start;
`;

const FlexBoxSecContainer = styled(MainTextContainer)`
  align-items: start;
  justify-content: start;
  overflow: hidden;
`;

const DimondSqureIcons = styled.img`
  padding-left: 12px;
`;

const HidenImage = styled.img<AnimatedProps>`
  display: block;
  animation: ${appearFromLeft} 1s ease forwards;
  animation-play-state: ${(props) => (props.animate ? "running" : "paused")};
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const HeaderText = styled.h1<AnimatedProps>`
  padding: 0px 15px;
  animation: ${appearFromLeft} 1s ease forwards;
  animation-play-state: ${(props) => (props.animate ? "running" : "paused")};

  @media only screen and (max-width: 768px) {
    padding: 0px 25px;
    text-align: center;
  }
`;

const AnimatedText = styled(TextParagraph)<AnimatedProps>`
  animation: ${appearFromRight} 1s ease forwards;
  animation-play-state: ${(props) => (props.animate ? "running" : "paused")};
  padding: 0 10px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #fff; // or any color you prefer
`;

const Features: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    const images = [
      MacBook,
      FeaturesBackground,
      DimondIcon,
      Rectangle,
      SqureIcon,
    ];

    Promise.all(
      images.map((image) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = image;
          img.onload = resolve;
        });
      })
    ).then(() => {
      setLoading(false);
      setTimeout(() => setAnimate(true), 100);
    });
  }, []);

  if (loading) {
    return <LoadingContainer></LoadingContainer>;
  }

  return (
    <>
      <ResponsiveContainer backGroundImage={Rectangle}>
        <MacBookSizeContainer>
          <HidenImage src={MacBook} alt="" animate={animate} />
          <FeaturesBackgroundPositionContainer>
            <HidenImage src={FeaturesBackground} alt="" animate={animate} />
          </FeaturesBackgroundPositionContainer>
          <MainTextContainer>
            <HeaderText animate={animate}>We Create Something New</HeaderText>
            <AnimatedText animate={animate}>
              We have created a new product that will help designers,
              developers, and companies create websites for their startups
              quickly and easily.
            </AnimatedText>
            <FlexboxContainer>
              <FlexBoxSecContainer>
                <DimondSqureIcons src={SqureIcon} alt="" />
                <AnimatedText bold animate={animate}>
                  30 New feature pages
                </AnimatedText>
                <AnimatedText animate={animate}>
                  Samples will show you the feeling on how to play around using
                  the components.
                </AnimatedText>
              </FlexBoxSecContainer>
              <FlexBoxSecContainer>
                <DimondSqureIcons src={DimondIcon} alt="" />
                <AnimatedText bold animate={animate}>
                  Useful Symbol Components
                </AnimatedText>
                <AnimatedText animate={animate}>
                  Startup Framework contains components and complex blocks which
                  can easily.
                </AnimatedText>
              </FlexBoxSecContainer>
            </FlexboxContainer>
          </MainTextContainer>
        </MacBookSizeContainer>
      </ResponsiveContainer>
    </>
  );
};

export default Features;
