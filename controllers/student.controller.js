//const Book = require('../models/student')

const {Student1,Employee1} = require('../models')

const {service1} = require('../service/services')

//var books = [{ "name": "book1" }];
const get = async (req, res) => {
    //res.send(books)

     service1()

    try{
         
        const students = await Student1.find()
       res.send(students)

    }catch(err){

        res.send('Error: ' + err)
    }


};



const post = async (req, res, next) => {
    try {
        const newStudent = new Student1({
            ...req.body
        })
        newStudent.save();
        //books.push(req.body)
        res.send(newStudent)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
};
module.exports = {
    get,
    post
};







// router.post('/', async(req,res) => {
    
    
//    Student1.create({
//     ...req.body
//    })
//     res.send("hello")
// })

// module.exports = router