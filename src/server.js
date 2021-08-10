//Importamos los paquetes
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

// simulamos la base de datos
let productos = [{name: "papitas"},{name:"agua"}];

//Generamos la app 
const app = express();

//Definición de rutas o endpoints 
const router = express.Router();
router.get('/', (req, res) => res.send({"mensaje": "hola"}));
router.get('/productos', (req, res) => res.send(productos));


app.use('/.netlify/functions/server', router);  // path must route to lambda


module.exports = app;
module.exports.handler = serverless(app);

// netlify comands; 
//npm install & npm run (build comand)
//dist(publish directory)

