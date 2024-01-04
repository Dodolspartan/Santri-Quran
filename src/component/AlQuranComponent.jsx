// AlQuranComponent.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchComponent from "./SearchComponent";

const AlQuranComponent = () => {
  const url = "https://quran-api.santrikoding.com/api/surah/";
  const [surah, setSurah] = useState([]);

  const getDataAlquran = async () => {
    try {
      const response = await fetch(url);
      const dataAlquran = await response.json();
      setSurah(dataAlquran);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getDataAlquran();
  }, []);

  return (
    <div>
    <SearchComponent />
      <div className="element_alquran_pages text-center">
      {surah.map((ayat) => (
          <div className="card_element_alquran" key={ayat.nomor}>
            <Link className="surah_links" to={`/SurahDetail/${ayat.nomor}`}>
              <h3 className="title_text">{ayat.nama}</h3>
              <h6 className="title_ayat">{ayat.nama_latin}</h6>
              <span className="bg_text d-flex">
                {ayat.jumlah_ayat} {ayat.tempat_turun}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlQuranComponent;
