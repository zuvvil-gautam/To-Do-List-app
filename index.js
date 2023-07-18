const express = require('express');
const app = express();

const port = 8000;

const expressLayout = require('express-ejs-layouts');

app.use(expressLayout);

const db = require('./config/mongoose');

app.use(express.urlencoded());

app.use('/', require('./routes'));
app.use(express.static( './assets'));
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.set('view engine', 'ejs');
app.set('views','./views');



app.listen(port,function(err){
    if(err){
        console.log(`Error in running the ${port}`);
        return;
    }

    console.log(`Server is up and running @ ${port}`);
})