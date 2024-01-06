import React from "react";
import styled from "styled-components";
// Definir estilos utilizando Styled Components
const Card = styled.section`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 16px 16px 20px 16px;
  margin: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 368px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;
const ContainerTag = styled.div`
  max-width: 65px;
  border-radius: 6px;
  background-color: #e6d6fc;
  margin: 16px 0;
  padding: 5px;
`;
const Tag = styled.h3`
  color: #883ae1;
  text-align: center;
  font-size: 10px;
  font-weight: 600;
`;

const Title = styled.h2`
  color: #20293a;
  font-size: 18px;
`;

const Content = styled.p`
  color: #6c727f;
  margin: 6px 0 20px 0;
`;

const Separator = styled.hr`
  border: 1px solid #E5EAF0; 
  margin-bottom: 12px;
`;

const Author = styled.p`
  color: #6c727f;
  font-size: 10px;
`;

const BlogCard = ({ image, tag, title, content, author }) => {
  return (
    <Card>
      <Image src={image} alt={title} />
      <ContainerTag>
        <Tag>{tag}</Tag>
      </ContainerTag>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <Separator />
      <Author> {author}</Author>
    </Card>
  );
};

export default BlogCard;
