function cartController (){
    return{
        index(req , res){
            res.render('./coustomers/cart')
        }
    }
}

module.exports = cartController;