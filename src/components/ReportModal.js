// ReportModal.js
import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ReportModal = ({ isOpen, onRequestClose, cuentas }) => {
  // Estado para el filtro seleccionado
  const [filtro, setFiltro] = useState("dia"); // Valor predeterminado: día

  // Estado para mostrar el resultado del reporte
  const [resultadoReporte, setResultadoReporte] = useState(null);

  // Función para generar el reporte en función del filtro seleccionado
  const generarReporte = () => {
    // Implementa la lógica para generar el reporte según el filtro seleccionado
    // Puedes acceder a la lista de cuentas y calcular el total de cobros
    // para el día, la semana, el mes o el año correspondiente.
    // Luego, muestra el resultado en el componente.

    // Ejemplo: Calcular el total de cobros para el día
    if (filtro === "dia") {
      const totalDia = cuentas.reduce((total, cuenta) => {
        const historialDia = cuenta.historialCobros.filter(
          (registro) => registro.fechaHora.includes(new Date().toLocaleDateString())
        );
        const totalCobrosDia = historialDia.reduce(
          (total, registro) => total + registro.montoCobrado,
          0
        );
        return total + totalCobrosDia;
      }, 0);

      setResultadoReporte(`Total de Cobros para Hoy: $${totalDia.toFixed(2)}`);
    }

    // Implementa lógica similar para otros filtros (semana, mes, año).
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Reporte de Cobros"
    >
      <h2>Reporte de Cobros</h2>
      {/* Selector de filtro */}
      <div>
        <label htmlFor="filtro">Filtrar por: </label>
        <select
          id="filtro"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        >
          <option value="dia">Día</option>
          <option value="semana">Semana</option>
          <option value="mes">Mes</option>
          <option value="ano">Año</option>
        </select>
      </div>

      {/* Botón para generar el reporte */}
      <button onClick={generarReporte}>Generar Reporte</button>

      {/* Resultado del reporte */}
      {resultadoReporte && <div>{resultadoReporte}</div>}

      {/* Botón para cerrar el modal */}
      <button onClick={onRequestClose}>Cerrar</button>
    </Modal>
  );
};

export default ReportModal;
