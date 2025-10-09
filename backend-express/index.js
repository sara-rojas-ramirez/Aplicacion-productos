console.log("Mi primera app con express");
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;


// Middleware
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});



// Importacion productos
const products = require('./data/products');

// Endpoints
// Esto se compone de endpoints(links o urls), metodos (get, post, etc) y respuestas. 
// Apunta a la direccion http://localhost:3000
app.get('/', (req, res) => {
 res.json({
    message: '¡Hola! Express funcionando',
    timestamp: new Date().toISOString(),
    status: 'success'
    });
});

// Apunta a la direccion http://localhost:3000/products
app.get('/products', (req, res) => {
 res.json({
    message: 'Productos',
    timestamp: new Date().toISOString(),
    status: 'success',
    products: products
    });
});

// Apunta a la direccion http://localhost:3000/products:id
app.get('/products/:id', (req, res) =>{
    const {id} = req.params;
    const product = products.find((product)=> product.id === id);
    if (!product){
        return res.status(404).json({
            message: 'producto no encontrado',
            timestamp: new Date().toISOString,
            status: 'error',
        });
    }
    res.status(200).json({
        message: 'producto',
        timestamp: new Date().toISOString(),
        status: 'sucess',
        product: product
    });
});


// Crea un producto -> http://localhost:3000/products
app.post('/products', (req, res) => {
    const {name, price, category, stock, image} = req.body;
    const product = {id: (products.length + 1).toString(), name, price, category, stock, image};
    products.push(product);
    res.json({
        message: 'Producto creado',
        timestamp: new Date().toISOString(),
        status: 'success',
        product: product
    });
});


// Crear producto desde react
app.post("/users", (req, res) => {
  const { name, email, password } = req.body;
  // Aquí normalmente guardarías en la base de datos
  console.log("Usuario recibido:", req.body);
  res.status(201).json({ id: 1, name, email });
});



app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});