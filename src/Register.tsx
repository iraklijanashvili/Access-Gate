import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RegisterBackGround from "../src/assets/Background.svg";
import { SectionContainer, TextParagraph, StyledCreateAccount } from "./Home";
import LoadingContainer from "./Features";

export const Dflex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: row;
  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

export interface HalfSplitProps {
  padding?: string;
}

export const HalfSplit = styled(Dflex)<HalfSplitProps>`
  width: 50%;
  flex-direction: column;
  padding: ${(props) => props.padding || "0"};
  @media (max-width: 1024px) {
    width: 100%;
    padding: 30px 0;
  }
`;

export const TextPadding = styled.h1`
  text-align: center;
  padding: 0 20px;
  @media only screen and (min-width: 1024px) {
    text-align: start;
    padding: 0 80px;
  }
`;

export const RegisterTextParagraph = styled(TextParagraph)`
  text-align: center;
  padding: 0 30px;
  @media only screen and (min-width: 1024px) {
    padding: 0 80px;
    text-align: start;
  }
`;

export const RegisterContainer = styled.div`
  width: 80%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;
  border-radius: 20px;
  margin: 20px 0px;
`;

export interface HeaderButtonProps {
  padding?: string;
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  background-color: transparent;
  border: none;
  border-radius: 0px;
  cursor: pointer;
  font-size: 18px;
  color: ${(props) => (props.color ? "white" : "black")};
  outline: none;
  font-family: "DM Sans", sans-serif;
  padding: ${(props) => props.padding || "0"};
  border-bottom: 2px solid black;
  width: 100%;
`;

export const RegisterHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: start;
  width: 100%;
`;

export const RegisterHeaderContainer = styled(RegisterContainer)`
  justify-content: flex-start;
  padding: 0px 0px;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const FormInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 330px;
  height: 80%;
  padding: 0 0 40px 0;

  label {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 20px;
  }

  ::placeholder {
    color: #b6aeae;
  }
`;

export interface marginBottomProps {
  marginBottom?: string;
}

export const FormInput = styled.input<marginBottomProps>`
  border-radius: 50px;
  width: 330px;
  height: 50px;
  margin-top: 25px;
  margin-bottom: ${(props) => props.marginBottom || "0"};
  border: 2px solid grey;
  padding-left: 20px;

  ::placeholder {
    color: #b6aeae;
  }

  &:focus {
    border-color: black;
    outline: none;
  }
`;

export const DashedLine = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 330px;
`;

export const Line = styled.div`
  flex-grow: 1;
  border-top: 1px solid #141414;
`;

export const Text = styled.span`
  margin: 20px 10px;
`;

export const HeaderButtonActive = styled(HeaderButton)`
  color: grey;
  border-bottom: 1px solid grey;
`;

export const ForgetPass = styled.a`
  color: blue;
  margin-top: 20px;
  text-decoration: none;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    display: block;
  }
`;

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState(true);
  const [loading, setLoading] = useState<boolean>(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`You have signed up with email: ${email} and password: ${password}`);
    setEmail("");
    setPassword("");
  };

  const handleButtonClick = () => {
    setEmail("");
    setPassword("");
  };
  useEffect(() => {
    const images = [RegisterBackGround];

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
    });
  }, []);

  if (loading) {
    return <LoadingContainer></LoadingContainer>;
  }

  return (
    <SectionContainer backGroundImage={RegisterBackGround}>
      <Dflex>
        <HalfSplit>
          <TextContainer>
            <TextPadding>
              We solve digital problems with an outstanding creative flare
            </TextPadding>
            <RegisterTextParagraph>
              We have created a new product that will help designers,
              developers, and companies create websites for their startups
              quickly and easily.
            </RegisterTextParagraph>
          </TextContainer>
        </HalfSplit>
        <HalfSplit>
          {active ? (
            <RegisterContainer>
              <RegisterHeader>
                {active ? (
                  <HeaderButton padding="20px">SIGN UP</HeaderButton>
                ) : (
                  <HeaderButtonActive
                    onClick={() => {
                      setActive(true);
                      handleButtonClick();
                    }}
                    padding="20px"
                  >
                    SIGN UP
                  </HeaderButtonActive>
                )}
                {active ? (
                  <HeaderButtonActive
                    onClick={() => {
                      setActive(false);
                      handleButtonClick();
                    }}
                    padding="20px"
                  >
                    LOGIN
                  </HeaderButtonActive>
                ) : (
                  <HeaderButton padding="20px">LOGIN</HeaderButton>
                )}
              </RegisterHeader>
              <RegisterHeaderContainer>
                <FormContainer>
                  <FormInputContainer onSubmit={handleSubmit}>
                    <label>
                      <FormInput
                        type="email"
                        value={email}
                        placeholder="Your email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </label>
                    <label>
                      <FormInput
                        marginBottom="40px"
                        placeholder="Your password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </label>
                    <StyledCreateAccount
                      hoverColor="#15cab5"
                      backGroundColor="#25DAC5"
                      width="100%"
                      maxWidth="330px"
                      type="submit"
                    >
                      Create an Account
                    </StyledCreateAccount>
                    <DashedLine>
                      <Line />
                      <Text>or</Text>
                      <Line />
                    </DashedLine>
                    <StyledCreateAccount
                      hoverColor="#0d90e2F2"
                      backGroundColor="#1DA1F2"
                      width="100%"
                      maxWidth="330px"
                      type="button"
                      onClick={handleButtonClick}
                    >
                      Login via Twitter
                    </StyledCreateAccount>
                  </FormInputContainer>
                </FormContainer>
              </RegisterHeaderContainer>
            </RegisterContainer>
          ) : (
            <RegisterContainer>
              <RegisterHeader>
                {active ? (
                  <HeaderButton padding="20px">SIGN UP</HeaderButton>
                ) : (
                  <HeaderButtonActive
                    onClick={() => {
                      setActive(true);
                      handleButtonClick();
                    }}
                    padding="20px"
                  >
                    SIGN UP
                  </HeaderButtonActive>
                )}
                {active ? (
                  <HeaderButtonActive
                    onClick={() => {
                      setActive(false);
                      handleButtonClick();
                    }}
                    padding="20px"
                  >
                    LOGIN
                  </HeaderButtonActive>
                ) : (
                  <HeaderButton padding="20px">LOGIN</HeaderButton>
                )}
              </RegisterHeader>
              <RegisterHeaderContainer>
                <FormContainer>
                  <FormInputContainer onSubmit={handleSubmit}>
                    <label>
                      <FormInput
                        type="email"
                        value={email}
                        placeholder="Your email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </label>
                    <label>
                      <FormInput
                        marginBottom="40px"
                        placeholder="Your password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </label>
                    <StyledCreateAccount
                      hoverColor="#15cab5"
                      backGroundColor="#25DAC5"
                      width="100%"
                      maxWidth="330px"
                      type="submit"
                    >
                      Log In
                    </StyledCreateAccount>
                    <ForgetPass href="">Forgot password?</ForgetPass>
                  </FormInputContainer>
                </FormContainer>
              </RegisterHeaderContainer>
            </RegisterContainer>
          )}
        </HalfSplit>
      </Dflex>
    </SectionContainer>
  );
};

export default Register;
