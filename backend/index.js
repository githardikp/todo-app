// Writing basic express boilerplate code
// with express.json() middleware
import express from 'express';
import { createTodo, updateTodo } from './types.js'; 
const App = express();
const PORT = process.env.PORT || 3000; 
import {todos} from './db.js';
import cors from 'cors';
// json middleware
App.use(express.json());
App.use(cors(
));
App.post('/todo', async (req, res)=>{
    const payload = req.body;
    const parsedPayload = createTodo.safeParse(payload)
    if(!parsedPayload.success){
        res.status(411).json({
            "msg":"Incorrect To-Do format"
        })
        return;
    }
    await todos.create({
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
    const list = await todos.find({});
    res.status(200).json({
        list
    })
})

App.put('/completed', async (req, res)=>{
  const updataedPayload = req.body
  const parsedPayload = updateTodo.safeParse(updataedPayload)  
  if(!parsedPayload.success){
    res.status(411).json({
        "msg":"Incorrect format"
    })
    return; 
  }
  await todos.updateOne({
    _id: req.body.id
  },{
    completed: true
  })
  res.status(200).json({
    "msg":"todo updated"
  })
})

App.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})