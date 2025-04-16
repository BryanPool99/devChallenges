import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  ContainerStars,
  LogoCompany,
} from "../styles/CardTestimonialStyles";
import yellowStarsSVG from '../assets/images/Star_fill.svg';
import grayStarsSVG from '../assets/images/Star_fill_gray.svg';
const CardTestimonial = ({ imgCompany, author, testimonio, yellowStars }) => {
  const totalStars = 5;

  const yellowStarIcons = Array.from({ length: yellowStars }, (_, index) => (
    <img
      key={index}
      src={yellowStarsSVG}
      alt="star-yellow"
    />
  ));

  const grayStarIcons = Array.from(
    { length: totalStars - yellowStars },
    (_, index) => (
      <img
        key={index}
        src={grayStarsSVG}
        alt="star-gray"
      />
    )
  );
  return (
    <Card>
      <CardHeader>
        <LogoCompany src={imgCompany} alt="img-componay" />
        <ContainerStars>
          {yellowStarIcons}
          {grayStarIcons}
        </ContainerStars>
      </CardHeader>
      <CardTitle>{author}</CardTitle>
      <p>{testimonio}</p>
    </Card>
  );
};
export default CardTestimonial;
