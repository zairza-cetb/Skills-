import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";

const Button = () => {
  return (
    <div>
      <button
        style={{
          backgroundColor: "#E0EAFF",
          width:"190px",
          color: "blue",
          fontWeight:"bold",
          alignItems:"center",
          padding: "15px",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
          display:"flex",
          justifyItems:"center",
          justifyContent:"space-evenly"
        }}
      >
        <BsPersonCircle
          style={{
            color: "rgb(169,169,169)",
            backgroundColor: "rgb(114, 110, 110)",
            borderRadius: "50%",
            padding: "3px",
            margin:"3px"
          }}
        />{" "}
        Person1

        <RiArrowDownSLine style={{
          color: "rgb(169,169,169)",
          margin:"3px",
          fontWeight:"bold",
          fontSize:"1rem"
        }}/>
      </button>
    </div>
  );
};

export default Button;
