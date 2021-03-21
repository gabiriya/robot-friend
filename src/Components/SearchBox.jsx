import React from "react";

const SearchBox = ({ SearchChange }) => {
 return (
  <div className="pa2">
   <input
    onChange={SearchChange}
    className="pa3 ba3 b--green bg-lightest-blue"
    type="search"
    name="search robots"
    placeholder="Search Robots"
    id="sr"
   />
  </div>
 );
};

export default SearchBox;
