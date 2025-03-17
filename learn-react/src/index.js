import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider, Outlet} from "react-router";
import { Grid2 as Grid } from '@mui/material';

import Home from './components/Home/Home';
import Analytics from './components/Analytics/Analytics';
import AppSidebar from './components/AppSidebar/AppSidebar';
import Favorites from './components/Favorites/Favorites';

const AppLayout = () => (
  <>
    <Grid 
      container 
      direction="row"
      sx={{
        justifyContent: "flex-start",
        alignItems: "center",
      }}>
      <Grid size="auto">
        <AppSidebar />
      </Grid>
      <Grid size="grow">
        <Outlet />
      </Grid>
    </Grid>
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
        path: "favorites",
        element: <Favorites />,
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