import React, { useState } from 'react';
import FontAwesome from 'react-fontawesome';
import '../styles/todo.css';

const taskList=["1stTask","2ndTask"];

function TodoList(){
    const [task, setTask] = useState(0);
    const [text,setText]=useState("");
    const handleClick=(event)=>{
        event.preventDefault();
        if(text!=""){
            taskList.push(text);
            setTask(taskList.length);
            setText('');
            console.log(taskList);
        }
    }
    const removeTask=(task)=>{
        const ind=taskList.indexOf(task);
        if(ind>-1){
            taskList.splice(ind,1);
            console.log(taskList);
            setTask(taskList.length);
            
        }
    }
    
    
    return(
        <div className="">
            <div className="header">
                <div className="heading h2">
                    My To Do List
                </div>
                <div className="formHolder">
                    <form className="form-group" onSubmit={handleClick}>
                        <div className="input-group mx-sm-3 mb-2">
                            <input type="text" className="form-control" id="taskToAdd" placeholder="New Task" value={text} onChange={event=>{setText(event.target.value)}}></input>
                            <span><button type="submit" className="btn" >Add</button></span>
                        </div>
                    </form>
                </div>
            </div>
            <div className="content">
                <ul>
                {taskList.map((task,index)=><li key={index} className="task">{task}<FontAwesome className="icon" onClick={()=>removeTask(task)}><span class="fal fa-times" size="2x" ></span></FontAwesome></li>)}
                </ul>
            </div>
        </div>
    );
}
export default TodoList;