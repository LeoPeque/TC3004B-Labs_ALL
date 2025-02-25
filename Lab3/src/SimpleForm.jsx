import { useEffect, useState } from 'react';
import { Message } from './Message';



export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    matricula: '',
    nombre: '',
    apellidos: '',
    edad: '',
    universidad: '',
    carrera: ''
  });

  const { matricula, nombre, apellidos, edad, universidad, carrera } = formState;

  const [submitted, setSubmitted] = useState(false);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

//   useEffect(() => {
//     // console.log('useEffect called!');
//   }, []);

//   useEffect(() => {
//     // console.log('formState changed!');
//   }, [formState]);

//   useEffect(() => {
//     // console.log('email changed!');
//   }, [email]);

  return (
    <>
      <h1>Formulario de Estudiante</h1>
      <hr />

      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Matrícula"
          name="matricula"
          value={matricula}
          onChange={onInputChange}
        />

        <input
          type="text"
          className="form-control mb-2"
          placeholder="Nombre"
          name="nombre"
          value={nombre}
          onChange={onInputChange}
        />

        <input
          type="text"
          className="form-control mb-2"
          placeholder="Apellidos"
          name="apellidos"
          value={apellidos}
          onChange={onInputChange}
        />

        <input
          type="number"
          className="form-control mb-2"
          placeholder="Edad"
          name="edad"
          value={edad}
          onChange={onInputChange}
        />

        <input
          type="text"
          className="form-control mb-2"
          placeholder="Universidad"
          name="universidad"
          value={universidad}
          onChange={onInputChange}
        />

        <input
          type="text"
          className="form-control mb-2"
          placeholder="Carrera"
          name="carrera"
          value={carrera}
          onChange={onInputChange}
        />

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>

      {submitted && (
        <div className="mt-4">
          <h2>Datos Enviados:</h2>
          <p><strong>Matrícula:</strong> {matricula}</p>
          <p><strong>Nombre:</strong> {nombre}</p>
          <p><strong>Apellidos:</strong> {apellidos}</p>
          <p><strong>Edad:</strong> {edad}</p>
          <p><strong>Universidad:</strong> {universidad}</p>
          <p><strong>Carrera:</strong> {carrera}</p>
        </div>
      )}
    </>
  );
};