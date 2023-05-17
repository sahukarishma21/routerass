import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './component/pages/Home/Home';
import Login from './component/pages/Login/Login';
import Register from './component/pages/Register/Register';
import AboutUs from './component/pages/About/About';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([

  {
    path: "/",
    element: <App/>
  },
  {
    path : '/home' ,
    element : <Home/>
  },

  {
    path : '/login' ,
    element : <Login/>
  },
  {
    path : '/register' ,
    element : <Register/>
  },
  {
    path :'/About',
    element : <AboutUs/>
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
