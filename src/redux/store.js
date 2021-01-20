import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const initialState = {
  locationName: "Tokopedia Building",
  orderDate: new Date(),
  orderType: "lunch",
  totalItems: 0,
  totalPrice: 0,
  menus: [],
  locationModal: false,
  cartModal: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOCATION":
      return {
        ...state,
        locationName: action.location,
        locationModal: false,
      };
    case "SET_DATE":
      return {
        ...state,
        orderDate: new Date(
          state.orderDate.setDate(state.orderDate.getDate() + action.date)
        ),
      };
    case "SET_ORDER_TYPE":
      return {
        ...state,
        orderType: action.order,
      };
    case "ADD_ITEMS":
      return {
        ...state,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + action.price,
        menus: [...state.menus, action.id],
        cartModal: true,
      };
    case "TOGGLE_MODAL":
      return {
        ...state,
        locationModal: state.locationModal === false ? true : false,
      };
    default:
      return state;
  }
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
