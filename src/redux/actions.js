export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    payload: todo
});

export const deleteTodo = (index) => ({
    type: 'DELETE_TODO',
    payload: index
});

export const toggleTodo = (index) => ({
    type: 'TOGGLE_TODO',
    payload: index
});

export const updateTodo = (index, updates) => ({
    type: 'UPDATE_TODO',
    payload: { index, updates }
});
