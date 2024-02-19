import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

import pretitleImg from '../img/hero/pretitle-img.svg';
import herobg from '../img/hero/hero-bg.png';
import Logo from '../img/header/logo.svg';

const StyledSection = styled.section`
  background-color: #fdeca6;
  background-image: url(${herobg});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 726px;
`;

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  min-height: 600px;
  height: 100%;
`;

const StyledTextContainer = styled.div`
  max-width: 80%;
  text-align: center;
  margin: 20px;
`;

const StyledImage = styled.img`
  width: 100%;

  @media (min-width: 1200px) {
    max-width: 80%;
    margin-bottom: 6px;
    margin-left: 5px;
    margin-top: 150px;
  }
`;

const StyledHeading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  text-align: center;
  margin-top: 20px;
`;

const StyledSpan = styled.span`
  color: maroon;
  text-align: center;
`;

const StyledButton = styled.button`
  background-color: maroon;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1.5rem;
`;

const StyledHeader = styled.header`
  padding: 1.5rem 0;
  position: absolute;
  width: 100%;
  left: 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLogo = styled.img`
  width: 100px;
  height: auto;
`;

const Nav = styled.nav`
  a {
    margin-right: 20px;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;
  }
`;

const HeaderButton = styled.button`
  background-color: maroon;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Hero = () => {
  return (
    <StyledSection>
      
      <StyledContentContainer>
        <StyledTextContainer>
          <StyledImage src={pretitleImg} alt='' />
          <StyledHeading>
            A pet first<br />
            <StyledSpan>approach to</StyledSpan><br />
            wellness
          </StyledHeading>
          <StyledButton className='btn btn-orange mx-auto lg:mx-0'>
            LEARN MORE
          </StyledButton>
        </StyledTextContainer>
      </StyledContentContainer>
    </StyledSection>
  );
};


export default Hero;
