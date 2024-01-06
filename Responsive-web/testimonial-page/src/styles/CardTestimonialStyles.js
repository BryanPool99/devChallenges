import styled from "styled-components";

export const Card = styled.div`
    max-width: 22rem;
    display: flex;
    flex-direction: column;
    padding: 20px 40px;
    border-radius: 10px;
    box-shadow: 0px 30px 100px 0px rgba(17, 23, 41, 0.05);
    background: #FFFFFF;
    font-size: 16px;
`;

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const LogoCompany = styled.img`
    width: 5rem;
`;
export const ContainerStars = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
`;
export const CardTitle = styled.h3`
   margin: 15px 0;
`;
