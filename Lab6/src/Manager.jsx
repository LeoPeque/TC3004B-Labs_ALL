import React, { useState } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const initialData = [
  { id: 1, nombre: "Jorge Carranza", empresa: "Tec" },
  { id: 2, nombre: "Ramon Velez", empresa: "Banorte" },
  { id: 3, nombre: "Hugo Sanchez", empresa: "Real Madrid" },
  { id: 4, nombre: "Rafael Marquez", empresa: "Barcelona" },
  { id: 5, nombre: "Sergio Perez", empresa: "Oracle Red Bull Racing" },
  { id: 6, nombre: "Max Verstapen", empresa: "Oracle Red Bull Racing" },
  { id: 7, nombre: "Carlos Sainz", empresa: "Williams Racing" },
];

const Manager = () => {
  const [data, setData] = useState(initialData);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalActualizar, setModalActualizar] = useState(false);
  const [form, setForm] = useState({
    id: '',
    nombre: '',
    empresa: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const mostrarModalInsertar = () => {
    setModalInsertar(true);
  };

  const cerrarModalInsertar = () => {
    setModalInsertar(false);
  };

  const mostrarModalActualizar = (dato) => {
    setForm(dato);
    setModalActualizar(true);
  };

  const cerrarModalActualizar = () => {
    setModalActualizar(false);
  };

  const insertar = () => {
    const newEntry = {
      id: data.length + 1,
      nombre: form.nombre,
      empresa: form.empresa
    };
    setData([...data, newEntry]);
    setModalInsertar(false);
  };

  const eliminar = (dato) => {
    const newData = data.filter(item => item.id !== dato.id);
    setData(newData);
  };

  const editar = () => {
    const newData = data.map(item => 
      item.id === form.id ? form : item
    );
    setData(newData);
    setModalActualizar(false);
  };

  return (
    <>
      <Container>
        <br />
        <Button color="success" onClick={mostrarModalInsertar}>
          Crear
        </Button>
        <br />
        <br />
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Empresa</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {data.map((dato) => (
              <tr key={dato.id}>
                <td>{dato.id}</td>
                <td>{dato.nombre}</td>
                <td>{dato.empresa}</td>
                <td>
                  <Button
                    color="primary"
                    onClick={() => mostrarModalActualizar(dato)}
                  >
                    Editar
                  </Button>{" "}
                  <Button color="danger" onClick={() => eliminar(dato)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Insertar nombre</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id: </label>
            <input
              className="form-control"
              readOnly
              type="text"
              value={data.length + 1}
            />
          </FormGroup>

          <FormGroup>
            <label>Nombre: </label>
            <input
              className="form-control"
              name="nombre"
              type="text"
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Empresa: </label>
            <input
              className="form-control"
              name="empresa"
              type="text"
              onChange={handleChange}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={insertar}>
            Insertar
          </Button>
          <Button className="btn btn-danger" onClick={cerrarModalInsertar}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalActualizar}>
        <ModalHeader>
          <div>
            <h3>Editar registro</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id: </label>
            <input
              className="form-control"
              readOnly
              type="text"
              value={form.id}
            />
          </FormGroup>

          <FormGroup>
            <label>Nombre: </label>
            <input
              className="form-control"
              name="nombre"
              type="text"
              value={form.nombre}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Empresa: </label>
            <input
              className="form-control"
              name="empresa"
              type="text"
              value={form.empresa}
              onChange={handleChange}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={editar}>
            Actualizar
          </Button>
          <Button className="btn btn-danger" onClick={cerrarModalActualizar}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Manager;