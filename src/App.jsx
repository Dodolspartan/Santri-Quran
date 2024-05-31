import { Route, Routes } from "react-router-dom";
import HomPages from "./pages/HomPages";
import NavbarComponent from "./component/NavbarComponent";
import SettingPages from "./pages/SettingPages";
import Image from "./assets/image/Logo.png";
import TentangkamiPages from "./pages/TentangkamiPages";
import AlQuranComponent from "./component/AlQuranComponent";
import AsmaulHusnaComponent from "./component/AsmaulHusnaComponent";
import WiridComponent from "./component/WiridComponent";
import JuzAmmaComponent from "./component/JuzAmmaComponent";
import DoaComponent from "./component/DoaComponent";
import BacaanSolatComponent from "./component/BacaanSolatComponent";
import SurahDetailComponent from "./component/SurahDetailComponent";
import NewsPages from "./pages/NewsPages";

function App() {
  return (
    <div className="pages_element_alyp">
      <div className="text-center">
        <img className="element_image" src={Image} />
      </div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomPages />} />
        <Route path="/news" element={<NewsPages />} />
        <Route path="/setting" element={<SettingPages />} />
        <Route path="/tentangkami" element={<TentangkamiPages />} />
        <Route path="/AlQuran" element={<AlQuranComponent />} />
        <Route path="/AsmaulHusna" element={<AsmaulHusnaComponent />} />
        <Route path="/Wirid" element={<WiridComponent />} />
        <Route path="/Tahlil&Doa" element={<JuzAmmaComponent />} />
        <Route path="/Doa-Doa" element={<DoaComponent />} />
        <Route path="/SurahDetail/:nomor" element={<SurahDetailComponent />} />
        <Route path="/BacaanSholat" element={<BacaanSolatComponent />} />
      </Routes>
    </div>
  );
}

export default App;
