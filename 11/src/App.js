import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";
import {RouterProvider, createBrowserRouter, Outlet} from 'react-router-dom';
import UserContext from "./utils/UserContext";
import User from "./components/User";

//chunking
//code splitting
//dynamic bundling
//dynamic import
//on demand loading

const Grocery = lazy(()=> import('./components/Grocery'));

const AppLayout = ()=>{
    const [isUserLogged,setUserLoggedIn] = useState('');
    useEffect(()=>{
        const data = {
            userName:'Harish Krishnapuram'
        }
        setUserLoggedIn(data.userName);
    },[])
    return(
        <UserContext.Provider value={{loggedInUser:isUserLogged,setUserLoggedIn}}>
            <div className="app">
                <Header/>
                <Outlet/>
            </div>
        </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'contact-us',
                element:<Contact/>
            },
            {
                path:'restaurants/:id',
                element:<ResMenu/>
            },
            {
                path:'grocery',
                element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
            }
        ],
        errorElement:<Error/>
    },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);