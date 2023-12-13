import { Route, Routes } from "react-router-dom";
import HomPages from "./pages/HomPages";
import NavbarComponent from "./component/NavbarComponent";
import FavoritPages from "./pages/FavoritPages";
import SettingPages from "./pages/SettingPages";
import Image from "./assets/image/Logo.png";
import TentangKamiPages from "./pages/TentangKamiPages";
import AlQuranComponent from "./component/AlQuranComponent";
import AsmaulHusnaComponent from "./component/AsmaulHusnaComponent";
import WiridComponent from "./component/WiridComponent";
import JuzAmmaComponent from "./component/JuzAmmaComponent";
import DoaComponent from "./component/DoaComponent";
import BacaanSolatComponent from "./component/BacaanSolatComponent";
import SurahDetailComponent from "./component/SurahDetailComponent";



function App() {
  return (
    <div className="pages_element_alyp">
    <div className="text-center">
    <img className="element_image" src={Image} />
    </div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomPages />} />
        <Route path="/favorite" element={<FavoritPages />} />
        <Route path="/setting" element={<SettingPages />} />
        <Route path="/tentangkami" element={<TentangKamiPages />} />
        <Route path="/AlQuran" element={<AlQuranComponent/>}/>
        <Route path="/AsmaulHusna" element={<AsmaulHusnaComponent/>} />
        <Route path="/Wirid" element={<WiridComponent/>} />
        <Route path="/Tahlil&Doa" element={<JuzAmmaComponent/>} />
        <Route path="/Doa-Doa" element={<DoaComponent/>} />
        <Route path="/SurahDetail/:nomor" element={<SurahDetailComponent/>} />
        <Route path="/BacaanSholat" element={<BacaanSolatComponent/>} />
      </Routes>
    </div>
  );
}

export default App;
