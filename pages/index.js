import React from "react";
import AddUserForm from './components/add-user-form';
import UserList from './components/user-list'
import InitialUsers from './utils/initial-users';

export default class C3 extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      users: InitialUsers
    };
  }

  componentDidMount() { }

  addUser = (newUser) => {
    this.setState({
      users: [...this.state.users, newUser]
    });
  }

  deleteUser = (userId) => {
    let users = this.state.users.filter( user => user.id !== userId );
    this.setState({ users: users });
  }

  render() {
    return (
      <main className="root">
        <div className="header row">
          <h1>Pearson User Management</h1>
        </div>
        <UserList
          users={this.state.users}
          deleteUser={this.deleteUser}
        />
        <AddUserForm
          addUser={this.addUser}
        />
      </main>
    );
  }
}
