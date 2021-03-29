const express = require('express');

const app = express();

const ejs = require('ejs')
const path = require('path')

const expressLayout = require('express-ejs-layouts')

const PORT = process.env.PORT || 3000;  // ES6 syntax for if-else.


//Assets 
app.use(express.static('public'))




// template Engine 
app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine' , 'ejs')

app.get('/' , (req, res) =>{
    // res.send('Server Started')
    res.render('home')
    
})

app.get('/cart' , (req, res) =>{
    res.render('coustomers/cart')
})
app.get('/login' , (req, res) =>{
    res.render('auth/login')
})

app.get('/register' , (req, res) =>{
    res.render('auth/register')
})


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`)
})