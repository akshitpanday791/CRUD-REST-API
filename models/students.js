import mongoose from 'mongoose';
import validator from 'validator';

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    }, 
    email: {
        type: String,
        required: true,
        unique: [true, 'Email already exists'],
        validate: (value) =>{
            if(!validator.isEmail(value)) {
                throw new Error("Invalid email");
            }
        },
    },
    phone: {
        type: Number,
        min: 10,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
    }
});


const Student = new mongoose.model('Student', studentSchema);

export default Student;