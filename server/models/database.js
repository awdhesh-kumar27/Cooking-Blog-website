var mongoose = require('mongoose');

const db_url = " ";
mongoose.connect(db_url,{useNewUrlParser:true}).then(()=>{ console.log("Database connection established");})

require('./Category');
require('./Recipe');
