import React from "react";

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
          <img className="user__avatar" src={this.props.user.avatar} />
          <br/>
          <br/>
          <p>{this.props.user.first_name + ' ' + this.props.user.last_name}</p>
        </div>
        <div className="user__delete" onClick={this.deleteUser}>Delete</div>
      </div>
    );
  }
}
