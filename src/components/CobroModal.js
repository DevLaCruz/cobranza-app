// src/components/CobroModal.js
import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const CobroModal = ({ isOpen, onRequestClose, onConfirm, historialCobros }) => {
  const [montoCobrado, setMontoCobrado] = useState("");

  const handleConfirm = () => {
    onConfirm(parseFloat(montoCobrado));
    setMontoCobrado("");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Cobro Modal"
    >
      <h2>Cobrar Monto</h2>
      <div>
        <label htmlFor="montoCobrado">Monto Cobrado:</label>
        <input
          type="number"
          id="montoCobrado"
          value={montoCobrado}
          onChange={(e) => setMontoCobrado(e.target.value)}
        />
      </div>
      <button onClick={handleConfirm}>Confirmar Cobro</button>
      <button onClick={onRequestClose}>Cancelar</button>

      {/* Historial de Cobros */}
      <div className="mt-4">
        <h3>Historial de Cobros</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Monto Cobrado</th>
              <th>Saldo</th>
            </tr>
          </thead>
          <tbody>
            {historialCobros.map((cobro, index) => (
              <tr key={index}>
                <td>{cobro.fechaHora.split(",")[0]}</td>
                <td>{cobro.fechaHora.split(",")[1]}</td>
                <td>{cobro.montoCobrado}</td>
                <td>{cobro.saldo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Modal>
  );
};

export default CobroModal;
