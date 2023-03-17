import "./App.css";
import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Header from "./Header";
import TaskList from "./TaskList";

function App() {
  
  return (
    <div className="main-container">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/tasks" element={<TaskList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
