const express = require('express');
const app = express();

const port = 8000;

const db = require('./config/mongoose');

app.use(express.static('assets'));
app.set('view engine', 'ejs');
app.set('views','./views');

app.use('/', require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the ${port}`);
        return;

    }

    console.log(`Server is up and running @ ${port}`);
})