import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Text from "./components/Text";

const ModalCart = styled.div`
  position: fixed;
  bottom: 0;
  display: none;
  width: 100%;
`;

const CartContainer = styled.div`
  width: inherit;
  margin: 8px;
  padding: 16px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.DarkRed};
  justify-content: space-between;
  display: flex;

  .icons {
    color: white;
    display: flex;
    align-items: center;
  }
`;

const Cart = (props) => {
  console.log(props.totalItems);
  if (props.totalItems > 0) {
    console.log(">0");
    document.querySelector("#modalCart").style.display = "flex";
  }

  // document.getElementById("cart").style.display = "block";

  return (
    <ModalCart id="modalCart">
      <CartContainer>
        <div>
          <Text bold color="white">
            {props.totalItems} Items | RP {props.totalPrice}
          </Text>
          <Text size="md" color="white">
            Termasuk ongkos kirim
          </Text>
        </div>
        <div className="icons">
          <i className="material-icons-outlined">shopping_cart</i>
          <i className="material-icons-round">keyboard_arrow_right</i>
        </div>
      </CartContainer>
    </ModalCart>
  );
};

const mapStateToProps = (state) => {
  return {
    totalItems: state.totalItems,
    totalPrice: state.totalPrice,
  };
};

export default connect(mapStateToProps)(Cart);
