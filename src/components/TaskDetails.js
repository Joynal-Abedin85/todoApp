import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../redux/actions';

const TaskDetails = ({ task, onClose }) => {
    const dispatch = useDispatch();
    const [editedText, setEditedText] = useState(task.text);
    const [steps, setSteps] = useState(task.steps || []);
    const [dueDate, setDueDate] = useState(task.dueDate || '');
    const [reminder, setReminder] = useState(task.reminder || '');
    const [repeat, setRepeat] = useState(task.repeat || '');

    const handleSave = () => {
        dispatch(updateTodo(task.index, { text: editedText, steps, dueDate, reminder, repeat }));
        onClose();
    };

    return (
        <div>
            <h4>Edit Task</h4>
            <input 
                type="text" 
                className="form-control my-2"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
            />

            <h5>Add Steps</h5>
            {steps.map((step, i) => (
                <div key={i} className="d-flex align-items-center">
                    <input 
                        type="text"
                        className="form-control my-1"
                        value={step}
                        onChange={(e) => {
                            const newSteps = [...steps];
                            newSteps[i] = e.target.value;
                            setSteps(newSteps);
                        }}
                    />
                    <button 
                        className="btn btn-danger btn-sm ms-2"
                        onClick={() => setSteps(steps.filter((_, index) => index !== i))}
                    >❌</button>
                </div>
            ))}
            <button className="btn btn-outline-primary my-2" onClick={() => setSteps([...steps, ''])}>
                ➕ Add Step
            </button>

            <h5>Set Due Date</h5>
            <input 
                type="date" 
                className="form-control my-2"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />

            <h5>Set Reminder</h5>
            <input 
                type="datetime-local" 
                className="form-control my-2"
                value={reminder}
                onChange={(e) => setReminder(e.target.value)}
            />

            <h5>Repeat</h5>
            <select 
                className="form-select my-2"
                value={repeat}
                onChange={(e) => setRepeat(e.target.value)}
            >
                <option value="">None</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
            </select>

            <button className="btn btn-success mt-3" onClick={handleSave}>Save</button>
            <button className="btn btn-secondary mt-3 ms-2" onClick={onClose}>Cancel</button>
        </div>
    );
};

export default TaskDetails;
