import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home/home';
import Projects from './pages/Projects/projects';
import Contact from './pages/Contact/Contact';
import AboutShefo from './pages/About/aboutShefo';
import Services from './pages/Services/services';
import Skills from './pages/Skills/skills';
import MyBlog from './pages/My BLog/myBlog';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h1>Sorry</h1>
  },
  {
    path: "/projects",
    element: <Projects/>,
    errorElement: <h1>Sorry</h1>
  },
  {
    path: "/contact",
    element: <Contact/>,
    errorElement: <h1>Sorry</h1>
  },
  {
    path: "/aboutShefo",
    element: <AboutShefo/>,
    errorElement: <h1>Sorry</h1>
  },
  {
    path: "/services",
    element: <Services/>,
    errorElement: <h1>Sorry</h1>
  },
  {
    path: "/skills",
    element: <Skills/>,
    errorElement: <h1>Sorry</h1>
  },
  {
    path: "/myBlog",
    element: <MyBlog/>,
    errorElement: <h1>Sorry</h1>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

