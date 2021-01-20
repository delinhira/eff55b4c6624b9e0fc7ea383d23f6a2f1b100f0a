import React from "react";
import styled from "styled-components";
import Text from "./Text";

const DateContainer = styled.div`
  scroll-snap-type: x mandatory;
  padding: 8px 16px;
  border-bottom: 1px solid ${(props) => props.theme.LighterGray};
  overflow-x: scroll;
  display: flex;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const DateItemContainer = styled.div`
  scroll-snap-align: center;
  padding: 8px;
  margin: 4px 16px;
  text-align: center;

  ${(props) => {
    if (props.disable) {
      return `
      color: ${props.theme.LightGray}

      `;
    }
  }};
`;

const DateList = () => {
  const dates = [];
  const today = new Date();
  const startDate = new Date(today.setDate(today.getDate() - 3));
  const endDate = new Date(today.setDate(today.getDate() + 19));

  while (startDate <= endDate) {
    dates.push(new Date(startDate));
    startDate.setDate(startDate.getDate() + 1);
  }

  const isWeekend = (day) => {
    if (day === 0 || day === 6) return true;
  };

  // const dateSlider = document.getElementById("dateContainer");

  return (
    <DateContainer id="dateContainer">
      {dates.map((date, index) => (
        <DateItemContainer key={index} disable={isWeekend(date.getDay())}>
          <Text uppercase size="sm">
            {date.toLocaleString("id-ID", { weekday: "short" })}
          </Text>
          <Text bold>{date.getDate()}</Text>
        </DateItemContainer>
      ))}
    </DateContainer>
  );
};

export default DateList;
