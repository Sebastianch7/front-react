import React from 'react';
import './sass/main.scss';
import Edit from './pages/Edit';
import List from './pages/List';
import Login from './pages/Login';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
