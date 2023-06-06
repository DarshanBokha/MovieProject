const mongoose = require('mongoose');

const crudScema = mongoose.Schema({
    mname : {
        type : String,
        required : true
    },
    dname : {
        type : String,
        required : true
    },
    wname : {
        type : String,
        required : true
    },
    aname : {
        type : String,
        required : true
    },
    lang : {
        type : Array,
        required : true
    },
    country : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true
    },
    john : {
        type : String,
        required : true
    },
});

const crud = mongoose.model('crud',crudScema);
module.exports = crud;