import { createBrowserRouter } from "react-router-dom";

import Edit from './pages/Edit';
import List from './pages/List';
import Login from './pages/Login';
import Create from './pages/Create';

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Login />
    },
    {
        path : '/list',
        element : <List />
    },
    {
        path : '/edit',
        element : <Edit />
    },
    {
        path : '/create',
        element : <Create />
    },
])