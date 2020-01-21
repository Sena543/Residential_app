const path = require('path');
const express = require('express');
const bcrypt = require('bcryptjs');
const studentSchema = require('../schemas/studentSchema.js');
const route = express.Router();

route.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname,'../client/src/index.js'));
})

route.get('/registration', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname,'../client/src/index.js'));
})

route.post('/registration', (req, res)=>{
    const {studentID,firstName, secondName, course, password} = req.body;
    const student = new studentSchema(req.body);
    student.save((err, data)=>{
        if(err){ console.log('Could not save student', err)}
        console.log(data)
    })
    res.status(200).send('You are now registered.Login to register for residence');
})

route.get('/login', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname,'../client/src/index.js'));
})

route.post('/login', (req, res)=>{
    console.log(req.body)
        studentSchema.findOne({'studentID':req.body.studentID}, (err, student)=>{
            if(!student){
                res.status(404).json({message:'Id does not exist'});
                return;
            }

            student.comparePasswords(req.body.password, (err, isMatch)=>{
                if(err) {return err;}
                if (!isMatch) return res.status(404).json({message:'Wrong Password'});

                res.status(200).json({isMatch});
            });
        })

})

//path.join(__dirname,'../client/src/index.js')
//client\src\index.js

module.exports = route;