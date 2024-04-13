import React from "react";
// Icons Surah Trend
import icons from "../assets/image/icon/Vector (2).svg";

function CariComponent() {
  return (
    <div className="element_cari_surah_items">
      <div className="icons_cari_surah">
        <img src={icons} alt="" />
      </div>
      <div className="latin_text">
        <h6>Al-Fatihah</h6>
      </div>
    </div>
  );
}

export default CariComponent;
