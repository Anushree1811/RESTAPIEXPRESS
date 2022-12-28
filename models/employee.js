const mongoose = require('mongoose')


const EmployeeSchema = new mongoose.Schema({

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

// constEmployees = mongoose.model('Student',EmployeeSchema )
module.exports = mongoose.model('Employee',EmployeeSchema )