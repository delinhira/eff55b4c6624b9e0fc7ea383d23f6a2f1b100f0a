import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Text from "./components/Text";
import LocationItem from "./components/LocationItem";
import { connect } from "react-redux";

const ModalContainer = styled.div`
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  flex-direction: column-reverse;
`;

const Modal = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 5px 5px 0 0;
  height: 80%;

  .close-button {
    display: block;
    text-align: end;
    cursor: pointer;
  }

  .title {
    margin: 16px 0;
  }
`;

const Input = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;
  border: 1px solid ${(props) => props.theme.LightGray};
  border-radius: 3px;
  margin-bottom: 8px;

  i {
    font-size: 16px;
    color: ${(props) => props.theme.Red};
  }
  input {
    border: none;
    padding: 8px 16px;
    width: 100%;
    color: ${(props) => props.theme.DarkGray};
  }
`;

const LocationModal = (props) => {
  const [locations, setLocations] = useState([]);
  const [keyword, setKeyword] = useState("");
  let items = locations;

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
      .then((res) => res.json())
      .then((res) => setLocations(res));
  }, []);

  if (keyword.length > 3) {
    items = locations.filter((location) =>
      location.company.name.toLowerCase().includes(keyword)
    );
  }

  if (props.locationModal) {
    setTimeout(() => {
      document.getElementById("modal").style.display = "flex";
    }, 200);
  } else {
    setTimeout(() => {
      document.getElementById("modal").style.display = "none";
      document.getElementById("locationInput").value = "";
      setKeyword("");
    }, 200);
  }

  return (
    <ModalContainer id="modal">
      <Modal>
        <i
          class="material-icons-round close-button"
          onClick={props.toggleModal}
        >
          close
        </i>
        <Text bold size="xl" className="title">
          Cek makanan yang tersedia di lokasi kamu!
        </Text>
        <Input>
          <i class="material-icons-round">place</i>
          <input
            id="locationInput"
            type="text"
            placeholder="Coba ketik Roma"
            onChange={(e) => setKeyword(e.target.value.toLowerCase())}
          />
        </Input>
        {!keyword && (
          <>
            <LocationItem title="Kulina" address="Jalan Tudong Atas 28" />
            <LocationItem
              title="Pancoran Riverside Apartment"
              address="Pegadegan, Pancoran"
            />
            <LocationItem
              title="Jalan Tulodong Atas"
              address="Jalan Tudong Atas 28"
            />
          </>
        )}
        {keyword && keyword.length < 4 && (
          <LocationItem title="Mencari.." address="..." />
        )}
        {keyword.length > 3 &&
          items.map((item) => (
            <LocationItem
              title={item.company.name.split("-").join(" ")}
              address={item.address.street}
              onclick={() => props.setLocation(item.company.name)}
            />
          ))}
      </Modal>
    </ModalContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    locationModal: state.locationModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: () => dispatch({ type: "TOGGLE_MODAL" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationModal);
