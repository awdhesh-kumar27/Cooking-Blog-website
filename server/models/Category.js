const mongoose = require('mongoose');

const category_model = new mongoose.Schema({
    name:{
        type:String,
        required:'This field required'
    },
    image : {
        type:String,
        required:'This field required'
    },

},{collection:'Category'});

module.exports = mongoose.model('Category',category_model);