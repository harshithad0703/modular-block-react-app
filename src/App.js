// import React from "react";

// import Header from "./components/Header"
// import Home from './components/Pages/Home';
// import Blog from "./components/Pages/Blog";
// import Contact from './components/Contact';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Header></Header>
//       <Home/>
//       <Blog/>
//       <Contact/>
//     </div>
//   );
// }

// export default App;
import React, { Component } from "react";
import {
  Header,
  Home,
  Blog,
  Thank,
  Contact
} from './components/index'
import './App.css';
import { Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/home" Component={Home} />
          <Route path="/blog" Component={Blog} />
          <Route path="/contact" Component={Thank} />
        </Routes>
        <Contact />
      </div>
    );
  }
}

export default App;

// import { Outlet } from "react-router-dom";
// import { Header } from "./components";
// import "./App.css";

// function App() {
//   return (
//     <>
//     <Header />
//       <main>
//         <Outlet />
//       </main>
//     </>
//   );
// }
// export default App;