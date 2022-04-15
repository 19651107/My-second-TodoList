import React from 'react';
import './AddTodo.css'

const AddTodo = ({todos,setTodos,inputText,setInputText,status}) => {

    const addTodo = (e) => {
        e.preventDefault()
        setTodos([...todos,{
            name : inputText,
            isActive: false,
            isImportant: false,
            isChange: false,
            isDeleted: false,
            id : Math.floor(Math.random() * 1000)
        }])
        setInputText('')
    }

    return (
        <form action="" className="addTodo" onSubmit={addTodo}>
            {status === 'done' || status === 'recent'
                ? <input value={inputText} type="text" disabled={true} placeholder="disabled"/>
                :  <input style={{height : '35px'}} maxLength="20" required value={inputText} type="text" placeholder="What need to be done" onChange={(e)=> setInputText(e.target.value)}/>
                 }
            <button className="addTodo__btn btn btn-danger" type="submit">Add todo</button>
        </form>
    );
};

export default AddTodo
