import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider, Outlet} from "react-router";

import Home from './components/Home/Home';
import Analytics from './components/Analytics/Analytics';
import AppSidebar from './components/AppSidebar/AppSidebar';

const AppLayout = () => (
  <>
    <AppSidebar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router = {router}/>
);