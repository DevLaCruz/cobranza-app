// src/App.js
import React, { useState } from "react";
import CobranzaForm from "./components/CobranzaForm";
import CuentasList from "./components/CuentasList";
import CobroModal from "./components/CobroModal";
import Dashboard from "./components/Dashboard";

function App() {
  const [cuentas, setCuentas] = useState([]);
  const [cuentaEnEdicion, setCuentaEnEdicion] = useState(null);
  const [historialCobros, setHistorialCobros] = useState([]);
  const [sectores, setSectores] = useState([]);
  const [showDashboard, setShowDashboard] = useState(true);
  const [viewSector, setViewSector] = useState(null);
  const [totalCobros, setTotalCobros] = useState(0); // Variable para el total de los cobros
  

  const handleAddCuenta = (nuevaCuenta) => {
    nuevaCuenta.saldo = nuevaCuenta.monto;
    nuevaCuenta.historialCobros = [];
    setCuentas([...cuentas, nuevaCuenta]);
  };

  const handleDeleteCuenta = (index) => {
    const nuevasCuentas = [...cuentas];
    nuevasCuentas.splice(index, 1);
    setCuentas(nuevasCuentas);
  };

  const handleEditCuenta = (cuenta) => {
    setCuentaEnEdicion(cuenta);
  };

  const handleOpenCobroModal = (index) => {
    setCuentas((prevCuentas) => {
      const cuentasActualizadas = [...prevCuentas];
      cuentasActualizadas[index].isCobroModalOpen = true;
      return cuentasActualizadas;
    });
  };

  const handleCloseCobroModal = (index) => {
    setCuentas((prevCuentas) => {
      const cuentasActualizadas = [...prevCuentas];
      cuentasActualizadas[index].isCobroModalOpen = false;
      return cuentasActualizadas;
    });
  };

 const handleCobroConfirm = (index, montoCobrado) => {
  setCuentas((prevCuentas) => {
    const cuentasActualizadas = [...prevCuentas];
    const saldoAnterior = cuentasActualizadas[index].saldo;
    cuentasActualizadas[index].saldo -= montoCobrado;
    cuentasActualizadas[index].historialCobros.push({
      fechaHora: new Date().toLocaleString(),
      montoCobrado,
      saldo: cuentasActualizadas[index].saldo,
    });
    cuentasActualizadas[index].isCobroModalOpen = false;

    // Si el saldo llega a 0, elimina la cuenta
    if (cuentasActualizadas[index].saldo <= 0) {
      cuentasActualizadas.splice(index, 1);
    }

    // Actualizar el total de los cobros
    setTotalCobros((prevTotal) => prevTotal + montoCobrado);

    return cuentasActualizadas;
  });
};

  const handleViewSector = (index) => {
    setViewSector(index);
    setShowDashboard(false);
  };

  const handleBackToDashboard = () => {
    setShowDashboard(true);
    setViewSector(null);
  };

  // Función para crear un nuevo sector
const handleAddSector = () => {
  const nombreSector = prompt("Ingrese el nombre del sector:");
  if (nombreSector) {
    const nuevoSector = { nombre: nombreSector };
    setSectores([...sectores, nuevoSector]);
  }
};

// Función para editar un sector en un índice dado
const handleEditSector = (index) => {
  const nombreSector = prompt("Ingrese el nuevo nombre del sector:");
  if (nombreSector) {
    const sectoresActualizados = [...sectores];
    sectoresActualizados[index].nombre = nombreSector;
    setSectores(sectoresActualizados);
  }
};

// Función para eliminar un sector en un índice dado
const onDeleteSector = (index) => {
  const confirmacion = window.confirm("¿Está seguro de eliminar este sector?");
  if (confirmacion) {
    const sectoresActualizados = [...sectores];
    sectoresActualizados.splice(index, 1);
    setSectores(sectoresActualizados);
  }
};



  return (


    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
        {viewSector === null ? (
          <Dashboard
            sectores={sectores}
            onViewSector={handleViewSector}
            onAddSector={handleAddSector}
            onDeleteSector={onDeleteSector}
            onEditSector={handleEditSector}
          />
          ) : (
            <CobranzaForm
              onAddCuenta={handleAddCuenta}
              cuentaEnEdicion={cuentaEnEdicion}
              cuentas={cuentas}
              setCuentaEnEdicion={setCuentaEnEdicion}
            />
          )}
        </div>
        <div className="col-md-6">
          {showDashboard ? null : (
            <CuentasList
            cuentas={cuentas}
            onDeleteCuenta={handleDeleteCuenta}
            onEditCuenta={handleEditCuenta}
            onCobrar={handleOpenCobroModal}
          />
          )}
           <div className="mt-3">
    <strong>Total de Cobros: ${totalCobros.toFixed(2)}</strong>
  </div>
  
        </div>
        
      </div>
      {cuentas.map((cuenta, index) => (
        <CobroModal
          key={index}
          isOpen={cuenta.isCobroModalOpen}
          onRequestClose={() => handleCloseCobroModal(index)}
          onConfirm={(montoCobrado) => handleCobroConfirm(index, montoCobrado)}
          historialCobros={cuenta.historialCobros}
          monto={cuenta.monto}
        />
      ))}

      
    </div>
  );
  
}

export default App;
