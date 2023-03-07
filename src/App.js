import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Works from "./components/Works"

function App() {
    return (
      
      <Router>
        <div>
          <Navbar />
          {/* Wrap Route elements in a Routes component */}
          <Routes basename = "milena-portifolio" >
            {/* Define routes using the Route component to render different page components at different paths */}
            {/* Define a default route that will render the Home component */}
            <Route path="/milena-portifolio" element={<Home />} />
            <Route path="/milena-portifolio/about" element={<About />} />
            <Route path="milena-portifolio/blog" element={<Blog />} />
            {/* Define a route that will have descendant routes */}
            <Route path="milena-portifolio/skills/*" element={<Skills />} />
            <Route path="milena-portifolio/works/*" element={<Works />} />
            <Route path="milena-portifolio/contact/*" element={<Contact />} />
          </Routes>
        </div>
      </Router>
   
    );
  }
  

export default App;
