const express = require('express');
const path = require('path');
const session = require('express-session');
const userLoggedMiddleware = require('./src/middlewares/userLoggedMiddleware');

const mainRouter = require('./src/routes/mainRouter');
const usersRouter = require('./src/routes/usersRouter');
const productsRouter = require('./src/routes/productsRouter');
const adminRouter = require('./src/routes/adminRouter');
const methodOverride = require('method-override');
const app = express();

app.use(session({ 
    secret: "Shhhh, It's a secret",
    resave: false,
    saveUninitialized: false,
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.use(userLoggedMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(methodOverride('_method'));

const pathPublic = path.resolve(__dirname, './public');
app.use(express.static(pathPublic));

app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/cart', productsRouter);
app.use('/admin', adminRouter);

app.listen(5000, () => {
    console.log('Servidor funcionando en: http://localhost:5000');
});