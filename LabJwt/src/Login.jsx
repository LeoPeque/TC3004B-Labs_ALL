import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./hook/useAuth"; 

import "./styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {autenticado} = useAuth();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    
    try {
      // Llamada al backend (cambia el endpoint según tu API)
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Credenciales incorrectas");
      }

      const data = await response.json();
     
      // Almacena el token en localStorage
    localStorage.setItem("token", data.token);
    localStorage.setItem("id", data.id);    
    
navigate("/dashboard"); 
    navigate("/dashboard");   
    
    
      // Aquí puedes redirigir al usuario o ejecutar cualquier acción
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="iniciar-sesion-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <p>Email:</p>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div className="campo">
          <p>Contraseña:</p>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <div className="boton">
            <button type="submit">Iniciar Sesión</button>
        </div>
        
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;