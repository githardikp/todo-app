import React from "react";

export function ReadToDo({todos}) {

    return(
        <div>
            {todos && todos.map((todo) => {
                return(
                    <div key={todo._id}>
                        <h4>{todo.title}</h4>
                        <p>{todo.description}</p>
                        <button
                            onClick={()=>{
                                fetch("http://localhost:3000/completed",{
                                    method: "PUT",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body:JSON.stringify({
                                        id: todo._id
                                    })
                                }).then((response)=>{
                                    if(response.status === 200){
                                        alert("Todo updated successfully")
                                    }else{
                                        alert("Error updating todo")
                                    }
                                })
                            }}
                        >{todo.completed ? "Completed" : "Mark as done"}</button>
                    </div>
                )
            })}
        </div>
    )
}