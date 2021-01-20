import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

// components
import Card from "./components/Card";
import Text from "./components/Text";

// images
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";

// styled components
const CardListContainer = styled.div`
  margin-top: 150px;
  padding-top: 25px;

  .date {
    margin: 0 16px;
  }
`;

const CardList = (props) => {
  const today = new Date();
  const foods = [
    {
      id: 1,
      title: "Roasted Chicken with Scrambled Egg",
      store: "Kulina",
      type: "Uptown Lunch",
      price: "35,000",
      ratings: "4.5",
      image: img1,
    },
    {
      id: 2,
      title: "Roasted Chicken with Scrambled Egg",
      store: "Kulina",
      type: "Uptown Lunch",
      price: "50,000",
      ratings: "4.5",
      image: img2,
    },
    {
      id: 3,
      title: "Roasted Chicken with Scrambled Egg",
      store: "Kulina",
      type: "Uptown Lunch",
      price: "45,000",
      ratings: "4.5",
      image: img3,
    },
    {
      id: 4,
      title: "Roasted Chicken with Scrambled Egg",
      store: "Kulina",
      type: "Uptown Lunch",
      price: "75,000",
      ratings: "4.5",
      image: img4,
    },
    {
      id: 5,
      title: "Roasted Chicken with Scrambled Egg",
      store: "Kulina",
      type: "Uptown Lunch",
      price: "25,000",
      ratings: "4.5",
      image: img5,
    },
  ];

  return (
    <CardListContainer
      id="cardListContainer"
      style={props.cartModal ? { marginBottom: "5rem" } : {}}
    >
      <Text className="date" bolder size="md">
        {today.toLocaleDateString("id-ID", { dateStyle: "full" })}
      </Text>
      {foods.map((food) => (
        <Card
          key={food.id}
          id={food.id}
          title={food.title}
          store={food.store}
          type={food.type}
          price={food.price}
          ratings={food.ratings}
          image={food.image}
        />
      ))}
    </CardListContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    cartModal: state.cartModal,
  };
};

export default connect(mapStateToProps)(CardList);
