//Importamos los paquetes
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

// simulamos la base de datos
let productos = [{
nombre: "Amor de un rato",
categoría: "Plantas florales",
tamaño: "6 pulgadas",
precio:"32.00",
imagen:""},

{name:"Geranio",
categoría: "Plantas florales",
tamaño: "6 pulgadas",
precio:"49.00",
imagen:""},

{name:"Anturio (Anthurium)",
categoría: "Plantas florales",
tamaño: "na",
precio:"179.00",
imagen:""},

{name:"Iresine",
categoría: "Plantas florales",
tamaño: "na",
precio:"35.00",
imagen:""},

{name:"Azalea",
categoría: "Plantas florales",
tamaño: "6 pulgadas",
precio:"69.00",
imagen:""},

{name:"Azalea",
categoría: "Plantas florales",
tamaño: "6 pulgadas",
precio:"69",
imagen:""},

{name:"Pata de elefante",
categoría: "Plantas de follaje",
tamaño: "51x15cm",
precio:"65.00",
imagen:""},

{name:"Palma Areca",
categoría: "Plantas de follaje",
tamaño: "120x19.6",
precio:"89.00",
imagen:""},

{name:"Potos",
categoría: "Plantas de follaje",
tamaño: "50x22cm",
precio:"99.00",
imagen:""},

{name:"Palo de Brasil",
categoría: "Plantas de follaje",
tamaño: "15cm",
precio:"99.00",
imagen:""},

{name:"Escudo Peersa",
categoría: "Plantas de follaje",
tamaño: "30x25cm",
precio:"39.00",
imagen:""},

{name:"Croto Petra",
categoría: "Plantas de follaje",
tamaño: "32x15cm",
precio:"65.00",
imagen:""},


{name:"Romero",
categoría: "Plantas comestibles",
tamaño: "4 pulgadas",
precio:"29.00",
imagen:""},


{name:"Menta",
categoría: "Plantas comestibles",
tamaño: "4 pulgadas",
precio:"29.00",
imagen:""},


{name:"Tomillo",
categoría: "Plantas comestibles",
tamaño: "4 pulgadas",
precio:"29.00",
imagen:""},


{name:"Orégano",
categoría: "Plantas comestibles",
tamaño: "4 pulgadas",
precio:"29.00",
imagen:""},


{name:"Moringa",
categoría: "Plantas comestibles",
tamaño: "73x17cm",
precio:"39.00",
imagen:""},


{name:"Cilantro",
categoría: "Plantas comestibles",
tamaño: "17x11cm",
precio:"30.00",
imagen:""},

];

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

