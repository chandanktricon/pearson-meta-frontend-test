import { shallow } from "enzyme";
import AddUserForm from "./add-user-form";
import Textbox from '../controls/textbox';
import Button from '../controls/button';

describe("AddUserForm Component", () => {
  it("should render without any issue", () => {
    const onClickSpy = sinon.spy();
    const component = shallow(
      <AddUserForm
        addUser={onClickSpy}
      />
    );

    expect(component.exists()).eql(true);
  });

  it("should have firstname, lastname input textboxes and a Add User button", () => {
    const onClickSpy = sinon.spy();
    const component = shallow(<AddUserForm />);

    expect(component.find(Textbox).exists()).eql(true);
    expect(component.find(Button).exists()).to.equal(true);
  });

  it("Add User button doesn't do anything when firstname or lastname field is empty", () => {
    const onClickSpy = sinon.spy();
    const component = shallow(<AddUserForm addUser={onClickSpy} />);

    component.find(Button).simulate("click");
    expect(onClickSpy.calledOnce).to.eql(false);

    component.find(Textbox).first().simulate('change', { target: { value: 'abc' } });
    component.find(Button).simulate("click");
    expect(onClickSpy.calledOnce).to.eql(false);

    component.find(Textbox).first().simulate('change', { target: { value: '' } });
    component.find(Textbox).last().simulate('change', { target: { value: 'xyz' } });
    component.find(Button).simulate("click");
    expect(onClickSpy.calledOnce).to.eql(false);
  });

  it("Add User button works when both (firstname, lastname) fields are filled", () => {
    const onClickSpy = sinon.spy();
    const component = shallow(<AddUserForm addUser={onClickSpy} />);

    component.find(Textbox).first().simulate('change', { target: { value: 'abc' } });
    component.find(Textbox).last().simulate('change', { target: { value: 'xyz' } });
    component.find(Button).simulate("click");
    expect(onClickSpy.calledOnce).to.eql(true);
  });
});
