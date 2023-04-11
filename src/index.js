// import React from 'react';

// import ReactDOM from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import {
//   Home,
//   Blog,
//   Thank,
//   Contact
// } from './components'
// import App from './App';
// import './App.css';
// import './index.css';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/home",
//         element: (<Home />)
//       },
//       {
//         path: "/blog",
//         element: <Blog />,
//       },
//       {
//         path: "/contact",
//         element: (
//           <>
//             <Thank />
//             <Contact />
//           </>
//         ),
//       },
//     ]
//   }

// ]);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router}><App /></RouterProvider>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { HashRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App/>
  </Router>
  , document.getElementById('root'));