import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

// components
import Text from "./Text";

// styled components
const LocationContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 16px;
  padding-bottom: 8px;

  i {
    font-size: 24px;
  }
`;

const LocationContent = styled.div`
  padding: 0 16px;
  cursor: pointer;
  flex-grow: 1;
`;

const LocationName = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  i {
    color: ${(props) => props.theme.Red};
  }
`;

const LocationBar = (props) => {
  return (
    <LocationContainer>
      <i class="material-icons-round back">west</i>
      <LocationContent onClick={props.toggleModal}>
        <Text uppercase size="sm" color="gray">
          Alamat Pengiriman
        </Text>
        <LocationName>
          <Text bold size="lg">
            {props.locationName}
          </Text>
          <i class="material-icons-round">expand_more</i>
        </LocationName>
      </LocationContent>
    </LocationContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    locationName: state.locationName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: () => dispatch({ type: "TOGGLE_MODAL" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationBar);
