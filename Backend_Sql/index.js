const connection = require('./connection');

const express = require('express');
const mysql = require('mysql2');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const router = require('./routes/rbac.routes');

const app = express();

require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(router);

const port = process.env.PORT;


app.listen(port,()=>{
    console.log(`server is working at ${port}`)
}) 