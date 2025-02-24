import React from "react";

const AddressCard = ({ city, state, country }) => {
  return (
    <div style={{ height: "200px", width: "200px", border: "1px solid black" }}>
      <h2>City :{city}</h2>
      <p>State :{state}</p>
      <p>Country : {country}</p>
    </div>
  );
};

export default AddressCard;
