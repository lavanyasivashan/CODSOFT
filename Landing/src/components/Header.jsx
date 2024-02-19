import React from 'react';
import styled from 'styled-components';
import Logo from '../img/header/logo.svg';

// Styled components
const StyledHeader = styled.header`
  padding: 1.5rem 2%; 
  position: absolute;
  width: 96%;
  left: 2%;
`;

const Container = styled.div`
  max-width: 1200px; 
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogo = styled.img`
  width: 80px; 
  height: auto;
`;

const StyledNav = styled.nav`
  a {
    margin-right: 15px;
    color: #fff; 
    text-decoration: none;
    font-weight: bold;
    font-size: 0.9rem;
  }
`;

const StyledButton = styled.button`
  background-color: maroon;
  color: #fff;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <a href='#'>
          <StyledLogo src={Logo} alt='Logo' />
        </a>
        <StyledNav>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </StyledNav>
        <StyledButton className='btn btn-primary lg:btn-outline'>
          SIGN UP
        </StyledButton>
      </Container>
    </StyledHeader>
  );
};

export default Header;
