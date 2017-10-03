import React from "react";
import { capFirstLetter } from '../utils/stringer';
import { getId } from '../utils/id-gen';

export default class AddUserForm extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() { }

    addUser = () => {
        let newId = getId();
        if (!newId && newId !== 0) {
            alert('id generator reached its limits');
        } else {
            let newUser = {
                id: newId,
                first_name: capFirstLetter(this.refs.firstname.value),
                last_name: capFirstLetter(this.refs.lastname.value),
                avatar:
                "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
            };

            this.props.addUser(newUser);
        }

        this.clearForm();
    }

    clearForm = () => {
        this.refs.firstname.value = '';
        this.refs.lastname.value = '';
    }

    render() {
        return (
            <div className="add-user-form row">
                <label className="add-user-form__label" htmlFor="firstname">First Name</label>
                <input className="add-user-form__name-textbox" type="text" name="firstname" ref="firstname" />
                <label className="add-user-form__label" htmlFor="lastname">Last Name</label>
                <input className="add-user-form__name-textbox" type="text" name="lastname" ref="lastname" />

                <button className="add-user-form__add-user-btn" onClick={this.addUser}>Add User</button>
            </div>
        );
    }
}
