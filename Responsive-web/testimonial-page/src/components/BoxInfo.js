import React from 'react';
import { ContainerBoxInfo,Description,Image, Title } from '../styles/BoxInfoStyles';
import { ImageCheck } from '../styles/BoxListStyles';
import IconSvg from '../assets/images/Star_fill_gray.svg';
import IconCheck from '../assets/images/Done_ring_round_fill.svg';
import BoxList from './BoxList';
const BoxInfo=({ title, content })=>{
    const listsData = [
        { icon: <ImageCheck src={IconCheck} alt="icon-check" />, text: "Checklist to Review an Academic Paper" },
        { icon: <ImageCheck src={IconCheck} alt="icon-check" />, text: "Peer Review Checklist" },
        { icon: <ImageCheck src={IconCheck} alt="icon-check" />, text: "Checklist for Editors, Reviewers, and Authors of SPIE Journals" },
      ];
    return(
        <ContainerBoxInfo>
            <Image src={IconSvg} alt="icon-start" />
            <Title>{title}</Title>
            <Description>{content}</Description>
            <BoxList lists={listsData} />
        </ContainerBoxInfo>
    );
};
export default BoxInfo;