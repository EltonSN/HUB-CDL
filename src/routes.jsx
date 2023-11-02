import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Perfil from "./pages/Perfil";

import Alimentacao from "./pages/Alimentacao";
import Onibus from "./pages/Onibus";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}>
          <Route path="/perfil" element={<Perfil />} />
          <Route path="bus" element={<Onibus />} />
          <Route path="food" element={<Alimentacao />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}
