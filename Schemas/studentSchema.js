const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const salt = 10;

const studentSchema = mongoose.Schema({
    studentID: {
        type:Number,
        required: true,
        trim: true
    },
    firstName:{
        type: String,
        required:true,
        trim: true
    },
    secondName: {
        type:String,
        required:true,
        trim: true
    },
    course: {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    hall:{
        type: String,
        default: 'N/A'
    },
    block:{
        type: String,
        default :'N/A'
    },
    roomNumber: {
        type: String,
        default: 'N/A'
    }
})

studentSchema.pre('save', function(next){
    let student = this;
    bcrypt.genSalt(salt, (err, salt)=>{
        if(err){return next(err) }
        
      bcrypt.hash(student.password, salt, (err, hash)=>{
          if(err){return next(err) }

          student.password = hash;
          next();
      })
      })
})

studentSchema.methods.comparePasswords = function(logpass, callback){
    bcrypt.compare(logpass, this.password, (err, isMatch)=>{
        if(err) throw callback(err);
        callback(null, isMatch)
    })
}

const studentData = mongoose.model('Student Data', studentSchema);

module.exports = studentData;