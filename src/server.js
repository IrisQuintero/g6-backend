//Importamos los paquetes
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const cors = require("cors");


// simulamos la base de datos
let productos = [

{isActive: true,
    _id: "5fbc19a65a3f794d72471163",
    product_name: "Amor de un rato",
    description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    price: 32.00,
    category: "Plantas florales",
    brand: "Osinski - Prosacco",
    sku: "e9cbfac1-301a-42c3-b94a-711a39dc7ed1",
    createdAt: "2020-11-23T20:20:54.245Z",
    updatedAt: "2020-11-23T20:20:54.245Z",
    __v: 0,
    image: "https://cdn.homedepot.com.mx/productos/953140/953140.jpg"},

{isActive: true,
    _id: "5fbc19a65a3f794d72471163",
    product_name: "Geranio",
    description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    price: 49.00,
    category: "Plantas florales",
    brand: "Osinski - Prosacco",
    sku: "e9cbfac1-301a-42c3-b94a-711a39dc7ed1",
    createdAt: "2020-11-23T20:20:54.245Z",
    updatedAt: "2020-11-23T20:20:54.245Z",
    __v: 0,
    image: "https://cdn.homedepot.com.mx/productos/141250/141250.jpg"},

{isActive: true,
    _id: "5fbc19a65a3f794d72471163",
    product_name: "Anturio (Anthurium",
    description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    price: 179.00,
    category: "Plantas florales",
    brand: "Osinski - Prosacco",
    sku: "e9cbfac1-301a-42c3-b94a-711a39dc7ed1",
    createdAt: "2020-11-23T20:20:54.245Z",
    updatedAt: "2020-11-23T20:20:54.245Z",
    __v: 0,
    image: "https://cdn.homedepot.com.mx/productos/758609/758609.jpg"},

{isActive: true,
    _id: "5fbc19a65a3f794d72471163",
    product_name: "Iresine",
    description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    price: 35.00,
    category: "Plantas florales",
    brand: "Osinski - Prosacco",
    sku: "e9cbfac1-301a-42c3-b94a-711a39dc7ed1",
    createdAt: "2020-11-23T20:20:54.245Z",
    updatedAt: "2020-11-23T20:20:54.245Z",
    __v: 0,
    image: "https://cdn.homedepot.com.mx/productos/627068/627068.jpg"},

{isActive: true,
    _id: "5fbc19a65a3f794d72471163",
    product_name: "Azalea",
    description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    price: 69.00,
    category: "Plantas florales",
    brand: "Osinski - Prosacco",
    sku: "e9cbfac1-301a-42c3-b94a-711a39dc7ed1",
    createdAt: "2020-11-23T20:20:54.245Z",
    updatedAt: "2020-11-23T20:20:54.245Z",
    __v: 0,
    image: "https://cdn.homedepot.com.mx/productos/601195/601195.jpg"},

{isActive: true,
    _id: "5fbc19a65a3f794d72471163",
    product_name: "Flor del desierto (Adenium)",
    description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    price: 69.00,
    category: "Plantas florales",
    brand: "Osinski - Prosacco",
    sku: "e9cbfac1-301a-42c3-b94a-711a39dc7ed1",
    createdAt: "2020-11-23T20:20:54.245Z",
    updatedAt: "2020-11-23T20:20:54.245Z",
    __v: 0,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5THasW-Cnyp5nCWgmQ8tqiDglG3R87iTwZA&usqp=CAU"},

{isActive: true,
    _id: "5fbc19a65a3f794d72471163",
    product_name: "Pata de elefante",
    description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    price: 65.00,
    category: "Plantas de follaje",
    brand: "Osinski - Prosacco",
    sku: "e9cbfac1-301a-42c3-b94a-711a39dc7ed1",
    createdAt: "2020-11-23T20:20:54.245Z",
    updatedAt: "2020-11-23T20:20:54.245Z",
    __v: 0,
    image: "https://cdn.homedepot.com.mx/productos/957367/957367.jpg"},

{isActive: true,
    _id: "5fbc19a65a3f794d72471163",
    product_name: "Palma Areca",
    description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    price: 89.00,
    category: "Plantas de follaje",
    brand: "Osinski - Prosacco",
    sku: "e9cbfac1-301a-42c3-b94a-711a39dc7ed1",
    createdAt: "2020-11-23T20:20:54.245Z",
    updatedAt: "2020-11-23T20:20:54.245Z",
    __v: 0,
    image: "https://cdn.homedepot.com.mx/productos/817277/817277.jpg"},

    {isActive: true,
        _id: "5fbc19a65a3f794d72471163",
        product_name: "Potos",
        description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        price: 99.00,
        category: "Plantas de follaje",
        brand: "Osinski - Prosacco",
        sku: "e9cbfac1-301a-42c3-b94a-711a39dc7ed1",
        createdAt: "2020-11-23T20:20:54.245Z",
        updatedAt: "2020-11-23T20:20:54.245Z",
        __v: 0,
        image: "https://cdn.homedepot.com.mx/productos/401395/401395.jpg"},

{isActive: true,
    _id: "5fbc19a65a3f794d72471163",
    product_name: "Palo de Brasil",
    description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    price: 99.00,
    category: "Plantas de follaje",
    brand: "Osinski - Prosacco",
    sku: "e9cbfac1-301a-42c3-b94a-711a39dc7ed1",
    createdAt: "2020-11-23T20:20:54.245Z",
    updatedAt: "2020-11-23T20:20:54.245Z",
    __v: 0,
    image: "https://cdn.homedepot.com.mx/productos/610464/610464.jpg"},

{isActive: true,
    _id: "5fbc19a65a3f794d72471163",
    product_name: "Escudo Peersa",
    description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    price: 39.00,
    category: "Plantas de follaje",
    brand: "Osinski - Prosacco",
    sku: "e9cbfac1-301a-42c3-b94a-711a39dc7ed1",
    createdAt: "2020-11-23T20:20:54.245Z",
    updatedAt: "2020-11-23T20:20:54.245Z",
    __v: 0,
    image: "https://cdn.homedepot.com.mx/productos/506888/506888.jpg"},

{isActive: true,
    _id: "5fbc19a65a3f794d72471163",
    product_name: "Croto Petra",
    description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    price: 65.00,
    category: "Plantas de follaje",
    brand: "Osinski - Prosacco",
    sku: "e9cbfac1-301a-42c3-b94a-711a39dc7ed1",
    createdAt: "2020-11-23T20:20:54.245Z",
    updatedAt: "2020-11-23T20:20:54.245Z",
    __v: 0,
    image: "https://cdn.homedepot.com.mx/productos/401359/401359.jpg"},

{isActive: true,
    _id: "5fbc19a65a3f794d72471163",
    product_name: "Romero",
    description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    price: 65.00,
    category: "Plantas comestibles",
    brand: "Osinski - Prosacco",
    sku: "e9cbfac1-301a-42c3-b94a-711a39dc7ed1",
    createdAt: "2020-11-23T20:20:54.245Z",
    updatedAt: "2020-11-23T20:20:54.245Z",
    __v: 0,
    image: "https://cdn.homedepot.com.mx/productos/150716/150716.jpg"},

{isActive: true,
    _id: "5fbc19a65a3f794d72471163",
    product_name: "Menta",
    description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    price: 29.00,
    category: "Plantas comestibles",
    brand: "Osinski - Prosacco",
    sku: "e9cbfac1-301a-42c3-b94a-711a39dc7ed1",
    createdAt: "2020-11-23T20:20:54.245Z",
    updatedAt: "2020-11-23T20:20:54.245Z",
    __v: 0,
    image: "https://cdn.homedepot.com.mx/productos/150688/150688.jpg"},

{isActive: true,
    _id: "5fbc19a65a3f794d72471163",
    product_name: "Tomillo",
    description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    price: 29.00,
    category: "Plantas comestibles",
    brand: "Osinski - Prosacco",
    sku: "e9cbfac1-301a-42c3-b94a-711a39dc7ed1",
    createdAt: "2020-11-23T20:20:54.245Z",
    updatedAt: "2020-11-23T20:20:54.245Z",
    __v: 0,
    image: "https://cdn.homedepot.com.mx/productos/150732/150732.jpg"},

{isActive: true,
    _id: "5fbc19a65a3f794d72471163",
    product_name: "Orégano",
    description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    price: 29.00,
    category: "Plantas comestibles",
    brand: "Osinski - Prosacco",
    sku: "e9cbfac1-301a-42c3-b94a-711a39dc7ed1",
    createdAt: "2020-11-23T20:20:54.245Z",
    updatedAt: "2020-11-23T20:20:54.245Z",
    __v: 0,
    image: "https://cdn.homedepot.com.mx/productos/150708/150708.jpg"},

{isActive: true,
    _id: "5fbc19a65a3f794d72471163",
    product_name: "Moringa",
    description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    price: 39.00,
    category: "Plantas comestibles",
    brand: "Osinski - Prosacco",
    sku: "e9cbfac1-301a-42c3-b94a-711a39dc7ed1",
    createdAt: "2020-11-23T20:20:54.245Z",
    updatedAt: "2020-11-23T20:20:54.245Z",
    __v: 0,
    image: "https://cdn.homedepot.com.mx/productos/125512/125512.jpg"},

{isActive: true,
    _id: "5fbc19a65a3f794d72471163",
    product_name: "Cilantro",
    description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    price: 30.00,
    category: "Plantas comestibles",
    brand: "Osinski - Prosacco",
    sku: "e9cbfac1-301a-42c3-b94a-711a39dc7ed1",
    createdAt: "2020-11-23T20:20:54.245Z",
    updatedAt: "2020-11-23T20:20:54.245Z",
    __v: 0,
    image: "https://cdn.homedepot.com.mx/productos/129896/129896.jpg"},

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

