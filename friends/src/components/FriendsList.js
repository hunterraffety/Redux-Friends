import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getData } from '../actions';
class FriendsList extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    console.log(this.props);
    return (
      <div className='test-container'>
        <h1>Friends!</h1>
        {this.props.friends.map(friend => (
          <h1>{friend.name}</h1>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friendsReducer.friends
});

export default withRouter(
  connect(
    mapStateToProps,
    { getData }
  )(FriendsList)
);
