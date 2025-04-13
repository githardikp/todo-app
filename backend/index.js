// Writing basic express boilerplate code
// with express.json() middleware
import express from 'express';
import { createTodo, updateTodo } from './types.js'; 
import pkg from './db.js';
const { todo } = pkg;
const App = express();
const PORT = process.env.PORT || 3000; 
// json middleware
App.use(express.json());

App.post('/todo', async (req, res)=>{
    const payload = req.body;
    const parsedPayload = createTodo.safeParse(payload)
    if(!parsedPayload.success){
        res.status(411).json({
            "msg":"Incorrect To-Do format"
        })
        return;
    }
    await todo.create({
        title: payload.title,
        description: payload.description,
        completed: false
    })
    res.status(200).json({
        "msg":"todo created"
    })
})

App.get('/todos', async (req, res)=>{
    // respond back with data in database  
    const todos = await todo.find({});
    res.status(200).json({
        todos
    })
})

App.put('/completed/:todoId', (req, res)=>{
  const updataedPayload = req.body
  const parsedPayload = updateTodo.safeParse(updataedPayload)  
  if(!parsedPayload.success){
    res.status(411).json({
        "msg":"Incorrect format"
    })
    return; 
  }
  todos.update({
    _id: req.body.id
  },{
    completed: true
  })
})

App.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})