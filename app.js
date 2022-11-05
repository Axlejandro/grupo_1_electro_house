const express = require('express');
const path = require('path');

const mainRouter = require('./src/routes/mainRouter');
const usersRouter = require('./src/routes/usersRouter');
const productsRouter = require('./src/routes/productsRouter');
const methodOverride = require('method-override');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const pathPublic = path.resolve(__dirname, './public');
app.use(express.static(pathPublic));

app.use('/', mainRouter);
app.use('/user', usersRouter);
app.use('/products', productsRouter);
app.use('/cart', productsRouter);
app.use(methodOverride('_method'));




app.listen(5000, () => {
    console.log('Servidor funcionando en: http://localhost:5000');
});