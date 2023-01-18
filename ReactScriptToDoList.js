import React, { useState } from 'react';

function ToDoList(){
    const [ToDos, SetToDos] = useState([]);
    const [NewToDo, SetNewToDo] = useState('');

    const handleSubmit = event =>{
        event.preventDefault();
        SetToDos([...ToDos, {text:NewToDo, isCompleted: false}]);
        SetNewToDo('');
    };

    const handleComplete = index => {
        const newToDos = [...ToDos];
        newToDos[index].isCompleted = true;
        SetToDos(newToDos);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={NewToDo}
                onChange={Event => SetNewToDo(event.target.value)}
                />
            <button type="submit">Add ToDos</button>
            </form>
            <ul>
                {ToDos.map((toDo, index) => (
                    <li key={index} style={{ textDecoration: toDo.isCompleted ? 'line-through' : 'none' }}>
                        {toDo.text}
                        <button onClick={() => handleComplete(index)}>Mark as Complete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;