const express = require('express');
const bodyparser = require('body-parser');
const path = require('path')
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const app = express()

//files
const myroutes = require('./routes/routes.js');
const student = require('./schemas/studentSchema.js')

//middlewares
app.use(express.static(path.join(__dirname, 'client/src')));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors);
app.use(myroutes);


mongoose.connect('mongodb://localhost:27017/studentSchema', {
    useNewUrlParser: true,
    useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Could not connect to database'));
db.once('open', ()=>{
    console.log('Connection was successfull');
})


const port = process.env.PORT || 3001;
app.listen(port, ()=>{
    console.log('Server up and running...')
});