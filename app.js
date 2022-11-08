const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieparser = require('cookie-parser');
const flash = require('connect-flash');








const app = express();
const port = process.env.PORT || 4000;
require('dotenv').config();

app.use(express.urlencoded({extend : true}));
app.use(express.static('public'));
app.use(expressLayouts);

app.use(cookieparser('cookingblogsecure'));
app.use(session({
    secret:'cookingblogsecretsession',
    saveUninitialized:true,
    resave : true
}));
app.use(flash());
app.use(fileUpload());

app.set('layout','./layouts/main');
app.set('view engine','ejs');
const routes = require('./server/routes/recipeRoutes.js');
app.use('/',routes);

app.listen(port, ()=>{ console.log('Listening to port ${port}'); });