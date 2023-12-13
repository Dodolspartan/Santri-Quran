// Periksa apakah bacaDoa adalah fungsi atau array di ../API/index
// Jika bacaDoa adalah fungsi, panggil fungsinya untuk mendapatkan array
import { bacaDoa } from "../API/index";

function DoaComponent() {


  return (
    <div className="element_page_doa">
      {bacaDoa.map((baca) => (
        <div className="element_card_items" key={baca.id}>
          <p>{baca.doa}</p>
          <h2>{baca.ayat}</h2>
        </div>
      ))}
    </div>
  );
}

export default DoaComponent;
