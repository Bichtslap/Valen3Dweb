// server.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3001; 

// Middlewares
app.use(cors()); 
app.use(express.json({ limit: '50mb' })); 

// ---------------------------------------------------------
// 1. ESTA ES LA PARTE QUE TE FALTABA (SERVIR ARCHIVOS ESTÁTICOS)
// ---------------------------------------------------------
// Esto le dice a Express: "Cuando te pidan algo en /public, buscalo en la carpeta public de verdad"
// El path.join(__dirname, '..', 'public') asume que 'server.js' está en una subcarpeta y 'public' está afuera.
app.use('/public', express.static(path.join(__dirname, '..', 'public')));


// La ruta al archivo projects.json 
const projectsFilePath = path.join(__dirname, '..', 'public', 'projects.json');

// --- API para OBTENER los proyectos ---
app.get('/api/projects', (req, res) => {
  fs.readFile(projectsFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error("Error leyendo JSON:", err); // Agregué un log para ver si falla acá
      return res.status(500).send('Error al leer el archivo de proyectos.');
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

// --- API para GUARDAR los proyectos ---
app.post('/api/projects', (req, res) => {
  const projectsData = req.body;
  fs.writeFile(projectsFilePath, JSON.stringify(projectsData, null, 2), 'utf8', (err) => {
    if (err) {
      console.error("Error guardando JSON:", err);
      return res.status(500).send('Error al guardar el archivo de proyectos.');
    }
    res.status(200).send({ message: 'Proyectos guardados con éxito!' });
  });
});

app.listen(port, () => {
  console.log(`
  --------------------------------------------------
  🚀 Servidor corriendo en http://localhost:${port}
  
  👉 PARA ENTRAR AL EDITOR:
  http://localhost:3001/public/editor.html
  --------------------------------------------------
  `);
});