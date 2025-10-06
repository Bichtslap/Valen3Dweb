// server.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3001; // Un puerto diferente al de tu proyecto principal

// Middlewares
app.use(cors()); // Para permitir que tu panel se comunique con este servidor
app.use(express.json({ limit: '50mb' })); // Para entender los datos JSON que manda el panel

// La ruta al archivo projects.json (ajustala si es necesario)
// '..' significa que sube un nivel (de editor-backend a la raíz del proyecto)
const projectsFilePath = path.join(__dirname, '..', 'public', 'projects.json');

// --- API para OBTENER los proyectos ---
app.get('/api/projects', (req, res) => {
  fs.readFile(projectsFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error al leer el archivo de proyectos.');
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

// --- API para GUARDAR los proyectos ---
app.post('/api/projects', (req, res) => {
  const projectsData = req.body;
  // Usamos JSON.stringify con formato para que el archivo quede legible
  fs.writeFile(projectsFilePath, JSON.stringify(projectsData, null, 2), 'utf8', (err) => {
    if (err) {
      return res.status(500).send('Error al guardar el archivo de proyectos.');
    }
    res.status(200).send({ message: 'Proyectos guardados con éxito!' });
  });
});

app.listen(port, () => {
  console.log(`
  --------------------------------------------------
  🚀 Servidor del editor corriendo en http://localhost:${port}
  Este servidor se encarga de leer y escribir tu projects.json.
  Dejalo corriendo mientras usas el panel de edición.
  --------------------------------------------------
  `);
});