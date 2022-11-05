import './index.css';

import {
    Route,
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";

import App from './App';
import Choose_school from './pages/Choose_school';
import ErrorPage from './pages/ErrorPage';
import React from 'react';
import ReactDOM from 'react-dom/client';
import TestSkills from './pages/TestSkills';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage />,
    },
    {
        path: "/Main",
        element: <Choose_school/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/Test",
        element: <TestSkills/>,
        errorElement: <ErrorPage />,
      },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />

);

