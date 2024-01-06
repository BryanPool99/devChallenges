import styled from "styled-components";

export const ContainerBoxInfo = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 35rem;
    @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Image = styled.img`
    width: 2rem;
    border-radius: 50%;
    background: #F5C044;
    padding: 5px;
`;

export const Title = styled.h1`
   margin: 10px 0;
   font-size: 36px;
`;

export const Description = styled.p`
   font-size: 20px;
   color: #18181B;
`;
