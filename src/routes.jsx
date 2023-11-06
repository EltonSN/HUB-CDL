import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Comentarios from "./pages/Comentarios";
import Config from "./pages/Configuracao";
import Sobre from "./pages/Sobre";

import Alimentacao from "./pages/Alimentacao";
import Onibus from "./pages/Onibus";
import Publico from "./pages/Publico";
import Historico from "./pages/Historico";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}>
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/comentarios" element={<Comentarios />} />
          <Route path="/config" element={<Config />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="bus" element={<Onibus />} />
          <Route path="food" element={<Alimentacao />} />
          <Route path="public" element={<Publico />} />
          <Route path="patri" element={<Historico />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}
