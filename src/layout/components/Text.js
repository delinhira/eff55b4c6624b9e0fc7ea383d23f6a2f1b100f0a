import styled from "styled-components";

const Text = styled.p`
  margin: 0;
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "none")};
  font-weight: ${(props) =>
    props.bold ? "bold" : props.bolder ? "800" : "normal"};

  font-size: ${(props) => {
    switch (props.size) {
      case "sm":
        return "8px";
      case "md":
        return "12px";
      case "lg":
        return "16px";
      case "xl":
        return "20px;";
      default:
        return "14px";
    }
  }};

  color: ${(props) => {
    switch (props.color) {
      case "gray":
        return `${props.theme.Gray}`;
      case "light":
        return `${props.theme.LightGray}`;
      case "lighter":
        return `${props.theme.LighterGray}`;
      case "white":
        return `white`;
      default:
        return "";
    }
  }};
`;

export default Text;
