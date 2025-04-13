const { mongoose } = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const todoSchema = new mongoose.schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)
module.exports({
    todo: todo
})