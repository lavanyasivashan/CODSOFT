import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import styled from "styled-components";
import fbg from '../img/footer/bg.svg';

const StyledFooter = styled.footer`
  background-image: url(${fbg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 263px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;

  @media (min-width: 768px) {
    min-height: 180px;
  }
`;

const Container = styled.div`
  margin: auto;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Brand = styled.div`
  flex-1;
  color: orange;
  font-size: 2rem;
  text-align: left;
  margin-right:2.5em;

  @media (min-width: 768px) {
    text-align: left;
    font-size: 2.5rem;
  }
`;

const NavList = styled.ul`
  flex-1;
  display: flex;
  justify-content: flex-start;
  align-items: left;
  
  margin-top: 3rem;

  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 2em;
  }
`;

const NavItem = styled.li`
  margin-right: 20px;

  a {
    color:black;
    text-decoration: none;
    
    font-size: 2rem;
    margin-left:1rem;

    &:hover {
      text-decoration: underline;
    }
  }

  &:last-child {
    margin-right: 0;
  }
`;

const FollowSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    margin-top: 0;
  }
`;

const FollowLabel = styled.div`
  color: orange;
  margin-top: 1rem;
  font-size: 1.5rem;

  @media (min-width: 768px) {
    margin-top: 0;
    margin-right: 2em;
  }
`;

const SocialIcons = styled.ul`
  display: flex;
  gap: 20px;
  margin-top: 1rem;
  color:orange;
  margin-left:1rem;
`;

const SocialIconItem = styled.li`
  a {
    color: orange;
    font-size: 1.5rem;

    &:hover {
      color: white;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterContent>
          <Brand>Pet First</Brand>
          <NavList>
            <NavItem><a href="#">Service</a></NavItem>
            <NavItem><a href="#">About</a></NavItem>
            <NavItem><a href="#">Blog</a></NavItem>
            <NavItem><a href="#">Contact</a></NavItem>
          </NavList>
          <FollowSection>
            <FollowLabel></FollowLabel>
            <SocialIcons>
              <SocialIconItem><a href="#"><BsFacebook /></a></SocialIconItem>
              <SocialIconItem><a href="#"><BsInstagram /></a></SocialIconItem>
              <SocialIconItem><a href="#"><BsTwitter /></a></SocialIconItem>
            </SocialIcons>
          </FollowSection>
        </FooterContent>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
