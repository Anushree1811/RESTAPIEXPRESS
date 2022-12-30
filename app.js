const express = require('express')
const mongoose = require('mongoose')
const url='mongodb://localhost/RestAPIExpress';

const app = express()

mongoose.connect(url, { useNewUrlParser: true })  //just to avoid the warnings

const con = mongoose.connection  // we will hold on connection

con.on('open',  () => {

    console.log("connected...")

})

/// to execute type nodemon run start

app.use(express.json())

const studentRouter = require('./routers/student')
const userRouter = require('./routers/user')

app.use('/student', studentRouter)
app.use('/user',userRouter)

app.listen(9000,() =>{

    console.log("Server Started...")
})



// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {

//     console.log("server is running 0n 3000")

// })

