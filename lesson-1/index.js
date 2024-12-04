const express = require('express');

const app = express();
app.use(express.json());

const productList = [{ id: 1, name: 'apple', price: 1.99 }];

app.get('/api/products', (req, res) => {
  res.send(productList);
});

app.post('/api/products', (req, res) => {
  const newProduct = req.body;

  productList.push(newProduct);

  res.send({
    message: 'Product added successfully',
    product: newProduct,
  });
});

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});

console.log('final line of index.js');
