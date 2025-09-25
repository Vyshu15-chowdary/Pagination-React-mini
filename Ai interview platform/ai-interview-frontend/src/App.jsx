import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Home from ".Pages/Home";
import Interview from ".Pages/Interview";

function App(){
  return(
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interview" element={<Interview />} />
      </Routes>
    </Router>

  )
}
export default App;