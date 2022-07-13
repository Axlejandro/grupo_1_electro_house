const express = require('express');
const path = require('path');

const app = express();

const pathPublic = path.resolve(__dirname, './public');
app.use(express.static(pathPublic));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.listen(5000, ()=>{
    console.log('Servidor funcionando en: http://localhost:5000');
});