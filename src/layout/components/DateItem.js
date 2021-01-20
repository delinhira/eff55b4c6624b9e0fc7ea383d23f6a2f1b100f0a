import React from "react";
import styled from "styled-components";
import Text from "./Text";

const DateItemContainer = styled.div`
  ${(props) => {
    switch (props.color) {
      case "active":
        return `background-color: ${props.theme.Red};`;
      default:
        return "";
    }
  }}
`;

const DateItem = () => {
  return (
    <DateItemContainer>
      <Text uppercase size="sm">
        Sel
      </Text>
      <Text bold>19</Text>
    </DateItemContainer>
  );
};

export default DateItem;
