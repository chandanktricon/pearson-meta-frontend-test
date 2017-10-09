import React from "react";
import { capFirstLetter } from '../utils/stringer';
import { getId } from '../utils/id-gen';
import Button from '../controls/button';
import Textbox from '../controls/textbox';
import Label from '../controls/label';

export default class AddUserForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: ''
    }
  }

  componentDidMount() { }

  addUser = () => {
    if(!this.state.firstname || !this.state.lastname)
      return;

    let newId = getId();
    if (!newId && newId !== 0) {
      alert('id generator reached its limits');
    } else {
      let newUser = {
        id: newId,
        first_name: capFirstLetter(this.state.firstname),
        last_name: capFirstLetter(this.state.lastname),
        avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
      };

      this.props.addUser(newUser);
    }

    this.clearForm();
  }

  clearForm = () => {
    this.setState({
      firstname: '',
      lastname: ''
    });
  }

  render() {
    return (
      <div className="add-user-form row">

        <Label className="add-user-form__label">First Name</Label>

        <Textbox
          className="add-user-form__firstname"
          value={this.state.firstname}
          onChange={ e => { this.setState({ firstname : e.target.value }) }}
        />

        <Label className="add-user-form__label">Last Name</Label>

        <Textbox
          className="add-user-form__lastname"
          value={this.state.lastname} 
          onChange={ e => { this.setState({ lastname : e.target.value }) }}
        />
        
        <Button
          className="add-user-form__add-user-btn"
          type="roundFilled"
          onClick={this.addUser}
        >Add User
        </Button>

      </div>
    );
  }
}
