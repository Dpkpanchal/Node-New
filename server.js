const express = require('express');
const app = express();
const DB = require('./config/database');
const productRouter = require('./API/product/product.router');
require("dotenv").config();

DB();

app.use(express.json());
app.use('/api/p',productRouter);
 
 app.listen(process.env.PORT,() => {
    console.log('server is running...');
 })
