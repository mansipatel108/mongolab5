import mongoose = require('mongoose');

// DEFINE THE OBJECT SCHEMA
var userSchema = new mongoose.Schema ({
  
   username: {
       type: String,
       default: '',
       trim: true,
       required: 'Username is required'
   },
   password: {
       type: String,
       default: '',
       trim: true,
       required: 'Password is required'
   },
   email: {
      type: String,
      default: '',
      trim: true,
      required: 'email is required' 
   },
   displayName:{
       type:String,
       default: 'Display Name is required',
   },
   created :{
       type: Date,
       default:Date.now
   },
   updated:{
       type: Date,
       default: Date.now
   }
},
{
  collection: 'userInfo'  });

// MAKE THIS PUBLIC SO THE CONTROLLER CAN SEE IT
export var User = mongoose.model('User', userSchema);