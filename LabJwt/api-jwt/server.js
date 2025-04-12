const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const SECRET_KEY = "aj3Cl314#456";

const users = [
  {
    id: 1,
    email: "lpequenom@gmail.com",
    password: bcrypt.hashSync("54321", 10), 
  },
  {
    id: 2,
    email: "A01178029@tec.mx",
    password: bcrypt.hashSync("12345", 10), 
  }

];

const informacion = [{
  id: 1,
  nombre: "Leo",
  edad: "20",
  carrera: "ITC",
  semestre: "6"
},
{
  id: 2,
  nombre: "Peque",
  edad: "20",
  carrera: "ITC",
  semestre: "6"
}
];

// Ruta para iniciar sesión
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log("Login attempt:", { email, password }); 

  // Buscar al usuario por email
  const user = users.find((u) => u.email === email);
  console.log("User found:", user); 

  if (!user) {
    return res.status(401).json({ message: "Credenciales incorrectas" });
  }

  // Comparar la contraseña ingresada con la almacenada
  const isPasswordValid = bcrypt.compareSync(password, user.password);
  console.log("Password validation result:", isPasswordValid); 

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Credenciales incorrectas" });
  }

  // Generar el token
  const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
    expiresIn: "1h", // El token expira en 1 hora
  });

  res.json({ token, "id": user.id});
});

// Ruta protegida (requiere token)
app.get("/protected", (req, res) => {
  const authtoken = req.headers["authorization"];

  const token = authtoken.split(" ")[1];

  if (!authtoken) {
    return res.status(403).json({ message: "Token no proporcionado" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    res.json({ message: "Acceso permitido", data: decoded });
  } catch (error) {
    res.status(401).json({ message: "Token inválido" });
  }
});

app.get("/info",(req,res) => {
  const id = req.headers["id"];
  
  const authtoken = req.headers["authorization"];
  

  if (!authtoken) {
    return res.status(403).json({ message: "Token no proporcionado" });
  }
  
  try {
    const token = authtoken.split(" ")[1];
    const decoded = jwt.verify(token, SECRET_KEY); 
    const infoUser = informacion.find((i) => i.id == id);
    if (!infoUser) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }

    res.json({message:"Acceso permitido", data:infoUser})
     
  } catch (error) {
    return res.status(401).json({ message: "Token inválido o expirado" });
  }  
});


// Iniciar el servidor
app.listen(4000, () => {
  console.log("Servidor corriendo en http://localhost:4000");
});