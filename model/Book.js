const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: String,
  genre: String,
  createdAt: Date,
  updatedAt: Date
});

module.exports = model('Book', bookSchema);