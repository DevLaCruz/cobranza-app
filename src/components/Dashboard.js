import React, { useState } from "react";

const Dashboard = ({ sectores, onViewSector, onAddSector, onDeleteSector, onEditSector }) => {
  const [searchText, setSearchText] = useState("");
  const [selectedSectorIndex, setSelectedSectorIndex] = useState(null);

  // Filtrar sectores en función del texto de búsqueda
  const filteredSectores = sectores.filter((sector) =>
    sector.nombre.toLowerCase().includes(searchText.toLowerCase())
  );

  const toggleButtons = (index) => {
    if (selectedSectorIndex === index) {
      setSelectedSectorIndex(null);
    } else {
      setSelectedSectorIndex(index);
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Buscar sector..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <button onClick={onAddSector} className="btn btn-primary mb-3">
        Crear Sector
      </button>
      <div className="row">
        {filteredSectores.map((sector, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{sector.nombre}</h5>
                {selectedSectorIndex === index && (
                  <div className="mb-2">
                    <button
                      className="btn btn-danger btn-sm me-2"
                      onClick={() => onDeleteSector(index)}
                    >
                      Eliminar
                    </button>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => onEditSector(index)}
                    >
                      Editar
                    </button>
                  </div>
                )}
                <div
                  className="card-footer"
                  onDoubleClick={() => onViewSector(index)}
                  onClick={() => toggleButtons(index)} // Alternar la visibilidad de los botones
                >
                  Doble clic para ver cuentas
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
