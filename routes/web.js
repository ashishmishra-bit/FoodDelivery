const homeController = require('../app/http/controllers/homeController')

function initRoutes (app){

    homeController().index
    app.get('/' ,  homeController().index) 
    
    app.get('/cart' , (req, res) =>{
        res.render('coustomers/cart')
    })
    app.get('/login' , (req, res) =>{
        res.render('auth/login')
    })
    
    app.get('/register' , (req, res) =>{
        res.render('auth/register')
    })
}

module.exports = initRoutes;