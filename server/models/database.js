var mongoose = require('mongoose');

const db_url = "mongodb+srv://loginform:ktsBWwMWicUPo5Fv@cluster0.530oa.mongodb.net/food?retryWrites=true&w=majority";
mongoose.connect(db_url,{useNewUrlParser:true}).then(()=>{ console.log("Database connection established");})

require('./Category');
require('./Recipe');