import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/fontawesome'
import './todo.css'


const Todo = ({Obj,setTodos,todos,status}) => {



    const deleteTodo = () => {
        setTodos(todos.map((item)=>{
                if (item.id === Obj.id){
                    return {...item, isDeleted: !item.isDeleted}
                }
                return item
        }))
    }

    const doneTodo = () => {
        setTodos(todos.map((item)=>{
            if (item.id === Obj.id){
               return  {...item, isActive: !item.isActive}
            }
            return item
        }))
    }

    const importantTodo = () => {
        setTodos(todos.map((item)=>{
            return item.id === Obj.id ? {...item, isImportant: !item.isImportant} : item
        }))
    }


    const changeTodo = () => {
        setTodos(todos.map((item)=> {
            if (item.id === Obj.id){
                return {...item, isChange: !item.isChange}
            }
            return  item
        }))
    }


    const inputHandler = (e) => {
        return Obj.name = e.target.value
    }


    const resStore = () => {
        setTodos(todos.map((item)=>{
            if (item.id === Obj.id) {
                return {...item, isDeleted: !item.isDeleted}
            }
            return item
        }))
    }

    const deletesTodo = () =>{
        setTodos(todos.filter((item)=>{
            return item.id !== Obj.id
        }))
    }

    return (
        <li className="todoList__task">
            {!Obj.isChange
                ? <p className={`todoList__name ${Obj.isActive ? 'active' : '' || !Obj.isActive ? `${Obj.isImportant ? 'Active' : ''}` : ''}`}>{Obj.name}</p>
                : <input maxLength="20" className="todoList__input" type="text" defaultValue={Obj.name} onChange={inputHandler}/>}
            <div className="todoList__btns">
                {status === 'recent' ?
                    <>
                        <button className={`todoList__btn btn btn btn-secondary`} type="button" onClick={changeTodo}><i className="fas fa-edit"> </i></button>
                        <button className="todoList__btn btn btn btn-outline-danger" type="button" onClick={deletesTodo}><i className="fa-solid fa-eraser"> </i></button>
                        <button type="button" className="btn btn-outline-warning" onClick={resStore}>reestablish</button>
                    </>

                    : <>
                    <button className={`todoList__btn btn btn btn-secondary`} type="button" onClick={changeTodo}><i className="fas fa-edit"> </i></button>
                    <button className={`todoList__btn btn ${Obj.isActive ? 'btn btn-success' : 'btn btn-outline-success'}`} type="button" onClick={doneTodo}><i className="fa-solid fa-check-double"> </i></button>
                    <button className={`todoList__btn ${Obj.isImportant ? 'btn btn-warning' : 'btn btn-outline-warning'}`} type="button" onClick={importantTodo}><i className="fa-solid fa-triangle-exclamation"> </i></button>
                    <button className="todoList__btn btn btn btn-outline-danger" type="button" onClick={deleteTodo}><i className="fa-solid fa-eraser"> </i></button>
                </>}
            </div>
        </li>
    );
};
export default Todo