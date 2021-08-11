//Importamos los paquetes
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const cors = require("cors");
// simulamos la base de datos
let productos = [{
nombre: "Amor de un rato",
categoría: "Plantas florales",
tamaño: "6 pulgadas",
precio:"32.00",
imagen:"https://cdn.homedepot.com.mx/productos/953140/953140.jpg"},

{name:"Geranio",
categoría: "Plantas florales",
tamaño: "6 pulgadas",
precio:"49.00",
imagen:"https://cdn.homedepot.com.mx/productos/141250/141250.jpg"},

{name:"Anturio (Anthurium)",
categoría: "Plantas florales",
tamaño: "na",
precio:"179.00",
imagen:"https://cdn.homedepot.com.mx/productos/758609/758609.jpg"},

{name:"Iresine",
categoría: "Plantas florales",
tamaño: "na",
precio:"35.00",
imagen:"https://cdn.homedepot.com.mx/productos/627068/627068.jpg"},

{name:"Azalea",
categoría: "Plantas florales",
tamaño: "6 pulgadas",
precio:"69.00",
imagen:"https://cdn.homedepot.com.mx/productos/601195/601195.jpg"},

{name:"Flor del desierto (Adenium)",
categoría: "Plantas florales",
tamaño: "6 pulgadas",
precio:"69",
imagen:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRnZq3UyKxW32goHXG358LVJ-2NEqo_Yqn26QyqJbjhoqxgQOK0WqD_DuP-3uIjwGHcWMA_HcqbnHaE_99YPRWUzxzsPHBzg0wsg1QouMijz-qpophzzx66&usqp=CAE"},

{name:"Pata de elefante",
categoría: "Plantas de follaje",
tamaño: "51x15cm",
precio:"65.00",
imagen:"https://cdn.homedepot.com.mx/productos/957367/957367.jpg"},

{name:"Palma Areca",
categoría: "Plantas de follaje",
tamaño: "120x19.6",
precio:"89.00",
imagen:"https://cdn.homedepot.com.mx/productos/817277/817277.jpg"},

{name:"Potos",
categoría: "Plantas de follaje",
tamaño: "50x22cm",
precio:"99.00",
imagen:"https://cdn.homedepot.com.mx/productos/401395/401395.jpg"},

{name:"Palo de Brasil",
categoría: "Plantas de follaje",
tamaño: "15cm",
precio:"99.00",
imagen:"https://cdn.homedepot.com.mx/productos/610464/610464.jpg"},

{name:"Escudo Peersa",
categoría: "Plantas de follaje",
tamaño: "30x25cm",
precio:"39.00",
imagen:"https://cdn.homedepot.com.mx/productos/506888/506888.jpg"},

{name:"Croto Petra",
categoría: "Plantas de follaje",
tamaño: "32x15cm",
precio:"65.00",
imagen:"https://cdn.homedepot.com.mx/productos/401359/401359.jpg"},


{name:"Romero",
categoría: "Plantas comestibles",
tamaño: "4 pulgadas",
precio:"29.00",
imagen:"https://cdn.homedepot.com.mx/productos/150716/150716.jpg"},


{name:"Menta",
categoría: "Plantas comestibles",
tamaño: "4 pulgadas",
precio:"29.00",
imagen:"https://cdn.homedepot.com.mx/productos/150688/150688.jpg"},


{name:"Tomillo",
categoría: "Plantas comestibles",
tamaño: "4 pulgadas",
precio:"29.00",
imagen:"https://cdn.homedepot.com.mx/productos/150732/150732.jpg"},


{name:"Orégano",
categoría: "Plantas comestibles",
tamaño: "4 pulgadas",
precio:"29.00",
imagen:"https://cdn.homedepot.com.mx/productos/150708/150708.jpg"},


{name:"Moringa",
categoría: "Plantas comestibles",
tamaño: "73x17cm",
precio:"39.00",
imagen:"https://cdn.homedepot.com.mx/productos/125512/125512.jpg"},


{name:"Cilantro",
categoría: "Plantas comestibles",
tamaño: "17x11cm",
precio:"30.00",
imagen:"https://cdn.homedepot.com.mx/productos/129896/129896.jpg"},

];

//Generamos la app 
const app = express();

//Definición de rutas o endpoints 
const router = express.Router();
router.get('/', (req, res) => res.send({"mensaje": "hola"}));
router.get('/productos', (req, res) => res.send(productos));

app.use(cors());
app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda


module.exports = app;
module.exports.handler = serverless(app);

// netlify comands; 
//npm install & npm run (build comand)
//dist(publish directory)

