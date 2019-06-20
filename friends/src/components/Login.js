import React from 'react';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  render() {
    return (
      <div className='login-container'>
        <h1>Hello from Login Route</h1>
        <p>There will be a form here.</p>
      </div>
    );
  }
}

export default Login;
