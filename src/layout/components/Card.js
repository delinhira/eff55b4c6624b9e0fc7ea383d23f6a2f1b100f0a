import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Text from "./Text";

const Button = styled.button`
  background-color: ${(props) => props.theme.Red};
  color: white;
  border: none;
  font-size: 12px;
  border-radius: 3px;
  display: flex;

  padding: 8px 16px;

  &:hover {
    background-color: ${(props) => props.theme.DarkRed};
  }

  &:active {
    background-color: ${(props) => props.theme.DarkRed};
  }
`;

const CardContainer = styled.div`
  margin: 16px;
  border-radius: 5px;
  box-shadow: 0px 8px 10px rgba(10, 31, 68, 0.1);

  img {
    width: 100%;
    border-radius: 5px 5px 0 0;
  }
`;

const CardContent = styled.div`
  padding: 14px;

  .body {
    margin: 8px 0;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    i {
      font-size: 14px;
    }
  }
`;

const Ratings = styled.div`
  display: flex;
  align-items: center;

  i {
    color: ${(props) => props.theme.Red};
    font-size: 16px;
  }

  p {
    margin-right: 4px;
  }
`;

const Card = (props) => {
  return (
    <CardContainer key={props.id}>
      <img src={props.image} alt={props.title} />
      <CardContent>
        <Ratings>
          <Text bold size="md" color="gray">
            {props.ratings}
          </Text>
          <i className="material-icons-round">star</i>
          <i className="material-icons-round">star</i>
          <i className="material-icons-round">star</i>
          <i className="material-icons-round">star</i>
          <i className="material-icons-round">star_half</i>
        </Ratings>

        <div className="body">
          <Text bold size="lg">
            {props.title}
          </Text>
          <Text bold size="md" color="gray">
            by {props.store} &#x2022; {props.type}
          </Text>
        </div>
        <div className="footer">
          <Text bold size="lg">
            RP {props.price}
          </Text>
          <Button
            onClick={() =>
              props.addItems(Number(props.price.split(",").join("")), props.id)
            }
          >
            ADD <i className="material-icons-round">add</i>
          </Button>
        </div>
      </CardContent>
    </CardContainer>
  );
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItems: (price, id) =>
      dispatch({ type: "ADD_ITEMS", price: price, id: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
