import React from "react";

function TryMapInComponent(props) {
  return (
    <ul>
      {props.listOfNums.map((num) => (
        <li key={num}>{num}</li>
      ))}
    </ul>
  );
}

export default TryMapInComponent;
