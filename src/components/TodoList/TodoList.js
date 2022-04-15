import React from 'react';
import './TodoList.css'
import Todo from "../todo/Todo";


const TodoList = ({todos,status,setTodos,search}) => {
    return (
        <ul className="todoList">
            {todos.filter((item)=>{
                if (status === 'active') {
                    return item.isActive === false
                } else if (status === 'done') {
                    return item.isActive === true
                } else if (status === 'recent'){
                    return item.isDeleted === true
                } else {
                    return item && !item.isDeleted
                }
            }).filter((item)=> {
                return item.name.startsWith(search)
            }).map((item)=>(
                <Todo status={status} Obj={item} todos={todos} setTodos={setTodos} key={item.id}/>
            ))}
        </ul>
    );
};

export default TodoList;

// switch (status) {
//                     case 'active' : {
//                         return !item.isActive
//                     }
//                     case 'done' : {
//                         return item.isActive
//                     }
//                     default :
//                         return  item
//                 }