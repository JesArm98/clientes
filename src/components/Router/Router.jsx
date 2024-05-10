import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Equipos from '../Equipos/Equipos/Equipos';
import BusquedaQR from '../Equipos/BusquedaQR/BusquedaQR';
import BusquedaNoSerie from '../Equipos/BusquedaNoSerie/BusquedaNoSerie';
import ConsultaEquipos from '../Equipos/ConsultaEquipos/ConsultaEquipos';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Equipos />} />
        <Route path="/equipos" element={<Equipos />} />
        <Route path="/qr" element={<BusquedaQR />} />
        <Route path="/no-serie" element={<BusquedaNoSerie />} />
        <Route path="/consulta" element={<ConsultaEquipos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;