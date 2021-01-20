import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

// styled components
const MenuButton = styled.button`
  font-weight: normal;
  width: 50%;
  padding: 8px 0;
  border-radius: ${(props) => (props.left ? "3px 0 0 3px" : "0 3px 3px 0")};
  border: 1px solid ${(props) => props.theme.LightGray};
  background-color: white;
  color: ${(props) => props.theme.LightGray};

  ${(props) => {
    if (props.active) {
      return `
      border: 1px solid ${props.theme.DarkGray};
      background-color: ${props.theme.DarkGray};
      color: white;
      `;
    }
  }}
`;

const MenuTypeContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  transition: top 0.3s;
  z-index: 0;
`;

const MenuTypeContent = styled.div`
  margin-top: 123px;
  padding: 8px 16px;
  background-color: white;
`;

const MenuType = (props) => {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("menuType").style.top = "0";
    } else {
      document.getElementById("menuType").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <MenuTypeContainer id="menuType">
      <MenuTypeContent>
        <MenuButton
          left
          active={props.orderType === "lunch" ? true : false}
          onClick={() => props.setOrderType("lunch")}
        >
          Lunch
        </MenuButton>
        <MenuButton
          active={props.orderType === "dinner" ? true : false}
          onClick={() => props.setOrderType("dinner")}
        >
          Dinner
        </MenuButton>
      </MenuTypeContent>
    </MenuTypeContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    orderType: state.orderType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setOrderType: (order) => dispatch({ type: "SET_ORDER_TYPE", order: order }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuType);
