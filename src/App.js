import React, { Component } from "react";

import CardList from "./Components/CardList";
import SearchBox from "./Components/SearchBox";
import Scroll from "./Components/Scroll";

// import axios from "axios";
import "tachyons";
import { connect } from "react-redux";
import { setSearchField, loadRobotsList } from "./Redux/Actions";

class App extends Component {
 componentDidMount() {
  this.props.onRequestRobots();
 }

 render() {
  const { Robots, onSearchChange, searchField } = this.props;
  console.log("ROboT : " + Robots);
  // if (Array.isArray(Robots)) {
  const filtredArray = Robots.filter((robot) => {
   return (
    robot.name.toLowerCase().includes(searchField.toLowerCase()) ||
    robot.email.toLowerCase().includes(searchField.toLowerCase())
   );
  });
  console.log(filtredArray);
  // }
  return (
   <>
    {Array.isArray(Robots) ? (
     <div className="tc">
      <SearchBox SearchChange={onSearchChange} />
      <Scroll>
       <CardList Robots={filtredArray} />
      </Scroll>
     </div>
    ) : (
     <></>
    )}
   </>
  );
 }
}

const mapStateToProps = (state) => {
 console.log("state r : " + state.robotsReducer.RobotsList);
 return {
  searchField: state.SearchRobots.searchField,
  Robots: state.robotsReducer.RobotsList,
  isPending: state.robotsReducer.loadingRobots,
 };
};

const mapDispatchToProps = (dispatch) => {
 console.log("Dispatch :" + dispatch);
 return {
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(loadRobotsList()),
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
