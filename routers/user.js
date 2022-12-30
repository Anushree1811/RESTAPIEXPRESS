const express = require('express')
const userRouter = express.Router()
//const stu = require('../models/stu')
const userControllers = require('../controllers/user.controller');
//const {User1} = require('../models')
const auth = require("../middleWare/auth")

userRouter.post('/Signingup', userControllers.Signingup);
userRouter.post('/login',userControllers.login)
userRouter.get('/getUserDetails',auth,userControllers.getUserDetails)
//router.post('/post',studentControllers.post);

module.exports = userRouter