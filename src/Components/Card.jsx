import React from "react";

function Card({ name, email, id, key }) {
 return (
  <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
   <li key={key}>
    <img src={`https://robohash.org/${id}`} alt="Robot" />
    <h4>{name}</h4>
    <p>{email}</p>
   </li>
  </div>
 );
}

export default Card;
