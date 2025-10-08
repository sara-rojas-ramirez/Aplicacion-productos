console.log("Mi primera app con express");
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;














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

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});