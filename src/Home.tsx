import { useState } from "react";
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
}>`
  display: flex;
  min-height: 100vh;
  background-image: url(${(props) => props.backGroundImage || ""});
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #1e0e62;
  font-family: "DM Sans", sans-serif;
  color: white;
  padding: ${(props) => props.padding || ""};
`;

export interface MiddleContentProps {
  rorl?: "right" | "left";
}
export const MiddleContent = styled.div<MiddleContentProps>`
  position: absolute;
  top: 27%;
  ${(props) => (props.rorl ? "right" : "left")}: 25%;
  @media only screen and (max-width: 768px) {
    top: 15%;
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
  const SectionUl = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
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
  `;

  const StyledCircleList = styled.div`
    padding: 15px 5px;
  `;

  const [hover, setHover] = useState(false);
  const [hoverSec, setHoverSec] = useState(false);
  const [visibility, setVisibility] = useState(1);

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
            <h1>Forget About Code</h1>
            <TextParagraph>
              Startup Framework gives you complete freedom over your creative
              process — you don’t have to think about any technical aspects.
              There are no limits and absolutely no coding.
            </TextParagraph>
          </MainText>
        ) : null}
        {visibility === 2 ? (
          <MainText>
            <h3>Startup 2</h3>
            <h1>Unlock Your Potential</h1>
            <TextParagraph>
              Our platform unlocks your potential by streamlining the technical
              intricacies, allowing you to focus solely on your creative
              journey. Forget about constraints and coding complexities.
            </TextParagraph>
          </MainText>
        ) : null}
        {visibility === 3 ? (
          <MainText>
            <h3>Startup 3</h3>
            <h1>Ignite Your Imagination</h1>
            <TextParagraph>
              Experience the freedom to ignite your imagination without worrying
              about technical hurdles. we remove limits and coding barriers,
              giving you the space to explore and create without constraints.
            </TextParagraph>
          </MainText>
        ) : null}
        {visibility === 4 ? (
          <MainText>
            <h3>Startup 4</h3>
            <h1>Unleash Your Creativity</h1>
            <TextParagraph>
              Our platform unleashes your creativity by eliminating technical
              complexities. Explore without limits and dive into your creative
              process without worrying about code.
            </TextParagraph>
          </MainText>
        ) : null}
        {visibility > 4 ? (
          <MainText>
            <h3>Startup 5</h3>
            <h1>Embrace Innovation</h1>
            <TextParagraph>
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
            {visibility == 3 ? (
              <img src={OnCircle} alt="" />
            ) : (
              <img src={OffCircle} alt="" />
            )}
          </StyledCircleList>
          <StyledCircleList>
            {visibility == 4 ? (
              <img src={OnCircle} alt="" />
            ) : (
              <img src={OffCircle} alt="" />
            )}
          </StyledCircleList>
          <StyledCircleList>
            {visibility == 5 ? (
              <img src={OnCircle} alt="" />
            ) : (
              <img src={OffCircle} alt="" />
            )}
          </StyledCircleList>
        </SectionUl>
        <Link to="Register">
          <StyledCreateAccount hoverColor="#563af0" backGroundColor="#4628f0">
            Create an Account
          </StyledCreateAccount>
        </Link>
        <div>
          <MiddleContent>
            <HeaderButton
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={() => {
                if (visibility > 1) {
                  setVisibility(visibility - 1);
                }
              }}
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
          <MiddleContent rorl="right">
            <HeaderButton
              onMouseEnter={() => setHoverSec(true)}
              onMouseLeave={() => setHoverSec(false)}
              onClick={() => {
                if (visibility < 5) {
                  setVisibility(visibility + 1);
                }
              }}
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
        </div>
      </MainText>
    </SectionContainer>
  );
}
