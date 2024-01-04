import { useState } from "react";
import axios from "axios";

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [surahData, setSurahData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://quran-api.santrikoding.com/api/surah/${searchTerm}`,
      );
      setSurahData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div className="element_search_items">
      <input
        type="text"
        placeholder="Cari Surah"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" onClick={handleSearch} disabled>Cari</button>
      {surahData && (
        <div>
          <h2>{surahData.data.name}</h2>
          <p>{surahData.data.translation}</p>
        </div>
      )}
      </div>
    </div>
  );
}

export default SearchComponent;
