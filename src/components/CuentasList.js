import React from "react";

const CuentasList = ({ cuentas, onDeleteCuenta, onEditCuenta, onCobrar }) => {
  return (
    <div>
      <h2>Lista de Cuentas</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Producto</th>
            <th>Saldo</th> {/* Cambiar a "Saldo" en lugar de "Monto" */}
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cuentas.map((cuenta, index) => (
            <tr key={index}>
              <td>{cuenta.cliente}</td>
              <td>{cuenta.producto}</td>
              <td>{cuenta.saldo}</td> {/* Mostrar el saldo en lugar del monto */}
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => onEditCuenta(cuenta)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger btn-sm me-2"
                  onClick={() => onDeleteCuenta(index)}
                >
                  Eliminar
                </button>
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => onCobrar(index)}
                >
                  Cobrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CuentasList;
