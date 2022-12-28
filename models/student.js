const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({

    fname : {
        type: String,
        required: true,
    },

    mname: {
        type: String,
        required: true
    },

    lname: {
        type: String,
        required: true
    }
})

// const Students = mongoose.model('Student', studentSchema )
module.exports = mongoose.model('Student', studentSchema )