import React from "react";
//Ambil Data dari API
import { bacaSolat } from "../API/index";

function BacaanSolatComponent() {
  return (
    <div className="element_bacaansl_items">
      {bacaSolat.map((solat) => (
        <div className="card_items_slt" key={solat.id}>
          <h3 className="title_heading">{solat.name}</h3>
          <p className="text_bacaan">{solat.arabic}</p>
          <h6 className="text_terjemah">{solat.terjemahan}</h6>
        </div>
      ))}
    </div>
  );
}

export default BacaanSolatComponent;
