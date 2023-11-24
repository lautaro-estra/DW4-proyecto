const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;


app.use(cors());

const productos = [
    {
        name : 'Coca-Cola',
        model: '2L',
        price : 1500,
        brand : 'Coca-Cola',
        stock : 34,
        id : 0,
        img:"https://mayorista.flowmarket.com.ar/659/coca-cola-225lt-regular.jpg"
    },
  
];


app.get('/productos', (req, res) => {
  res.json(productos);
});


app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
