// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase.init.js';
import { onAuthStateChanged } from 'firebase/auth';

// 🔹 Create Context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
    
        return () => {
            setLoading(true);  
            unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading,setUser  }}>
            {children}
        </AuthContext.Provider>
    );
};
