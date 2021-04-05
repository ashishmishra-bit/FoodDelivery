const express = require('express');

const app = express();

const ejs = require('ejs')
const path = require('path')

const expressLayout = require('express-ejs-layouts')

const PORT = process.env.PORT || 3000;  // ES6 syntax for if-else.

const mongoose = require('mongoose')

// DB Connection

const url = 'mongodb://localhost/food-delivery';
mongoose.connect(url, {useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true, userFindAndModify: true});
const connection = mongoose.connection;
connection.once('open' , () =>{
    console.log('Database connected...');
}).catch(err => {
    console.log('Connection Failed...');
});



//Assets 
app.use(express.static('public'))




// template Engine 
app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine' , 'ejs')

require('./routes/web')(app);




app.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`)
})