// Writing basic express boilerplate code
// with express.json() middleware
const express = require('express');
import { createTodo, updateTodo } from './types';
const App = express();

// json middleware
App.use(express.json());

App.post('/todo', (req, res)=>{
    const payload = req.body;
    const parsedPayload = createTodo.safeParse(payload)
    if(!parsedPayload.success){
        res.status(411).json({
            "msg":"Incorrect To-Do format"
        })
        return;
    }
})

App.get('/todos', (req, res)=>{
    // respond back with data in database  
})

App.delete('/todo:todoId', (req, res)=>{

})

App.put('/compeleted:todoId', (req, res)=>{
  const todoId =   
})