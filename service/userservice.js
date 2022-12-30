const jwt = require("jsonwebtoken")

const {User1} = require('../models')

const generateAuthToken=async (user)=>{

    if(user ===false){
 
        return false
 
    }
 
    else{
 
     const token =jwt.sign({_id:user._id.toString()},'thismynewcourse')
 
     user.tokens = user.tokens.concat({token:token})
 
     await user.save()
 
     return token
 
    }
 
 }


 const findByCredentials=async (email,password)=>{

    console.log("findByCredentals")

    const user = await  User1.findOne({email:email})

    const isMatch =()=>{

        console.log("findByCredentals")

        if(!user){

            console.log("!user")

            return false

        }

        else if(user.password === password){

            console.log("password")

            return user

        }

        else{

            console.log("else")

            // console.log("password not match")

            //  throw new Error('Unable to login')

            return false

        }  

    }

     return isMatch()

}

const getPublicProfile=function(user){

    if(user ===false){

        return false

    }

    else{

       

        const userObject =user.toObject()

        delete userObject.password

        delete userObject.tokens

        return userObject

    }

       

}

 module.exports = {

    generateAuthToken,
    findByCredentials,
    getPublicProfile
 }