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
          <Link to='/login'>Login Here</Link>
          <Route path='/login' component={Login} />
          <Route path='/friends' component={FriendsList} />
        </header>
      </div>
    </Router>
  );
}

export default App;
