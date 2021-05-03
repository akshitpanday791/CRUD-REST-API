//Contains all the business logic of operations/functionality related to students
import Student from '../models/students.js';


//@description:     Get all the students
//@route:           GET /students
//@access:          Public
const getStudents = async(req, res) => {
    try{
        const data = await Student.find();
        res.status(201).json(data);
    }catch(err) {
        res.status(404).json(err.message);
    }
};


//@description:     Get single student details by ID
//@route:           GET /students/:id
//@access:          Public
const getStudentById = async(req, res) => {
    try{
        const _id = req.params.id;
        const student = await Student.findById(_id);
 
        if(!student) {
             res.status(404).json("Student not found")
        } else {
             res.status(200).json(student);
        }
 
     } catch(error) {
         res.status(500).json(error);
     }
};

//@description:     Create a new student
//@route:           POST /students
//@access:          Public
const createStudent = async(req,res) => {
    try {
        const user = new Student(req.body);
        const response = await user.save();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

//@description:     Update a existing student
//@route:           UPDATE /students/:id
//@access:          Public
const updateStudent = async(req, res) => {
    try{
        const _id = req.params.id;
        const response = await Student.findByIdAndUpdate(_id, req.body,{new: true});
        res.status(200).json(response);
    } catch(error) {
        res.status(404).json(error);
    }
};


//@description:     Deletr a student
//@route:           DELETE /students/:id
//@access:          Public
const deleteStudent = async(req, res) => {
    try{
        const _id = req.params.id;
        const response = await Student.findByIdAndDelete(_id);
        res.status(200).json(response);
    } catch(error) {
        res.status(500).json(error);
    }
};

export {getStudents, getStudentById, deleteStudent, createStudent, updateStudent};