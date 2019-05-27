import moongose, { Schema, model } from 'mongoose';
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/bunnyStudioUsersDB';
// const connection = createConnection(MONGODB_URI);
const AutoIncrement = require('mongoose-sequence')(moongose);

const UserSchema = new Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
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

UserSchema.plugin(AutoIncrement, { inc_field: 'id' });

export default model('User', UserSchema);
