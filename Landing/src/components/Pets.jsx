import React, { useState } from "react";
import styled from "styled-components";
import BadgeImage from "../img/pets/badge.svg";
import Pet1Img from "../img/pets/1.png";
import Pet2Img from "../img/pets/2.png";
import Pet3Img from "../img/pets/3.png";
import Pet4Img from "../img/pets/4.png";
import Pet5Img from "../img/pets/5.png";
import Pet6Img from "../img/pets/6.png";
import Pet7Img from "../img/pets/7.png";
import Pet8Img from "../img/pets/8.png";
import Pet9Img from "../img/pets/9.png";
import Pet10Img from "../img/pets/10.png";
import Pet11Img from "../img/pets/11.png";
import Pet12Img from "../img/pets/12.png";
import petbg from "../img/pets/pets-bg.png";

const pets = [
  { id: 1, category: "cat", name: "poonai", image: Pet1Img },
  { id: 2, category: "bird", name: "myna", image: Pet2Img },
  { id: 3, category: "fox", name: "nari", image: Pet3Img },
  { id: 4, category: "cat", name: "cutie", image: Pet4Img },
  { id: 5, category: "hamster", name: "eli", image: Pet5Img },
  { id: 6, category: "bird", name: "kili", image: Pet6Img },
  { id: 7, category: "bird", name: "colorkili", image: Pet7Img },
  { id: 8, category: "cat", name: "thimiru", image: Pet8Img },
  { id: 9, category: "lion", name: "singam", image: Pet9Img },
  { id: 10, category: "bird", name: "sivapu", image: Pet10Img },
  { id: 11, category: "dog", name: "karupu", image: Pet11Img },
  { id: 12, category: "rabbit", name: "vellai", image: Pet12Img },
];

const StyledSection = styled.section`
  background-image: url(${petbg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 2rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledBadgeContainer = styled.div`
  align-items: left;
  width: 100%;

  @media (min-width: 1024px) {
    width: 30%;
    margin-top: 10px;
  }
`;

const StyledPetDetailsContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    align-items: flex-start;
    width: 50%;
    justify-content: flex-start;
    margin-left: -300px; /* Adjust the margin to move the pet list box to the left */
  }
`;

const StyledPetInfo = styled.div`
  flex-direction: column;
  align-items: center;
  text-align: center; /* Center text for smaller screens */
  color: white;
  font-family: bold;
  margin-left: 30em;
  margin-bottom:3em;

  .category {
    font-size: 32px;
    text-transform: uppercase;
  }

  .name {
    text-transform: uppercase;
    font-size: 20px;
    margin-bottom: 1rem;
    color: white;
  }

  .petImage {
    align-items: center;
    width: 200px;
    height: 250px;
    border: 4px solid #fff;
    border-radius: 50%;
    margin-bottom: 5em;

    @media (min-width: 1024px) {
      margin: 0;
      justify-content: flex-start;
    }
  }
`;

const StyledPetGallery = styled.div`
  background: rgba(255, 192, 203, 0.4);
  display: flex;
  justify-content: center;
  padding: 1rem;
  margin-top: 1rem;

  @media (min-width: 1024px) {
    justify-content: flex-start;
    margin-top: 0;
    margin-left:-10px;
  }
`;

const StyledPetImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 1rem;
  cursor: pointer;

  ${({ selected }) =>
    selected &&
    `
    border: 2px solid white;
    width: 95px;
    height: 95px;
  `}
`;

const Pets = () => {
  const [selectedPet, setSelectedPet] = useState(pets[0]);

  const handlePetClick = (pet) => {
    setSelectedPet(pet);
  };

  return (
    <StyledSection>
      <StyledBadgeContainer>
        <img src={BadgeImage} alt="Badge" />
      </StyledBadgeContainer>
      <StyledPetDetailsContainer>
        <StyledPetInfo>
          <div className="category">({selectedPet.category})</div>
          <div className="name">{selectedPet.name}</div>
          <div className="petImage">
            <img src={selectedPet.image} alt="" draggable="false" />
          </div>
        </StyledPetInfo>
        <StyledPetGallery>
          {pets.map((pet) => (
            <StyledPetImage
              key={pet.id}
              src={pet.image}
              alt=""
              draggable="false"
              selected={selectedPet.id === pet.id}
              onClick={() => handlePetClick(pet)}
            />
          ))}
        </StyledPetGallery>
      </StyledPetDetailsContainer>
    </StyledSection>
  );
};

export default Pets;
