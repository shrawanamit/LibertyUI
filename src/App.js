import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DashBord from './Components/DashBord'

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={DashBord} />
        </Router>
    </div>
  );
}

export default App;
