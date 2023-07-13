const express = require('express');
const bodyParser = require('body-parser');
const router = require('./controllers/users');
const app = express();

const PORT = 3000;
const HOST = "localhost"


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use(router);



app.listen(PORT,HOST,()=>{
    console.log("запущен")
});