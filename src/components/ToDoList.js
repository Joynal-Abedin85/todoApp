import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, toggleTodo } from '../redux/actions';
import TaskDetails from './TaskDetails';
import ToDoInput from './ToDoInput';
import { FaDeleteLeft } from 'react-icons/fa6';
import { FaEdit } from 'react-icons/fa';

const ToDoList = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [selectedTask, setSelectedTask] = useState(null);

    // Separate incomplete & completed tasks
    const incompleteTodos = todos.filter(todo => !todo.completed);
    const completedTodos = todos.filter(todo => todo.completed);

    return (
        <div className="container mt-4 d-flex">
            {/* Left Side - Task List */}
            <div className="w-100">
                <ToDoInput></ToDoInput>
                <ul className="list-group">
                    {/* Incomplete Tasks */}
                    {incompleteTodos.map((todo, index) => (
                        <li 
                            key={index} 
                            className="list-group-item d-flex justify-content-between align-items-center"
                            
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="d-flex align-items-center">
                                <input 
                                    type="checkbox" 
                                    className="form-check-input me-2"
                                    checked={todo.completed} 
                                    onChange={() => dispatch(toggleTodo(index))}
                                />
                                <span>{todo.text}</span>
                            </div>
                           <div>

                           <button 
                                className="btn mx-4  btn-sm btn-outline-success"
                                onClick={() => setSelectedTask({ ...todo, index })}
                            >
                               <FaEdit></FaEdit>
                            </button>
                            <button 
                                className="btn btn-sm btn-outline-danger"
                                onClick={(e) => { 
                                    e.stopPropagation(); 
                                    dispatch(deleteTodo(index));
                                }}
                            >
                                <FaDeleteLeft></FaDeleteLeft>
                            </button>
                           </div>
                        </li>
                    ))}
                </ul>

                {/* Completed Tasks Section */}
                {completedTodos.length > 0 && (
                    <>
                        <h5 className="mt-4 text-muted">Completed</h5>
                        <ul className="list-group">
                            {completedTodos.map((todo, index) => (
                                <li 
                                    key={index} 
                                    className="list-group-item d-flex justify-content-between align-items-center bg-light text-muted"
                                    onClick={() => setSelectedTask({ ...todo, index })}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="d-flex align-items-center">
                                        <input 
                                            type="checkbox" 
                                            className="form-check-input me-2"
                                            checked={todo.completed} 
                                            onChange={() => dispatch(toggleTodo(index))}
                                        />
                                        <span className="text-decoration-line-through">{todo.text}</span>
                                    </div>
                                    <button 
                                        className="btn btn-sm btn-outline-danger"
                                        onClick={(e) => { 
                                            e.stopPropagation(); 
                                            dispatch(deleteTodo(index));
                                        }}
                                    >
                                        ❌
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>

            {/* Right Side - Task Details Panel */}
            {selectedTask && (
                <div className="w-50 ms-3 border p-3 bg-light">
                    <TaskDetails task={selectedTask} onClose={() => setSelectedTask(null)} />
                </div>
            )}
        </div>
    );
};

export default ToDoList;
