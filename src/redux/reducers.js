const initialState = {
    todos: []
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, { ...action.payload, steps: [], dueDate: null, reminder: null, repeat: null }]
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter((todo, index) => index !== action.payload)
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                    index === action.payload ? { ...todo, completed: !todo.completed } : todo
                )
            };
        case 'UPDATE_TODO':
            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                    index === action.payload.index ? { ...todo, ...action.payload.updates } : todo
                )
            };
        default:
            return state;
    }
};

export default todoReducer;
