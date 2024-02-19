import React from "react";
import styled from "styled-components";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import DogImg from '../img/newsletter/dog.png';
import OrangeBackground from '../img/newsletter/bg-orange.svg';
import YellowBackground from '../img/newsletter/bg-yellow.png';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 800px;
  @media (min-width: 1024px) {
    flex-direction: row;
    height: 324px;
  }
`;

const OrangeContainer = styled.div`
  flex: 1;
  background: url(${OrangeBackground}) center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  @media (min-width: 1024px) {
    padding: 0;
  }
`;

const YellowContainer = styled.div`
  flex: 1;
  background: url(${YellowBackground}) center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;


const ContentWrapper = styled.div`
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 12px;
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 16px;
`;

const StyledInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid white;
  color: white;
  padding: 8px 0;
  outline: none;
  &::placeholder {
    color: white;
  }
`;

const StyledArrowIcon = styled(HiOutlineArrowNarrowRight)`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <StyledSection>
      <OrangeContainer>
      
        <ContentWrapper>
          <Heading>
            Subscribe & Get Pet <br /> Update News
          </Heading>
          <InputWrapper>
            <StyledInput
              type='text'
              placeholder="Mail"
            />
            <StyledArrowIcon />
          </InputWrapper>
        </ContentWrapper>
      </OrangeContainer>
      <YellowContainer>
        <img src={DogImg} alt='' />
      </YellowContainer>
    </StyledSection>
  );
};

export default Newsletter;
