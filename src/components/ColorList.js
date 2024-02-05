import React from "react";

// ColorItem component
function ColorItem(props) {
  return <li style={{ color: props.color }}>{props.color}</li>;
}

// ColorList component
function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  // Removed unused variable
  return (
    <ul>
      {colors.map((color) => (
        <ColorItem key={color} color={color} />
      ))}
    </ul>
  );
}

export default ColorList;

