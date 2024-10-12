import React from "react";
import Button from "./Button";
import "./Card.scss";
const Card = ({ title }) => {
  return (
    <div className="w-auto h-40 m-5 bg-white text-2xl p-2 flex flex-col justify-between m-3">
      <h1>{title}</h1>
      <Button>View</Button>
    </div>
  );
};

export default Card;
