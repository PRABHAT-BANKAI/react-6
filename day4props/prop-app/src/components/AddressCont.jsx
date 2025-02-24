import React from "react";
import AddressCard from "./AddressCard";

const AddressCont = () => {
  return (
    <>
      <AddressCard city={"surat"} state={"gujarat"} country={"india"} />
      <AddressCard city={"mumbai"} state={"maharashtra"} country={"india"} />
      <AddressCard city={"delhi"} state={"delhi"} country={"india"} />
    </>
  );
};

export default AddressCont;
