// dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// components
import Login from './components/Login';
import FriendsList from './components/FriendsList';

// styles
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Route exact path='/' component={Login} />
          <Route path='/friends' component={FriendsList} />
        </header>
      </div>
    </Router>
  );
}

export default App;
