import React from 'react';
// import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
// import Navbar from './components/Navbar';
import AppNavbar from './components/Navbar';

const App = () => {
    return (
        <div className="">
            <AppNavbar></AppNavbar>
          {/* <ToDoInput /> */}
          <ToDoList />
        </div>
      );
};

export default App;
