const mongoose = require('mongoose');

const hallSchema = mongoose.Schema({
    hallName: String,
    block: String,
    roomNumber: Number,
    members:{
        type:[],
        validate: [maxMembers]
    }
})

function maxMembers(val) {
    return val.length <= 3;
  }

const hallData = mongoose.model('Hall',hallSchema);

module.exports = hallData;


/**
 *  name
 * block
 * room number - max 3
 * room members 
 */
