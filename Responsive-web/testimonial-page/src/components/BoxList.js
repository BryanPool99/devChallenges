import React from "react";
import {
  ContainerBoxList,
  ListItem,
  Icon,
  ItemText,
} from "../styles/BoxListStyles";

const BoxList = ({ lists }) => {
  return (
    <ContainerBoxList>
      {lists.map((list, index) => (
        <ListItem key={index}>
          <Icon>{list.icon}</Icon>
          <ItemText>{list.text}</ItemText>
        </ListItem>
      ))}
    </ContainerBoxList>
  );
};
export default BoxList;
