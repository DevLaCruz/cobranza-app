// src/components/SectorForm.js
import React, { useState } from "react";

const SectorForm = ({ sectores, onAddSector, onEditSector, onDeleteSector }) => {
  const [nombre, setNombre] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const handleAdd = () => {
    if (nombre.trim() === "") return;
    onAddSector({ nombre });
    setNombre("");
  };

  const handleEdit = () => {
    if (nombre.trim() === "") return;
    onEditSector(editIndex, { nombre });
    setNombre("");
    setEditIndex(-1);
  };

  return (
    <div>
      <h2>Administrar Sectores</h2>
      <input
        type="text"
        placeholder="Nombre del Sector"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      {editIndex === -1 ? (
        <button onClick={handleAdd}>Agregar Sector</button>
      ) : (
        <button onClick={handleEdit}>Editar Sector</button>
      )}
      <ul>
        {sectores.map((sector, index) => (
          <li key={index}>
            {sector.nombre}
            <button onClick={() => onEditSector(index, sector)}>Editar</button>
            <button onClick={() => onDeleteSector(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectorForm;
