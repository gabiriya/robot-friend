import React from "react";
import Card from "./Card";
// import { robots } from "../Data/RobotsList";

const CardList = ({ Robots }) => {
 return (
  <ul>
   {Array.isArray(Robots) ? (
    Robots.map((robot) => (
     <Card name={robot.name} email={robot.email} key={robot.id} id={robot.id} />
    ))
   ) : (
    <></>
   )}
  </ul>
 );
};

export default CardList;
