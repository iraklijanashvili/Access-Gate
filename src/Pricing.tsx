import PlansPricingBackGround from "../src/assets/PlansPricingBackGround.svg";
import { SectionContainer } from "./Home";
import { styled } from "styled-components";
import Dollar from "../src/assets/Dollar.svg";
import CheckIcon from "../src/assets/CheckIcon.svg";
import { useEffect, useState } from "react";

const PricingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const StarterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 550px;
  border: 1px solid white;
  padding: 40px 40px;
  border-radius: 20px;
  margin-bottom: 20px;
  margin: 20px 15px;
  @media only screen and (max-width: 1024px) {
    width: 80%;
    align-items: center;
    padding: 40px 20px;
  }
  @media only screen and (min-width: 768px) {
    padding: 40px 20px;
  }
`;
const StarterPrice = styled.div`
  display: flex;
  align-items: center;
  width: 117px;
  height: 70px;
  h1 {
    font-size: 50px;
  }
`;
const DollarImage = styled.img`
  width: 10px;
  height: 26px;
  padding-bottom: 15px;
`;
interface ListContainerProps {
  padding?: string;
}
const ListContainer = styled.div<ListContainerProps>`
  display: flex;
  align-items: center;
  padding-left: ${(props) => props.padding || "0"};
  height: 35px;
  border: 2px solidb;
`;
const CheckIconSize = styled.img`
  width: 12px;
  height: 8px;
  padding-right: 20px;
`;
const PlansPricingHeaderText = styled.h2`
  text-align: center;
  padding: 0px 20px;
`;
const PlansPricingParagraph = styled.p`
  text-align: center;
  padding: 0px 20px;
`;
export interface StyledGetStartedProps {
  width?: number | string;
  maxWidth?: number | string;
  hoverColor?: string;
  backGroundColor?: string;
}

export const StyledGetStarted = styled.button<StyledGetStartedProps>`
  background-color: ${(props) => props.backGroundColor || ""};
  border: none;
  height: 60px;
  cursor: pointer;
  font-size: 18px;
  color: white;
  outline: none;
  font-family: "DM Sans" sans-serif;
  padding: 20px 20px;
  margin: 40px;
  width: ${(props) => props.width || "230px"};
  max-width: ${(props) => props.maxWidth || ""};
  border-radius: 50px;
  &:hover {
    background-color: ${(props) =>
      props.hoverColor || props.backGroundColor || ""};
  }
