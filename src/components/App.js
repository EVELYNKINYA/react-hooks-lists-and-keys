import React from "react";
import ColorList from "./ColorList";

const colorElements = colors.map((color) => {
  return (
    <li key={color} style={{ color: color }}>
      {color}
    </li>
  );
});

export default App;
