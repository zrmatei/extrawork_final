import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Services from "./routes/Services";
import Contact from "./routes/Contact";



const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>,
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/services',
        element: <Services/>
    },
    {
        path: '/contact',
        element: <Contact/>
    }
  
  ]);

function App(){
    return(
        <RouterProvider router={router}/>
    )
}

export default App;