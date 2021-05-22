import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Route path="/" exact component={Home} />
        <Route path="/pricing" component={Pricing} />
      </div>
    </Router>
  );
}

export default App;
