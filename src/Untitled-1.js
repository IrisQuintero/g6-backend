//1.-importamos el paquete
//const express = require('express')

//2.-generamos la aplicación de express
//const app = express()

//3.-configuración del puerto
//const port = 3000

//4.-definición de rutas o endpoints(metodo, uri, funcion)
//CRUD
//La diagonal (/) ejemplo/3)--URI, path, endpoint, ruta
//app.METHOD(PATH, FUNCTION)

//app is an instance of express.
//METHOD is an HTTP request method , in lowercase.
//PATH is a path on the server.
//HANDLLER is the function executed when the route is matched
//app.get('/', (req, res) => {
//  res.send('Hello World!')
//})

//corre la aplicación de express
//app.listen(port, () => {
//  console.log(`Example app listening at http://localhost:${port}`)
//})

//.....................................................................................................................

// simular base de datos
let productos = [{name: "papitas"},{name:"agua"}];

let proveedores = [{
  nombre: "proveedor1",
  contacto:{ 
    area: "ventas",
    telefono: 8112345678
  },
  direccion: {
    calle:"calle 1",
    ciudad: "ciudad 1",
    cp: 8090100,
    colonia: "El Toreo"
  }
},
{
  nombre: "proveedor2",
  contacto:{ 
    area: "ventas",
    telefono: 8097654321
  },
  direccion: {
    calle:"calle 2",
    ciudad: "ciudad 2",
    cp: 203040,
    colonia: "Cd del Valle"
  }
}


];

let pedidos = [{
  id:1,
  productos: ["papitas"]
},

{
  id:2,
  productos: ["papitas", "agua"]
}]


//1.-importamos el paquete
const express = require ("express");

//2.-generamos la aplicación de express
const app = express();
//2.1- Configuración para comunicarse con archivos Json
app.use(express.json());

//3.-configuración del puerto
const port = 3000;

//4.-definición de rutas o endpoints(metodo, uri, funcion)
//CRUD productos

app.get('/productos', (req, res) => {
  res.send(productos);
});

app.post("/productos",(req, res)=> {
   console.log(req.body);
    const nuevoProducto = req.body;
    productos.push(nuevoProducto);
    res.send(nuevoProducto);
});

app.delete("/productos", (req, res)=>{
    console.log(req.body);
    const nombreProducto = req.body.name;
    productos = productos.filter((producto) => producto.name !== nombreProducto );
    res.send(productos);
});

app.put("/productos/name", (req, res)=>{
    console.log(req.body);
    console.log(req.params);
    const actualizacion = req.body;
    const nombreDeProducto = req.params.name;
    const posicionProducto = productos.findIndex((producto)=> producto.name === nombreDeProducto);
    productos[posicionProducto] = actualizacion;
    res.send(productos[posicionProducto])
});

//CRUD proveedores
app.get("/proveedores", (req, res)=>{
  res.send(proveedores);
});

app.post("/proveedores",(req, res)=>{
  console.log(req.body)
  const proveedor = req.body
  proveedores.push(proveedor)
  res.send(proveedores);
});

app.put("/proveedores/:nombre", (req, res) =>{
  const proveedorNuevo = req.body;
  const proveedorViejo = req.params.nombre;
  const IndexProveedorViejo = proveedores.findIndex((proveedor)=>
  proveedor.nombre === proveedorViejo);
  proveedores[IndexProvedorViejo] = proveedorNuevo;
  res.send(proveedores[IndexProvedorViejo]);
});

app.delete("/proveedores", (req, res)=>{
  console.log(req.body)
  const proveeedorBorrar = req.body.nombre;
  proveedores = proveedores.filter((proveedor)=> proveedor.nombre !== proveeedorBorrar)
  res.send(proveedores);

});

//CRUD pedidos

app.get("/pedidos", (req, res) => {
  res.send(pedidos);
});

app.post("/pedidos", (req, res) => {
  //console.log(req.body)
  const nuevoPedido = req.body;
  pedidos.push(nuevoPedido);
  res.send(pedidos);
});

app.put("/pedidos/", (req, res) =>{
  const nuevoPedido = req.body;
  const IndexPedidoViejo = pedidos.findIndex((orden)=> orden.id === req.body.id)
  pedidos[IndexPedidoViejo] = nuevoPedido;
  res.send(pedidos);
});

app.delete("/pedidos/", (req, res) =>{
  const borrarPedido = req.body.id;
  pedidos = pedidos.filter((orden) => orden.id !== borrarPedido)
  res.send(pedidos);
});



//corre la aplicación de express
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})