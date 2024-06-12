import { SetStateAction, useState, useEffect } from "react";
import ContactBackGround from "../src/assets/ContactBackGround.svg";
import { SectionContainer, StyledCreateAccount } from "./Home";
import { styled } from "styled-components";
import Phone from "../src/assets/Phone.svg";
import Building from "../src/assets/Building.svg";
import Envelope from "../src/assets/Envelope.svg";

import {
  HalfSplit,
  Dflex,
  FormContainer,
  FormInputContainer,
  FormInput,
  RegisterTextParagraph,
  TextPadding,
  RegisterContainer,
  RegisterHeaderContainer,
} from "./Register";

const NameInput = styled(FormInput)`
  width: ${(props) => props.width || "0"};
  margin-top: 0px;
`;
const FieldInput = styled.input`
  border-radius: 50px;
  height: 50px;
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
const Select = styled.select`
  border-radius: 50px;
  max-width: 140px;
  width: 100%;
  height: 56px;
  border: 2px solid grey;
  background-color: white;

  ::placeholder {
    color: #b6aeae;
  }

  &:focus {
    border-color: black;
    outline: none;
  }
`;
const Budget = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const NameLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const BudgetLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
const BudgetFormSize = styled.div`
  width: 30%;
`;
const MessageInput = styled.input`
  height: 110px;
  margin-bottom: 30px;
  padding-left: 20px;
  display: flex;
`;
const RegisterFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
  }
`;
const CheckBox = styled.div`
  display: flex;
  width: 100%;
  color: grey;
  align-items: center;
  @media (max-width: 450px) {
    margin: 0px 0px 15px 0px;
    justify-content: center;
  }
`;
const CustomCheckbox = styled.input.attrs({ type: "checkbox" })`
  width: 16px;
  height: 16px;
  appearance: none;
  background-color: white;
  margin-right: 10px;
  border-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;

  &:checked {
    background-color: #25dac5;
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const PhoneContainer = styled.div`
  display: flex;
`;
const IconPadding = styled.img`
  padding-right: 10px;
`;

export default function Contact() {
  const [email, setEmail] = useState("");
  const [myCar, setMyCar] = useState("500");
  const [isLoaded, setIsLoaded] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setMyCar(event.target.value);
  };

  useEffect(() => {
    const img = new Image();
    img.src = ContactBackGround;
    img.onload = () => setIsLoaded(true);
  }, []);

  return (
    <SectionContainer backGroundImage={ContactBackGround}>
      {isLoaded && (
        <Dflex>
          <HalfSplit>
            <div>
              <TextPadding>Let’s Keep in Touch</TextPadding>
              <RegisterTextParagraph>
                We have created a new product that will help designers,
                developers and companies create websites for their startups
                quickly and easily.
                <InfoContainer>
                  <PhoneContainer>
                    <IconPadding src={Phone} alt="" />
                    <p>+995 592 239 179</p>
                  </PhoneContainer>
                  <PhoneContainer>
                    <IconPadding src={Building} alt="" />
                    <p>iraklijanashvili17@gmail.com</p>
                  </PhoneContainer>
                  <PhoneContainer>
                    <IconPadding src={Envelope} alt="" />
                    <p>Georgia, Tbilisi, Besarion Jgenti #84</p>
                  </PhoneContainer>
                </InfoContainer>
              </RegisterTextParagraph>
            </div>
          </HalfSplit>
          <HalfSplit padding="20px 0">
            <RegisterContainer>
              <RegisterHeaderContainer>
                <FormContainer>
                  <FormInputContainer onSubmit={handleSubmit}>
                    <Budget>
                      <div style={{ width: "100%" }}>
                        <NameLabel>
                          <h4>Your Name</h4>
                          <NameInput width="75%" placeholder="Your Name" />
                        </NameLabel>
                      </div>
                      <BudgetFormSize>
                        <BudgetLabel>
                          <h4>BUDGET</h4>
                          <form>
                            <Select value={myCar} onChange={handleChange}>
                              <option value="500">500</option>
                              <option value="1000">1000</option>
                              <option value="1500">1500</option>
                            </Select>
                          </form>
                        </BudgetLabel>
                      </BudgetFormSize>
                    </Budget>
                    <NameLabel>
                      <h4>INPUT FIELD</h4>
                      <FieldInput type="email" placeholder="name@mail.com" />
                    </NameLabel>
                    <NameLabel>
                      <h4>YOUR MESSAGE</h4>
                      <MessageInput
                        type="email"
                        value={email}
                        placeholder="Message"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </NameLabel>
                    <RegisterFooter>
                      <CheckBox>
                        <CustomCheckbox />
                        <p>Your text here</p>
                      </CheckBox>
                      <StyledCreateAccount
                        hoverColor="#15cab5"
                        backGroundColor="#25DAC5"
                      >
                        Send
                      </StyledCreateAccount>
                    </RegisterFooter>
                  </FormInputContainer>
                </FormContainer>
              </RegisterHeaderContainer>
            </RegisterContainer>
          </HalfSplit>
        </Dflex>
      )}
    </SectionContainer>
  );
}
