import React, { useState, useEffect } from "react";

const CobranzaForm = ({ onAddCuenta, cuentaEnEdicion, cuentas, setCuentaEnEdicion, indexCuentaEnEdicion }) => {
  const [cliente, setCliente] = useState("");
  const [producto, setProducto] = useState("");
  const [monto, setMonto] = useState("");

  useEffect(() => {
    if (cuentaEnEdicion) {
      // Si cuentaEnEdicion tiene valores, asigna esos valores a los campos del formulario
      setCliente(cuentaEnEdicion.cliente);
      setProducto(cuentaEnEdicion.producto);
      setMonto(cuentaEnEdicion.monto);
    }
  }, [cuentaEnEdicion]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaCuenta = {
      cliente,
      producto,
      monto,
    };

    if (cuentaEnEdicion !== null) {
        const cuentasActualizadas = [...cuentas];
        cuentasActualizadas[cuentaEnEdicion] = nuevaCuenta;
        setCuentaEnEdicion(null);
      
        // Llama a la función onAddCuenta con las cuentas actualizadas
        onAddCuenta(cuentasActualizadas);
      } else {
        // Llama a la función onAddCuenta con la nueva cuenta
        onAddCuenta(nuevaCuenta);
      }
      
    setCliente("");
    setProducto("");
    setMonto("");
  };

  return (
    <div>
      <h2>{cuentaEnEdicion !== null ? "Editar Cuenta" : "Ingresar Cuenta"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="cliente" className="form-label">
            Cliente:
          </label>
          <input
            type="text"
            className="form-control"
            id="cliente"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="producto" className="form-label">
            Producto:
          </label>
          <input
            type="text"
            className="form-control"
            id="producto"
            value={producto}
            onChange={(e) => setProducto(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="monto" className="form-label">
            Monto:
          </label>
          <input
            type="number"
            className="form-control"
            id="monto"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {cuentaEnEdicion !== null ? "Actualizar Cuenta" : "Agregar Cuenta"}
        </button>
        {cuentaEnEdicion !== null && (
          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={() => setCuentaEnEdicion(null)}
          >
            Cancelar Edición
          </button>
        )}
      </form>
    </div>
  );
};
export default CobranzaForm;
