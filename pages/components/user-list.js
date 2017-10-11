import React from "react";
import User from './user';
import Pagination from './pagination';

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
        
        <Pagination
          currPage={this.props.currPage}
          totalPages={this.props.totalPages}
          getUsers={this.props.getUsers}
        />
      </div>
    );
  }
}
