const mongoose = require('mongoose');

const preetSchemaSchema = new mongoose.Schema(
{
    field1: { 
        type: String,
        required: true,
        unique: false
    },
field2 : [
{ 
  
   field2nest: { 
        type: Number,
        required: false,
        unique: false
    
},
  
   field2nest1: { 
        type: Number,
        required: false,
        unique: false
    
},
 field2nest2 : [
{ 
  
   field2nest2: { 
        type: Number,
        required: false,
        unique: false
    
},
}
]
,
}
],
});

module.exports = mongoose.model('preetSchema', preetSchemaSchema);
