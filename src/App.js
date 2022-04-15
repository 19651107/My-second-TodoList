import React, {useEffect, useState} from 'react'
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import 'bootswatch/dist/sketchy/bootstrap.min.css';
import './style.css'


function App() {

    const [todos, setTodos] = useState([])
    const [inputText, setInputText] = useState('')
    const [status, setStatus] = useState('all')
    const [search,setSearch] = useState('')

    // useEffect(()=>{
    //     setTodos(JSON.parse(localStorage.getItem('todos')))
    // },[])
    //
    // useEffect(()=>{
    //     localStorage.getItem('todos', JSON.stringify(todos))
    // },[todos])


    return (
        <div className="App">
            <div className="container">
                <Header todos={todos}/>
                <Search setStatus={setStatus} setSearch={setSearch}/>
                {status === 'all' && todos.filter((item)=>{
                    return !item.isDeleted
                }).length === 0
                    ? <p>Здесь будут ваши задания)</p>
                    : status === 'active' && todos.filter((item)=>{
                        return !item.isActive && !item.isDeleted
                    }).length === 0
                    ? <p>Здесь будут ваши активные задания)</p>
                    : status === 'done' && todos.filter((item)=>{
                        return item.isActive && !item.isDeleted
                        }).length === 0
                    ? <p>Здесь будут ваши выполненые задания)</p>
                    : status === 'recent' && todos.filter((item)=>{
                        return item.isDeleted
                            }).length === 0
                    ? <p>Здесь будут ваши удаленные задания)</p>
                    : <TodoList status={status} todos={todos} setTodos={setTodos} search={search}/>
                }
                <AddTodo status={status} inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
            </div>
        </div>
    );
}

export default App;


// {todos.length === 0 && status === 'all'
//                     ? <p>Здесь будут ваши задания)</p>
//                     : todos.filter((item)=> {
//                         return item.isActive === false && !item.isDeleted
//                     }).length === 0 && status === 'active'
//                     ? <p>Здесь будут ваши активные задания)</p>
//                         : todos.filter((item)=> {
//                             return item.isActive === true
//                         }).length === 0 && status === 'done'
//                     ? <p>Здесь будут ваши выполнение задания)</p>
//                             : todos.filter((item)=>{
//                                 return item.isDeleted
//                             }).length === 0 && status === 'recent'
//                     ? <p>Здесь будут ваши удаленные задания</p>
//                     : <TodoList status={status} todos={todos} setTodos={setTodos} search={search}/>
//                 }