import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Navbar from "./com/Navbar";
import ScrollText from "./pages/ScrollText"
import GusetBook from "./pages/GusetBook.jsx";



function App() {
  return (
   <Router >
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
           <Route path="/guestbook" element={<GusetBook />}/>
          <Route path="/scrolltext" element={<ScrollText/>}/>
        </Routes>
      </div>
   </Router>
  );
}

export default App;
