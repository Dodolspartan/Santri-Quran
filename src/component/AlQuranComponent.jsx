import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AlQuranComponent = () => {
  const url = "https://quran-api.santrikoding.com/api/surah/";
  const [surah, setSurah] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getDataAlquran = async () => {
    try {
      const response = await fetch(url);
      const dataAlquran = await response.json();
      setSurah(dataAlquran);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDataAlquran();
  }, []);

  const filteredSurah = surah.filter((s) =>
    s.nama_latin.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="component-al-quran mt-5">
      <div className="element-search-component">
        <input
          type="text"
          placeholder="Cari Surah..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <div className="element-slide-surah mt-3">
          <a href="">Yasin</a>
          <a href="">Al-Waqiah</a>
          <a href="">Ar-Rahman</a>
          <a href="">Al-Mulk</a>
        </div>
      </div>
      <div className="element_alquran_pages text-center">
        {isLoading ? (
          <div className="loading"></div>
        ) : (
          filteredSurah.map((ayat) => (
            <div className="card_element_alquran" key={ayat.nomor}>
              <Link className="surah_links" to={`/SurahDetail/${ayat.nomor}`}>
                <h3 className="title_text">{ayat.nama}</h3>
                <h6 className="title_ayat">{ayat.nama_latin}</h6>
                <span className="bg_text">
                  {ayat.jumlah_ayat} {ayat.tempat_turun}
                </span>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AlQuranComponent;
