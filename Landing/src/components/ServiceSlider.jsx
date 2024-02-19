import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Service1Icon from "../img/services/service-icon1.svg";
import Service2Icon from "../img/services/service-icon2.svg";
import Service3Icon from "../img/services/service-icon3.svg";

const services = [
  {
    image: Service1Icon,
    name: "Pharmacy",
    description:
      "You have several options when your pet needs a prescription medication: You can get it from your veterinarian if they keep it in stock. Your veterinarian can write (or call in) a prescription to a local pharmacy that stocks the medication",
    btnText: "explore",
  },
  {
    image: Service2Icon,
    name: "Breed Specific Haircuts",
    description:
      "In the realm of pet care, grooming stands as a cornerstone for ensuring not just the aesthetic appeal but the overall health and happiness of our beloved canine companions",
    btnText: "explore",
  },
  {
    image: Service3Icon,
    name: "Clothes",
    description:
      "When choosing fun animal clothing for your furry friend, make sure you’re not cocooning them in too many layers of fabric.",
    btnText: "explore",
  },
];

const StyledSlider = styled(Slider)`
  .slick-prev,
  .slick-next {
    font-size: 2vw;
    color: maroon;
    z-index: 1;
    opacity: 1;
    transition: color 0.3s ease;
  }

  .slick-prev:hover,
  .slick-next:hover {
    color: maroon;
  }

  .slick-prev {
    left: 2vw;
  }

  .slick-next {
    right: 2vw;
  }

  .slick-slide {
    display: flex;
    justify-content: center;
  }

  .slick-center {
    z-index: 2;
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  .slick-slide:not(.slick-center) {
    opacity: 1;
    transition: opacity 0.3s ease;
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  min-width: 90%;
  padding: 2vw;
  min-height: 20px;
  transition: all 0.3s ease;
  color: cream;
  opacity:1;

  @media (min-width: 768px) {
    min-height: 50%;
    min-width: 50%;
  }

  img {
    margin-bottom: 1rem;
    max-width: 100%;
    height: auto;
  }

  .service-title {
    
    font-size: 2.5vw;
    font-weight: bold;
    margin-bottom: 2rem;
    font-family:uppercase;
  }

  .service-description {
    font-size: 1.5vw;
    margin-bottom: 1rem;
    margin-left: 5vw;
    margin-right: 5vw;
  }

  .btn-primary {
    background-color: maroon;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  }

  &:hover {
    background-color: cream;
    opacity: 1;
  }
`;

const ServiceSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <div className="slick-prev">{""}</div>,
    nextArrow: <div className="slick-next">{""}</div>,
  };

  return (
    <StyledSlider {...settings}>
      {services.map((service, index) => (
        <GridItem key={index}>
          <img src={service.image} alt={service.name} />
          <div className="service-title">{service.name}</div>
          <div className="service-description">{service.description}</div>
          <button className="btn-primary">{service.btnText}</button>
        </GridItem>
      ))}
    </StyledSlider>
  );
};

export default ServiceSlider;
