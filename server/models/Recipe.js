const mongoose = require('mongoose');

const category_model = new mongoose.Schema({
    name:{
        type:String,
        required:'This field required'
    },
     description:{
        type:String,
        required:'This field required'
    },
    email:{
        type:String,
        required:'This field required'
    },
    ingredients:{
        type:Array,
        required:'This field required'
    },
    category:{
        type:String,
        enum : ['Thai','Chinese','American','Mexican','Indian'],
        required:'This field required'
    },
    image:{
        type:String,
        required:'This field required'
    }


},{collection:'Recipe'});

category_model.index({name:'text',description:'text'});
module.exports = mongoose.model('Recipe',category_model);