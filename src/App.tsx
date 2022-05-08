import React from 'react';

import './App.css';
import { Navbar, Footer } from "./components/index";
import { NavigationRoutes } from './routes/NavigationRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavigationRoutes />
      <Footer />
    </div>
  );
}

export default App;
