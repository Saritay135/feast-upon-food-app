import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Error from "./src/components/Error";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu.js";



const AppLayout = () => {
  return(
    <>
    <Header />
    <Outlet />
    <Footer />
    
    
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<AppLayout />,
    errorElement: <Error />,
    children : [
      {
        path: "/about",
        element: <About />
      },
      {
        path:"/",
        element: <Body />
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/restaurant/:restId",
        element:<RestaurantMenu />
      }
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);