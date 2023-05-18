import React from 'react';

import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage';
import Index from './Pages/Index';

// import App from './components/App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
