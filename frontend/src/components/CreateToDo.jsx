import { useState } from "react";
function CreateToDo() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return(
        <div 
        // style={{
        //     display: "flex",
        //     flexDirection: "column",
        //     alignItems: "center",
        //     // justifyContent: "center",
        //     // minHeight: "100vh"
        //     marginBottom: "20px",
        // }}
        >
            <input
                type="text"
                placeholder="Enter a new task"
                id="Title"
                // style={{width: "300px", padding: "10px", margin: "10px", borderRadius: "5px", border: "1px solid #ccc"}}
                onChange={(e)=>{
                    setTitle(e.target.value)
                }}
            /> <br/>
            <input
                type="Text"
                placeholder="Enter a new task description"
                id="Description"
                // style={{width: "300px", padding: "10px", margin: "10px", borderRadius: "5px", border: "1px solid #ccc"}}
                onChange={(e)=>{
                    setDescription(e.target.value)
                }}
            /><br/>
            <button 
                type="submit"
                // style={{width: "300px", padding: "10px", margin: "10px", borderRadius: "5px", border: "1px solid #ccc", backgroundColor: "#4CAF50", color: "white"}}
                onClick={()=>{
                    fetch("http://localhost:3000/todo", {
                        method:"POST",
                        headers:{
                            'Content-Type': 'application/json'
                        },
                        body:JSON.stringify({
                            title: title,
                            description: description
                        })
                    }).then(async (res)=>{
                        const temp = await res.json()
                        alert('todo added');
                    })
                }}
            >Add To-Do</button>
        </div>
    )
}

export default CreateToDo;