import React, { useState, useEffect } from "react";
import CardList from "./Components/CardList";
import "tachyons";
import axios from "axios";

import SearchBox from "./Components/SearchBox";
import Scroll from "./Components/Scroll";

const App = () => {
 // Fetch Data
 useEffect(() => {
  async function fetchRobots() {
   const Robots = await axios("https://jsonplaceholder.typicode.com/users");
   setRobots(Robots.data);
  }
  fetchRobots();
 }, []);
 //--- Declare state
 const [Robots, setRobots] = useState([]);
 const [SearchField, setSearchField] = useState("");

 //- On change function
 const onSearchChange = (event) => {
  setSearchField(event.target.value);
 };

 //--- Filtered Robots
 const filteredRobots = Robots.filter((robot) => {
  return (
   robot.name
    //    .toString()
    .toLowerCase()
    .includes(SearchField.toLowerCase())
  );
 });
 //---- Return
 return (
  <div className="tc">
   <SearchBox SearchChange={onSearchChange} />
   <Scroll>
    <CardList Robots={filteredRobots} />
   </Scroll>
  </div>
 );
};

export default App;
