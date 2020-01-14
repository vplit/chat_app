import mongoose, { model } from 'mongoose';

let Schema = mongoose.Schema;

let ChatGroupSchema = new Schema({
  name: String,
  userAmount: { type: Number, min: 3, max: 100 },
  messageAmount: { type: Number, default: 0 },
  userId: String,
  members: [{ userId: string }],
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: null },
  deletedAt: { type: Number, default: null }
});

module.exports = mongoose.model('chat-group', ChatGroupSchema);
