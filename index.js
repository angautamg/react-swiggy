import React from 'react';
import reactDOM from 'react-dom/client';
import Body from '/src/component/Body.js';
import Header from '/src/component/Header.js';
import About from './src/component/About';
import Error from './src/component/Error';
import Contact from './src/component/Contact';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet />
        </div>
    )
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/aboutus",
                element:<About/>
            },
            {
                path:"/contactus",
                element:<Contact/>
            },
        ],
        errorElement:<Error/>
    }
]);
const root = reactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);