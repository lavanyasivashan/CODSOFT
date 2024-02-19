import React from "react";
import styled from "styled-components";
import Img1 from '../img/adoption/img1.png';
import bgg from '../img/adoption/bg.png';

const Section = styled.section`
  background-image: url(${bgg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 760px;
  padding: 8px;
  display: flex;
`;

const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  margin-bottom: 6px;

  img {
    width: 542px;
    height: 560px;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  text-align: center;
  max-width: 320px;

  @media (min-width: 1024px) {
    text-align: left;
    max-width: none;
  }
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 6px;
`;

const Paragraph = styled.p`
  margin-bottom: 6px;
  font-size: 1.4rem; 
`;

const List = styled.ul`
  margin-bottom: 38px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 1.4rem; 

  @media (min-width: 1024px) {
    list-style-type: disc;
    padding-left: 1rem;
  }
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

const ListItem = styled.li``;

const Adoption = () => {
  return (
    <Section>
      <Container>
        <ImageContainer>
          <img src={Img1} alt="" />
        </ImageContainer>
        <TextContainer>
          <Heading>Making pet parenting easy for everyone</Heading>
          <Paragraph className="v">
            Adopting a pet means to choose an animal, who will be a part of this
            life, a part of a family, not just a toy for a couple of days, but
            a living being, who is waiting for care and love.
          </Paragraph>
          <List>
            <ListItem>Adoption</ListItem>
            <ListItem>Frozen Raw</ListItem>
            <ListItem>Next Day Delivery</ListItem>
          </List>
          <StyledButton className='btn btn-orange mx-auto lg:mx-0'>
            EXPLORE
          </StyledButton>
        </TextContainer>
      </Container>
    </Section>
  );
};

export default Adoption;
