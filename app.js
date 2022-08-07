const express = require('express');
const path = require('path');

const mainRouter = require('./src/routes/mainRouter');
const userRouter = require('./src/routes/userRouter');
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
app.use('/user', userRouter);
app.use('/products', productsRouter);
app.use(methodOverride('_method'));




app.listen(5000, () => {
    console.log('Servidor funcionando en: http://localhost:5000');
});