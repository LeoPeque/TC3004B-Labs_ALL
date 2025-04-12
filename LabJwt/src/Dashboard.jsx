import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

import "./styles/dashboard.css";

const Dashboard = () => { 
    const [error, setError] = useState(null);

    const [id, setId] = useState(null);
    const [nombre,setNombre] = useState(null);
    const [edad,setEdad] = useState(null);
    const [carrera,setCarrera] = useState(null);
    const [semestre,setSemestre] = useState(null);


    const navigate = useNavigate();
    const autorizacion = async () => {
        try {
            const response = await fetch("http://localhost:4000/protected", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
        }); 
            if (!response.ok) {
                throw new Error("Token inválido o expirado");
            }


        
        } catch (err) {
            setError(err.message);
            navigate("/"); 
            alert("Token inválido o expirado");
        }
    }

    const obtenerInfo = async () => {
        try {
            const response = await fetch("http://localhost:4000/info", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    id: `${localStorage.getItem("id")}`,
                }
            });
            if (!response.ok) {
                throw new Error("Token inválido o expirado");
            }
            const data = await response.json();
            setId(data.data.id);
            setNombre(data.data.nombre);
            setEdad(data.data.edad);
            setCarrera(data.data.carrera);
            setSemestre(data.data.semestre);

        } catch (err) {
            setError(err.message);
        }
    }

    useEffect(() => {
        autorizacion();
    }, []);

    return (

        <div className="dashboard-container">
            <h2>Dashboard</h2>
            <div>
                <div className="container">
                    {id && <p>ID: {id}</p>}
                    { nombre && <p>Nombre: {nombre}</p>}
                    { edad && <p>Edad: {edad} años</p>}
                    { carrera && <p>Carrera: {carrera}</p>}
                    { semestre && <p>Semestre: {semestre}</p>}
                </div>
                

            </div>
            <div className="boton">
            
            <button onClick={() => {
                    obtenerInfo();
                }}>Obtener información</button>
            <button onClick={() => {
                    localStorage.clear();
                    navigate("/");
                }}>Cerrar sesión</button>
            </div>
        </div>
    );
};


export default Dashboard
