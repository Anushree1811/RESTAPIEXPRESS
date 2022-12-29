const express = require('express')
const router = express.Router()
//const stu = require('../models/stu')
const studentControllers = require('../controllers/student.controller');
const {Student1,Employee1} = require('../models')

router.get('/get', studentControllers.get);
router.post('/post',studentControllers.post);

module.exports = router