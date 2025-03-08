import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import ToDoList from './components/ToDoList';

import AppNavbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoute';
import Login from './pages/Login';

const App = () => {
    return (
        <AuthProvider>
        <Router>
            <AppNavbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<PrivateRoute><ToDoList /></PrivateRoute>} />
            </Routes>
        </Router>
    </AuthProvider>
      );
};

export default App;
