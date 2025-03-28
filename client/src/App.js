import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home as HomeIcon, User, Settings } from 'lucide-react';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
