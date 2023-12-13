import React from "react";
import { asmaulHusna } from "../API/index"; // Make sure the path is correct

function AsmaulHusnaComponent() {
  return (
    <div className="element_pages_asmaulhusna">
      {asmaulHusna.map((asma) => (
        <div className="element_card_items" key={asma.id}>
          <h3>{asma.arab}</h3>
          <p>{asma.latin}</p>
        </div>
      ))}
    </div>
  );
}

export default AsmaulHusnaComponent;
