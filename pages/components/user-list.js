import React from "react";
import User from './user';

export default class UserList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user-list row">
        {this.props.users.map(user =>
          <User 
            key={user.id}
            userId={user.id}
            user={user} 
            deleteUser={this.props.deleteUser}
          />
        )}
      </div>
    );
  }
}
