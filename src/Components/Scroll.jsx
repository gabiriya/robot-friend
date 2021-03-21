import React from "react";

export default function Scroll(props) {
 return (
  <div style={{ overflow: "scroll", height: "800px" , }}>{props.children}</div>
 );
}
