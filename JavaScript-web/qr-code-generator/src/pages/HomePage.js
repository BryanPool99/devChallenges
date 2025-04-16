import React from 'react';
import ContainerInput from '../components/ContainerInput';
import ImgLogo from '../assets/images/logo-qr-generator.svg';
import { ContainerHomePage } from '../styles/HomePageStyles';
const HomePage=()=>{
    
    return(
        <ContainerHomePage>
            <img src={ImgLogo} alt="logo" />
            <ContainerInput/>
        </ContainerHomePage>
    )
};
export default HomePage;