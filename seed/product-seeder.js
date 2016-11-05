var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath:'images/950xl.jpg',
        title: 'Microsoft Lumia 950XL',
        description:'The Phone That Works Like Your PC.',
        price:'45749'
    }),

    new Product({
        imagePath:'images/iphone-7.jpg',
        title:'Apple iPhone 7',
        description:'This, is exactly iPhone 7.',
        price:57545
    }),

    new Product({
        imagePath:'images/google-pixel-xl.png',
        title:'Google Pixel XL',
        description:'Made By Google.',
        price:67000
    }),

    new Product({
        imagePath:'images/huawei_p9.jpg',
        title:'Huawei P9',
        description:'Reinvent samartphone photography.',
        price:39999
    }),

    new Product({
        imagePath:'images/one-plus3.jpg',
        title:'One Plus3(Graphite)',
        description:'A flagship killer.',
        price:27999
    }),

    new Product({
        imagePath:'images/motorola-moto-z-play.jpg',
        title:'Moto Z Play',
        description:'Transform your phone in a snap.',
        price:24999
    })
];

var done = 0;
for (var i=0; i<products.length; i++){
    products[i].save(function(err, res){
        done++;
        if (done === products.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}