`;
const GetStartedContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export default function PlansPricing() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setImageLoaded(true);
    };
    image.src = PlansPricingBackGround;
  }, []);
  return (
    <SectionContainer
      padding="50px 0px"
      backGroundImage={PlansPricingBackGround}
      style={{ visibility: imageLoaded ? "visible" : "hidden" }}
    >
      <div>
        <PlansPricingHeaderText>Plans & Pricing</PlansPricingHeaderText>
        <PlansPricingParagraph>
          Startup Framework is free forever — you only pay for custom domain
          hosting or to export your site.
        </PlansPricingParagraph>
      </div>
      <PricingContainer>
        <StarterContainer>
          <h2>Starter</h2>
          <StarterPrice>
            <h1>9.99</h1>
            <DollarImage src={Dollar} alt="" />
          </StarterPrice>
          <ListContainer>
            <CheckIconSize src={CheckIcon} alt="" />
            <h3>2 GB of space</h3>
          </ListContainer>
          <ListContainer>
            <CheckIconSize src={CheckIcon} alt="" />
            <h3>14 days of backups</h3>
          </ListContainer>
          <ListContainer>
            <CheckIconSize src={CheckIcon} alt="" />
            <h3>Social integrations</h3>
          </ListContainer>
          <ListContainer>
            <CheckIconSize src={CheckIcon} alt="" />
            <h3>Client billing</h3>
          </ListContainer>
          <ListContainer padding="31px">
            <h3>Remote access</h3>
          </ListContainer>
          <ListContainer padding="31px">
            <h3>Custom domain</h3>
          </ListContainer>
          <ListContainer padding="31px">
            <h3>24 hours support</h3>
          </ListContainer>
          <ListContainer padding="31px">
            <h3>Admin tools</h3>
          </ListContainer>
          <ListContainer padding="31px">
            <h3>Collaboration tools</h3>
          </ListContainer>
          <ListContainer padding="31px">
            <h3>User management</h3>
          </ListContainer>
          <GetStartedContainer>
            <StyledGetStarted
              hoverColor="#f34889"
              backGroundColor="#E93A7D"
              width="100%"
              maxWidth="330px"
              type="submit"
            >
              Get Started
            </StyledGetStarted>
          </GetStartedContainer>
        </StarterContainer>
        <StarterContainer>
          <h2>Professional</h2>
          <StarterPrice>
            <h1>19.99</h1>
            <DollarImage src={Dollar} alt="" />
          </StarterPrice>
          <ListContainer>
            <CheckIconSize src={CheckIcon} alt="" />
            <h3>2 GB of space</h3>
          </ListContainer>
          <ListContainer>
            <CheckIconSize src={CheckIcon} alt="" />
            <h3>14 days of backups</h3>
          </ListContainer>
          <ListContainer>
            <CheckIconSize src={CheckIcon} alt="" />
            <h3>Social integrations</h3>
          </ListContainer>
          <ListContainer>
            <CheckIconSize src={CheckIcon} alt="" />
            <h3>Client billing</h3>
          </ListContainer>
          <ListContainer>
            <CheckIconSize src={CheckIcon} alt="" />
            <h3>Remote access</h3>
          </ListContainer>
          <ListContainer>
            <CheckIconSize src={CheckIcon} alt="" />
            <h3>Custom domain</h3>
          </ListContainer>
          <ListContainer>
            <CheckIconSize src={CheckIcon} alt="" />
            <h3>24 hours support</h3>
          </ListContainer>
          <ListContainer padding="31px">
            <h3>Admin tools</h3>
          </ListContainer>
          <ListContainer padding="31px">
            <h3>Collaboration tools</h3>
          </ListContainer>
          <ListContainer padding="31px">
            <h3>User management</h3>
          </ListContainer>
          <GetStartedContainer>
            <StyledGetStarted
              hoverColor="#f34889"
              backGroundColor="#E93A7D"
              width="100%"
              maxWidth="330px"
              type="submit"
            >
              Get Started
            </StyledGetStarted>
          </GetStartedContainer>
        </StarterContainer>
        <StarterContainer>
          <h2>Team</h2>
          <StarterPrice>
            <h1>49.99</h1>
            <DollarImage src={Dollar} alt="" />
          </StarterPrice>
          <ListContainer>
            <CheckIconSize src={CheckIcon} alt="" />
            <h3>2 GB of space</h3>
          </ListContainer>
          <ListContainer>
            <CheckIconSize src={CheckIcon} alt="" />
            <h3>14 days of backups</h3>
          </ListContainer>
          <ListContainer>
            <CheckIconSize src={CheckIcon} alt="" />
            <h3>Social integrations</h3>
          </ListContainer>
          <ListContainer>
            <CheckIconSize src={CheckIcon} alt="" />
            <h3>Client billing</h3>
          </ListContainer>
          <ListContainer>
            <CheckIconSize src={CheckIcon} alt="" />
            <h3>Remote access</h3>
          </ListContainer>
          <ListContainer>
            <CheckIconSize src={CheckIcon} alt="" />
            <h3>Custom domain</h3>
          </ListContainer>
          <ListContainer>
            <CheckIconSize src={CheckIcon} alt="" />
            <h3>24 hours support</h3>
          </ListContainer>
          <ListContainer>
            <CheckIconSize src={CheckIcon} alt="" />
            <h3>Admin tools</h3>
          </ListContainer>
          <ListContainer>
            <CheckIconSize src={CheckIcon} alt="" />
            <h3>Collaboration tools</h3>
          </ListContainer>
          <ListContainer>
            <CheckIconSize src={CheckIcon} alt="" />
            <h3>User management</h3>
          </ListContainer>
          <GetStartedContainer>
            <StyledGetStarted
              hoverColor="#f34889"
              backGroundColor="#E93A7D"
              width="100%"
              maxWidth="330px"
              type="submit"
            >
              Get Started
            </StyledGetStarted>
          </GetStartedContainer>
        </StarterContainer>
      </PricingContainer>
    </SectionContainer>
  );
}
