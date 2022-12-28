const express = require('express')
const router = express.Router()
//const stu = require('../models/stu')
const {Student1,Employee1} = require('../models')

router.get('/', async(req, res) =>{

    try{
         
        const students = await Student1.find()
       res.send(students)

    }catch(err){

        res.send('Error: ' + err)
    }
})


router.post('/', async(req,res) => {
    
    
   Student1.create({
    ...req.body
   })
    res.send("hello")
})

module.exports = router