import React from "react";
import Banner from "./components/pages/frontend/homepage/Banner";
import Contacts from "./components/pages/frontend/homepage/Contacts";
import Home from "./components/pages/frontend/homepage/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
          <Router>
            <Route index element={<Home />} />
          </Router>
    </BrowserRouter>
  );
};

export default App;
