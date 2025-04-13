// Writing basic express boilerplate code
// with express.json() middleware
const express = require('express');
import { createTodo, updateTodo } from './types';
const App = express();
const {todo} = require("db.js")
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
        compeleted: false
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

App.delete('/todo:todoId', (req, res)=>{

})

App.put('/compeleted:todoId', (req, res)=>{
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
    compeleted: !req.body.compeleted
  })
})