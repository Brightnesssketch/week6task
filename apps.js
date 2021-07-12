const products = require("./model/products");
const http = require("http");
const express = require("express");
const fs = require("fs");
const app = express();

  
app.use(express.json());

app.get("/products", (req, res) => {
    res.json(products);
})

app.get('/products/:id', (req, res) => {
   const productId = String(req.params.id);
   const getproduct = products.find((product) => product.id === productId);
    if (!getproduct) {
        res.status(500).send('Product not found.');
      } else {
        res.json(getproduct);
      }
})

app.post('/products/create/', (req, res) => {

  products.push(req.body);
  res.json(products);
});

 app.put("/products/:id", (req, res) =>{
   productId = String(req.params.id);
 const finder = products.find((product) => product.id === productId);
if(!finder){
  res.status(500).send('Product not found.');
}else{
  finder.name = req.body.name;
  finder.description = req.body.description;
  finder.image = req.body.image;
  finder.price = req.body.price;
  res.json(products);
}
 });

 app.delete("/products/:id", (req, res) =>{
  productId = String(req.params.id);
const finder = products.find((product) => product.id === productId);
if(!finder){
  res.status(500).send('Product not found.');
}
updatedproducts = products.filter(product => product.id !== productId);
res.json(updatedproducts);
 })
 



app.listen(5050, () => {
    console.log("yoo! Dude is up and running");
});