import { useState, useEffect } from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import { SectionContainer } from "./Home";
import MacBook from "../src/assets/MacBook.svg";
import FeaturesBackground from "../src/assets/ScreenEffect.svg";
import { MiddleContent } from "./Home";
import { TextParagraph } from "./Home";
import DimondIcon from "../src/assets/DimondIcon.svg";
import SqureIcon from "../src/assets/SqureIcon.svg";
import Rectangle from "../src/assets/Rectangle.svg";

const GlobalStyle = createGlobalStyle`
  html, body {
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
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

const MacBookSizeContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: start;
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
`;
const FlexBoxSecContainer = styled(MainTextContainer)`
  align-items: start;
  overflow: hidden;
`;
const DimondSqureIcons = styled.img`
  padding-left: 12px;
`;
const HidenImage = styled.img`
  display: block;
  animation: ${appearFromLeft} 1s ease forwards;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const HeaderText = styled.h1`
  padding: 0px 0px;
  animation: ${appearFromLeft} 1s ease forwards;
  @media only screen and (max-width: 768px) {
    padding: 0px 25px;
    text-align: center;
  }
`;
const AnimatedText = styled(TextParagraph)`
  animation: ${appearFromRight} 1s ease forwards;
  padding: 0 10px;
`;

export default function Features() {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <GlobalStyle />
      <SectionContainer
        backGroundImage={Rectangle}
        style={{ overflow: "hidden" }}
      >
        {animationStarted && (
          <MacBookSizeContainer>
            <HidenImage src={MacBook} alt="" />
            <FeaturesBackgroundPositionContainer>
              <HidenImage src={FeaturesBackground} alt="" />
            </FeaturesBackgroundPositionContainer>
            <MainTextContainer>
              <HeaderText>We Create Something New</HeaderText>
              <AnimatedText>
                We have created a new product that will help designers,
                developers, and companies create websites for their startups
                quickly and easily.
              </AnimatedText>
              <FlexboxContainer>
                <FlexBoxSecContainer>
                  <DimondSqureIcons src={SqureIcon} alt="" />
                  <AnimatedText bold>30 New feature pages</AnimatedText>
                  <AnimatedText>
                    Samples will show you the feeling on how to play around
                    using the components.
                  </AnimatedText>
                </FlexBoxSecContainer>
                <FlexBoxSecContainer>
                  <DimondSqureIcons src={DimondIcon} alt="" />
                  <AnimatedText bold>Useful Symbol Components</AnimatedText>
                  <AnimatedText>
                    Startup Framework contains components and complex blocks
                    which can easily.
                  </AnimatedText>
                </FlexBoxSecContainer>
              </FlexboxContainer>
            </MainTextContainer>
          </MacBookSizeContainer>
        )}
      </SectionContainer>
    </>
  );
}
