import { useState, useEffect } from "react";
import styled from "styled-components";
import HomeBackGround from "../src/assets/Image.svg";
import Ball from "../src/assets/Ball.svg";
import Behance from "../src/assets/Behance.svg";
import LeftArrow from "../src/assets/LeftArrow.svg";
import RightArrow from "../src/assets/RightArrow.svg";
import OffCircle from "../src/assets/OffCircle.svg";
import OnCircle from "../src/assets/OnCircle.svg";
import "./App.css";
import { Link } from "react-router-dom";

export interface StyledCreateAccountProps {
  backGroundColor?: string;
  width?: number | string;
  maxWidth?: number | string;
  hoverColor?: string;
}

export const StyledCreateAccount = styled.button<StyledCreateAccountProps>`
  background-color: ${(props) => props.backGroundColor || ""};
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: white;
  outline: none;
  font-family: "DM Sans", sans-serif;
  padding: 0 20px;
  width: ${(props) => props.width || "230px"};
  max-width: ${(props) => props.maxWidth || ""};
  height: 60px;
  border-radius: 50px;
  &:hover {
    background-color: ${(props) =>
      props.hoverColor || props.backGroundColor || ""};
  }
`;

export const SectionContainer = styled.section<{
  backGroundImage?: string;
  padding?: string;
  backgroundLoaded?: boolean; // Add backgroundLoaded prop
}>`
  display: flex;
  min-height: 100vh;
  background-image: url(${(props) => props.backGroundImage || ""});
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  font-family: "DM Sans", sans-serif;
  color: white;
  background-color: ${(props) =>
    props.backgroundLoaded
      ? "transparent"
      : "#1e0e62"}; // Set background color conditionally
  padding: ${(props) => props.padding || ""};
`;

export interface MiddleContentProps {
  rorl?: "right" | "left";
}
export const MiddleContent = styled.div<MiddleContentProps>`
  position: absolute;
  top: 33%;
  ${(props) => (props.rorl ? "right" : "left")}: 25%;
  @media only screen and (max-width: 768px) {
    top: 25%;
  }
`;

export interface TextParagraphProps {
  bold?: boolean;
  padding?: number | string;
}
export const TextParagraph = styled.p<TextParagraphProps>`
  max-width: 517px;
  font-family: "DM Sans", sans-serif;
  padding: ${(props) => props.padding || "0"};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
`;

interface HeaderButtonProps {
  padding?: string;
  color?: string;
}
export const HeaderButton = styled.button<HeaderButtonProps>`
  background-color: transparent;
  border: none;
  border-radius: 0px;
  cursor: pointer;
  font-size: 18px;
  color: ${(props) => props.color || "white"};
  outline: none;
  font-family: "DM Sans", sans-serif;
  padding: ${(props) => props.padding || "0"};
`;

