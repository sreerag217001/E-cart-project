1 //import mongoose
const mongoose=require('mongoose')

//2 Define connection string

mongoose.connect('mongodb://localhost:27017/cart',()=>{
    console.log('connected to MongoDB');
})

3//modal creation

const Product=mongoose.model('Product',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }
})

//create a model for wishlist
const Wishlist =mongoose.model('Wishlist',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    image:String
})

4// export

module.exports={
    Product,
    Wishlist
}