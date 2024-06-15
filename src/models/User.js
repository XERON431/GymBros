import mongoose from 'mongoose';
const { Schema } = mongoose;

import Machine from './Machines.js';

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  machineModels: [{
    type: Schema.Types.ObjectId,
    ref: 'Machine'
  }]
});

const User = mongoose.models.User || mongoose.model('User', userSchema); // Use userSchema instead of UserSchema
export default User;
