import React from 'react';

const Header = ({todos}) => {

    const more = todos.filter((item)=>{
        return !item.isActive
    }).length

    const done = todos.filter((item)=>{
        return item.isActive
    }).length

    return (
        <header className="header">
            <h1 className="header__title">Todo list</h1>
            {todos.length === 0 ? <p className="header__subtitle">Каличество ваших заданий</p> : <p>{more} more Todo, {done} done</p>}
        </header>
    );
};

export default Header;