import styled from "styled-components";

export const ContainerQRCodePage = styled.section`
  padding: 40px 80px;
`;
export const ContainerLogo = styled.aside`
  max-width: 20rem;
  margin-bottom: 50px;
`;
export const ImageTagLogo = styled.img`
  max-width: 100%;
  width: auto;
`;
export const ContainerQrBtns = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Figure = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  padding: 30px;
`;
export const ContainerImgQR = styled.div`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4e80ee33;
  @media(max-width:500px){
    width: 90vw;
    height: 90vw;
  }
`;
export const ImageQR = styled.img`
  width: 80%;
  border-radius: 25px;
  padding: 20px;
  background: #fff;
`;
export const ContainerBtns = styled.figcaption`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
export const BtnAction = styled.button`
  width: 45%;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  color: #f2f5f9;
  border: none;
  background: #3662e3;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
`;