export default function Home() {
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);
  const [hover, setHover] = useState(false);
  const [hoverSec, setHoverSec] = useState(false);
  const [visibility, setVisibility] = useState(1);

  useEffect(() => {
    const img = new Image();
    img.src = HomeBackGround;
    img.onload = () => setIsBackgroundLoaded(true);
  }, []);

  const SectionUl = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 20px;
  `;
  const Title = styled.h1`
    text-align: center;
    padding: 0px 20px;
  `;

  const HeaderIcon = styled.img<{ size?: any }>`
    width: ${(props) => (props.size ? "18px" : "21px")};
    padding-top: 8px;
  `;

  const MainText = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "DM Sans", sans-serif;
    color: white;
    flex-direction: column;
    position: relative;
    padding-bottom: 50px;
    margin-top: 80px;
  `;

  const StyledCircleList = styled.div`
    padding: 15px 5px;
  `;

  if (!isBackgroundLoaded) {
    return;
  }

  return (
    <SectionContainer backGroundImage={HomeBackGround}>
      <SectionUl>
        <li>
          <Link to="/">
            <HeaderButton color="white" padding="0 20px">
              Home
            </HeaderButton>
          </Link>
        </li>
        <li>
          <Link to="Features">
            <HeaderButton color="white" padding="0 20px">
              Features
            </HeaderButton>
          </Link>
        </li>
        <li>
          <Link to="Pricing">
            <HeaderButton color="white" padding="0 20px">
              Pricing
            </HeaderButton>
          </Link>
        </li>
        <li>
          <Link to="Contact">
            <HeaderButton color="white" padding="0 20px">
              Contact
            </HeaderButton>
          </Link>
        </li>
        <li>
          <Link to="Register">
            <HeaderButton color="white" padding="0 20px">
              Register
            </HeaderButton>
          </Link>
        </li>
        <li>
          <HeaderButton color="white" padding="0 20px">
            <HeaderIcon size src={Ball} alt="" />
          </HeaderButton>
        </li>
        <li>
          <HeaderButton color="white" padding="0 20px">
            <HeaderIcon src={Behance} alt="" />
          </HeaderButton>
        </li>
      </SectionUl>
      <MainText>
        {visibility <= 1 ? (
          <MainText>
            <h3>Startup 1</h3>
            <Title>Forget About Code</Title>
            <TextParagraph padding="0px 20px">
              Startup Framework gives you complete freedom over your creative
              process — you don’t have to think about any technical aspects.
              There are no limits and absolutely no coding.
            </TextParagraph>
          </MainText>
        ) : null}
        {visibility === 2 ? (
          <MainText>
            <h3>Startup 2</h3>
            <Title>Unlock Your Potential</Title>
            <TextParagraph padding="0px 20px">
              Our platform unlocks your potential by streamlining the technical
              intricacies, allowing you to focus solely on your creative
              journey. Forget about constraints and coding complexities.
            </TextParagraph>
          </MainText>
        ) : null}
        {visibility === 3 ? (
          <MainText>
            <h3>Startup 3</h3>
            <Title>Ignite Your Imagination</Title>
            <TextParagraph padding="0px 20px">
              Experience the freedom to ignite your imagination without worrying
              about technical hurdles. We remove limits and coding barriers,
              giving you the space to explore and create without constraints.
            </TextParagraph>
          </MainText>
        ) : null}
        {visibility === 4 ? (
          <MainText>
            <h3>Startup 4</h3>
            <Title>Unleash Your Creativity</Title>
            <TextParagraph padding="0px 20px">
              Our platform unleashes your creativity by eliminating technical
              complexities. Explore without limits and dive into your creative
              process without worrying about code.
            </TextParagraph>
          </MainText>
        ) : null}
        {visibility > 4 ? (
          <MainText>
            <h3>Startup 5</h3>
            <Title>Embrace Innovation</Title>
            <TextParagraph padding="0px 20px">
              Embrace innovation with our platform that frees you from technical
              constraints. Dive deep into your ideas and bring them to life
              without the need for coding.
            </TextParagraph>
          </MainText>
        ) : null}
        <SectionUl>
          <StyledCircleList>
            {visibility === 1 ? (
              <img src={OnCircle} alt="" />
            ) : (
              <img src={OffCircle} alt="" />
            )}
          </StyledCircleList>
          <StyledCircleList>
            {visibility === 2 ? (
              <img src={OnCircle} alt="" />
            ) : (
              <img src={OffCircle} alt="" />
            )}
          </StyledCircleList>
          <StyledCircleList>
            {visibility === 3 ? (
              <img src={OnCircle} alt="" />
            ) : (
              <img src={OffCircle} alt="" />
            )}
          </StyledCircleList>
          <StyledCircleList>
            {visibility === 4 ? (
              <img src={OnCircle} alt="" />
            ) : (
              <img src={OffCircle} alt="" />
            )}
          </StyledCircleList>
          <StyledCircleList>
            {visibility > 4 ? (
              <img src={OnCircle} alt="" />
            ) : (
              <img src={OffCircle} alt="" />
            )}
          </StyledCircleList>
        </SectionUl>
        <SectionUl>
          <li>
            <MiddleContent>
              <HeaderButton
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() =>
                  setVisibility((prev) => (prev <= 1 ? 5 : prev - 1))
                }
              >
                {hover ? (
                  <img
                    style={{ transform: "rotate(180deg)" }}
                    src={RightArrow}
                    alt=""
                  />
                ) : (
                  <img src={LeftArrow} alt="" />
                )}
              </HeaderButton>
            </MiddleContent>
          </li>
          <li>
            <MiddleContent rorl="right">
              <HeaderButton
                onMouseEnter={() => setHoverSec(true)}
                onMouseLeave={() => setHoverSec(false)}
                onClick={() =>
                  setVisibility((prev) => (prev >= 5 ? 1 : prev + 1))
                }
              >
                {hoverSec ? (
                  <img src={RightArrow} alt="" />
                ) : (
                  <img
                    style={{ transform: "rotate(180deg)" }}
                    src={LeftArrow}
                    alt=""
                  />
                )}
              </HeaderButton>
            </MiddleContent>
          </li>
        </SectionUl>
      </MainText>
    </SectionContainer>
  );
}
