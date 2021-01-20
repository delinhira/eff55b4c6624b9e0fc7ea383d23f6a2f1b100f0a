import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

// components
import Text from "./Text";

// styled components
const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  cursor: pointer;

  .icon {
    margin-right: 8px;
    height: 16px;
    padding: 4px;
    border-radius: 100%;
    background-color: ${(props) => props.theme.LightGray};
  }
  span {
    font-size: 16px;
    color: ${(props) => props.theme.Gray};
  }
`;

const LocationContent = styled.div`
  flex-grow: 1;
  border-bottom: 1px solid ${(props) => props.theme.LightGray};
  padding: 8px 4px;
`;

const LocationItem = (props) => {
  return (
    <LocationContainer onClick={() => props.setLocation(props.title)}>
      <div className="icon">
        <span className="material-icons-round">place</span>
      </div>
      <LocationContent>
        <Text bold>{props.title}</Text>
        <Text size="md" color="gray">
          {props.address}
        </Text>
      </LocationContent>
    </LocationContainer>
  );
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLocation: (location) =>
      dispatch({ type: "SET_LOCATION", location: location }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationItem);
