import React from 'react';

import './App.css';
import { Navbar, Footer } from "./components/index";
import { NavigationRoutes } from './routes/NavigationRoutes';

function App() {
  const theme = localStorage.getItem("currentTheme");
  return (
    <div className={`${theme === "dark" ? "dark-mode" : "App"}`}>
      <Navbar />
      <NavigationRoutes />
      <Footer />
    </div>
  );
}

export default App;
