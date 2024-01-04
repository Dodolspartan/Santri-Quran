import React from "react";
import { asmaulHusna } from "../API/index"; // Make sure the path is correct

function AsmaulHusnaComponent() {
  return (
    <div className="pages-asmaul-husna">
    <h3 className="text-center">Asmaul Husna</h3>
    <div className="element_pages_asmaulhusna">
      {asmaulHusna.map((asma) => (
        <div className="element_card_items" key={asma.id}>
          <h3>{asma.arab}</h3>
          <p>{asma.latin}</p>
        </div>
      ))}
    </div>
    </div>
  );
}

export default AsmaulHusnaComponent;
