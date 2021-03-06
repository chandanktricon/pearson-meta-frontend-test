import React from "react";
import AddUserForm from './components/add-user-form';
import UserList from './components/user-list'
import http from './utils/fetch';

export default class C3 extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      currPage: 1,
      totalPages: 1,
    };

    this.getUsers = this.getUsers.bind(this);
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  componentDidMount() {
    this.getUsers(1);
  }

  getUsers(pageNumber) {
    let url = `https://reqres.in/api/users?page=${pageNumber}&&per_page=4`;

    http.get(url, data => {
      this.setState({
        users: data.data,
        currPage: data.page,
        totalPages: data.total_pages,
      });
    });
  }

  addUser(newUser) {
    let url = `https://reqres.in/api/users`;

    http.post(url, newUser, data => {
      newUser.id = data.id;
      this.setState({
        users: [...this.state.users, newUser]
      });
    });
  }

  deleteUser(userId) {
    let users = this.state.users.filter(user => user.id !== userId);
    if (users.length)
      this.setState({ users: users });
    else
      this.getUsers(this.state.currPage - 1);
  }

  render() {
    return (
      <main className="root">
        <div className="header row">
          <h1>Pearson User Management</h1>
        </div>
        <UserList
          users={this.state.users}
          currPage={this.state.currPage}
          totalPages={this.state.totalPages}
          getUsers={this.getUsers}
          deleteUser={this.deleteUser}
        />
        <AddUserForm
          addUser={this.addUser}
        />
      </main>
    );
  }
}
