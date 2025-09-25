import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./Pages/Home.jsx";
import Interview from "./Pages/Interview.jsx";

function App(){
  return(
     <Router>
      <Routes>
        
         <Route element={<Layout />}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/interview" element={<Interview />} />
      </Routes>
    </Router>

  )
}
export default App;