import React from "react";
import Avatar from '../elements/avatar';
import Button from '../elements/button';

export default class User extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  deleteUser = () => {
    this.props.deleteUser(this.props.userId);
  }

  render() {
    return (
      <div className="user">
        <div className="user__profile">
          <Avatar 
            className="user__avatar"
            size={80}
            src={this.props.user.avatar}
          />

          <br/>
          <br/>
          <p>{this.props.user.first_name + ' ' + this.props.user.last_name}</p>
        </div>

        <Button
          className="user__delete" 
          type="label"
          onClick={this.deleteUser}
        >Delete
        </Button>

      </div>
    );
  }
}
