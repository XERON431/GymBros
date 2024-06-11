import mongoose from 'mongoose';

const MachineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

const Machine = mongoose.models.Machine || mongoose.model('Machine', MachineSchema);
export default Machine;