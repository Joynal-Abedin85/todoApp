import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

const ToDoInput = () => {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo) {
            dispatch(addTodo({ text: todo, completed: false }));
            setTodo('');
        }
    };

    return (
        <>
        
        <h4 className="mt-3 text-muted">To-Do</h4>
        <div className="container mt-3 p-3 bg-light rounded">
            <h5 className="text-muted">Add A Task</h5>
            <form onSubmit={handleSubmit} className="d-flex gap-2">
                <input 
                    type="text" 
                    className="form-control"
                    value={todo} 
                    onChange={(e) => setTodo(e.target.value)} 
                    placeholder="Enter a new task..." 
                />
                <button type="submit" className="btn btn-success">ADD TASK</button>
            </form>
        </div>
        </>
    );
};

export default ToDoInput;
