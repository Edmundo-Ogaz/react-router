import {
    Route
  } from "react-router-dom";
import Comunas from "./comuna/comunas";
import NewComuna from "./comuna/newComuna";
import FiltroComuna from "./comuna/filtroComuna";
<Route path="comunas" element={<Comunas />}>
    <Route index element={<FiltroComuna />} />
    <Route path="filtro" element={<FiltroComuna />} />
    <Route path="newComuna" element={<NewComuna />} />
</Route>