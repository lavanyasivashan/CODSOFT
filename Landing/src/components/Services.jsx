import React from "react";
import styled from "styled-components";
import ServiceSlider from "./ServiceSlider";
import bg from '../img/services/bg.png';

const StyledServicesSection = styled.section`
  background-image: url(${bg}); /* Replace with your actual background image URL */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 70vh; /* Use 100% viewport height for full-screen height */
  padding: 2rem 0; /* Adjust the padding as needed */
`;

const StyledContainer = styled.div`
  max-width: 960px; /* Adjust the max-width as needed */
  margin: 0 auto;
`;

const StyledHeading = styled.h2`
  font-size: 2.5rem; /* Adjust the font size as needed */
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;

const Services = () => {
  return (
    <StyledServicesSection>
      <StyledContainer>
        <StyledHeading>OUR SERVICES</StyledHeading>
        <ServiceSlider />
      </StyledContainer>
    </StyledServicesSection>
  );
};

export default Services;
