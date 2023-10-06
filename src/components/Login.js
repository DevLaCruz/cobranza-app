import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = () => {
    // Simula la lógica de inicio de sesión
    if (username === "usuario" && password === "contraseña") {
      // Credenciales válidas, redirige al dashboard
      history.push("/dashboard");
    } else {
      alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Iniciar Sesión</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Usuario:
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleLogin}
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
