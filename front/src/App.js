import React from 'react';
import './sass/main.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import TableRow from './components/TableRow/TableRow';
import Input from './components/Input/Input';
import Edit from './pages/Edit';
import List from './pages/List';
import Login from './pages/Login';
import { useState, useEffect } from 'react';

function App() {

  return (
    <div className="App">
      {/* <Login></Login>
      <List></List> */}
      <Edit></Edit>
    </div>
  );
}

export default App;
