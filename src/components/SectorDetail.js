import React from "react";
import CobranzaForm from "./CobranzaForm";
import CuentasList from "./CuentasList";

const SectorDetail = ({ sector, onAddCuenta, cuentas, onDeleteCuenta, onEditCuenta, onCobrar }) => {
  return (
    <div>
      <h2>{sector.nombre}</h2>
      <CobranzaForm onAddCuenta={onAddCuenta} />
      <CuentasList cuentas={cuentas} onDeleteCuenta={onDeleteCuenta} onEditCuenta={onEditCuenta} onCobrar={onCobrar} />
    </div>
  );
};

export default SectorDetail;
