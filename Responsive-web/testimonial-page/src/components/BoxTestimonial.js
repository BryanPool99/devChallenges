import React from "react";
import CardTestimonial from "./CardTestimonial";
import {
  ContainerBoxTestimonial,
  ContainerCardTestimonialR,
  ContainerCardTestimonialL
} from "../styles/BoxTestimonialStyles";

const BoxTestimonial = () => {
  return (
    <ContainerBoxTestimonial>
      <ContainerCardTestimonialR>
        <CardTestimonial
          imgCompany={require("../assets/images/google-testimonial.png")}
          author="Samantha Lee"
          testimonio="The checklist ensures that the review process is thorough"
          yellowStars={4}
        />
      </ContainerCardTestimonialR>
      <ContainerCardTestimonialL>
        <CardTestimonial
          imgCompany={require("../assets/images/meta-testimonial.png")}
          author="Rachel Patel"
          testimonio="I highly recommend the Writecream Business Description"
          yellowStars={5}
        />
      </ContainerCardTestimonialL>
    </ContainerBoxTestimonial>
  );
};

export default BoxTestimonial;
