import React from 'react';
import BusquedaNoSerie from "../BusquedaNoSerie/BusquedaNoSerie";
import BusquedaQR from "../BusquedaQR/BusquedaQR";
import ConsultaEquipos from "../ConsultaEquipos/ConsultaEquipos";

function Equipos() {
  return (
    <>
      <ConsultaEquipos/>
      <BusquedaNoSerie/>
      <BusquedaQR />
    </>
  );
}

export default Equipos;