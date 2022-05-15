import React, { useState, useEffect } from 'react';
import Navigation from "./nav/Navigation";
import NavRoutes from "./nav/NavRoutes";
import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <NavRoutes />
    </div>
  );
}

export default App;
