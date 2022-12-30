//const Book = require('../models/student')

const {User1} = require('../models')


const {generateAuthToken, findByCredentials, getPublicProfile} = require('../service/userservice')




const Signingup = async (req, res) => {
    
  const User = new User1(req.body)

    try{
         
         const a1 = await User.save()

        const token = await generateAuthToken(User)

        res.send({ a1, token })

    }catch (error) {

        res.status(401).send({

            message: error.message,

            error: error.message

        });

    }


};


const login = async(req,res) =>{

    try{

        const user = await findByCredentials(req.body.email, req.body.password)

        ////// Token creation ///////////

        const token = await generateAuthToken(user)

        if (user && token) {

            console.log("user and token")

            // res.send({user,token})  

            //hiding private data

            res.send({ user: getPublicProfile(user), token: token })

        }

        else {

            console.log("last")

            res.send("unable to login")

        }


    }catch(error){

        res.status(401).send({

            message: error.message,

            error: error.message

        });

    }



}

const getUserDetails = async (req, res) => {

    try {

        const user = req.user

        res.send(user)

    }

    catch (error) {

        res.status(400).send(error)

    }

}



module.exports = {
    Signingup,
    login,
    getUserDetails
};







