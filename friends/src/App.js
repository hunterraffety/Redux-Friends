// dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// components
import Login from './components/Login';

// styles
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Link to='/login'>Hi</Link>
          <Route path='/login' component={Login} />
        </header>
      </div>
    </Router>
  );
}

export default App;
