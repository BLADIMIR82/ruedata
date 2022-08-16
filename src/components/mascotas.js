import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  getMascotas,
  postMascotas,
  putMascotas,
  deleteMascotas,
} from "./callsMascotas";
import "../components/frontMascotas.css";

export default function Mascotas() {
  //Hooks//
  const [reload, setReload] = useState(false);
  const [modid, setModId] = useState();
  const [mascotas, setMascotas] = useState();

  useEffect(() => {
    getMascotas().then((response) => {
      setMascotas(response.data);
    });
  }, [reload]);

  //vars//
  let form = document.getElementById("form");
  let form1 = document.getElementById("form1");
  const MySwal = withReactContent(Swal);
  //functions//
 const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    var dataInput = {
      name: data.get("Nombre"),
      edad: data.get("Edad"),
      especie: data.get("Especie"),
    };

    postMascotas(dataInput);

    MySwal.fire({
      position: "top-end",
      icon: "success",
      title: `Se ha creado tu mascota "${dataInput.name}"`,
      showConfirmButton: false,
      timer: 1500,
    });
    setReload(!reload);
    form.reset();
  };


  function eliminarMascota(id) {
    setReload(!reload);
    MySwal.fire({
      position: "top-end",
      icon: "success",
      title: "La Mascota se ha eliminado",
      showConfirmButton: false,
      timer: 1500,
    });
    deleteMascotas(id, reload);
  };
  
  const modificarMascota = (event) => {
    const data = new FormData(event.currentTarget);
    var dataInput = {
      name: data.get("Nombre"),
      edad: data.get("Edad"),
      especie: data.get("Especie"),
    };

    putMascotas(modid, dataInput);
    setReload(!reload);
    MySwal.fire({
      position: "top-start",
      icon: "success",
      title: `se ha modificado los datos de "${dataInput.name}"`,
      showConfirmButton: false,
      timer: 1500,
    });
    form1.reset();
  };

 

  return (
    <div className="container-principal">
      <div className="title-principal">
        <h1>Modulo De Mascotas</h1>
      </div>
      <div className="container-form">
        <div>
          <h2>Crear Mastoca</h2>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
                id="form"
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="Name"
                      name="Nombre"
                      required
                      fullWidth
                      id="Nombre"
                      label="Nombre"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      type="number"
                      id="Edad"
                      name="Edad"
                      autoComplete="Edad"
                      label="Edad"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      id="Especie"
                      name="Especie"
                      label="Especie"
                      required
                    >
                      <option defaultValue>Seleccione Especie</option>
                      <option value="Perro">Perro</option>
                      <option value="Gato">Gato</option>
                      <option value="Ave">Ave</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Enviar
                </Button>
              </Box>
            </Box>
          </Container>
        </div>
        <div>
          <h2>Modificar datos de la Mascota</h2>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="form"
                noValidate
                onSubmit={modificarMascota}
                sx={{ mt: 3 }}
                id="form1"
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="Nombre"
                      name="Nombre"
                      required
                      fullWidth
                      id="Name"
                      label="Nombre"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="Edad"
                      name="Edad"
                      type="number"
                      autoComplete="Edad"
                      label="Edad"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      id="Especie"
                      name="Especie"
                      label="Especie"
                      required
                    >
                      <option defaultValue>Seleccione Especie</option>
                      <option value="Perro">Perro</option>
                      <option value="Gato">Gato</option>
                      <option value="Ave">Ave</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Enviar
                </Button>
              </Box>
            </Box>
          </Container>
        </div>
      </div>
      {/* Table */}
      <div className="container-table">
        <table className="table border-primary ">
          <thead className="table-primary">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Edad </th>
              <th scope="col">Especie </th>
            </tr>
          </thead>
          {mascotas?.map((item, index) => (
            <tbody key={index}>
              <tr>
                <td>
                  {" "}
                  <b>{item.dataInput.name}</b>
                </td>
                <td>
                  <b>{item.dataInput.edad}</b>
                </td>
                <td>{item.dataInput.especie}</td>
              </tr>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => setModId(item._id)}
              >
                Modificar
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => eliminarMascota(item._id)}
              >
                Eliminar
              </button>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
