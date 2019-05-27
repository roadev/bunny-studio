import moongose, { Schema, model } from 'mongoose';
const AutoIncrement = require('mongoose-sequence')(moongose);

const TaskSchema = new Schema({
  id: {
    type: Number,
  },
  description: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  user_id: {
    type: Number,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
  }
});

TaskSchema.plugin(AutoIncrement, { inc_field: 'id' });

export default model('Task', TaskSchema);
