import { shallow, mount } from "enzyme";
import AddUserForm from "./add-user-form";

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

    expect(component.find('input[name="firstname"]').exists()).eql(true);
    expect(component.find('input[name="lastname"]').exists()).eql(true);
    expect(component.find('button').html()).to.equal('<button class="add-user-form__add-user-btn">Add User</button>');
  });

  it("should verify that Add User button is working fine", () => {
    const onClickSpy = sinon.spy();
    const component = mount(<AddUserForm addUser={onClickSpy} />);

    component.find("button").simulate("click");
    expect(onClickSpy.calledOnce).to.eql(true);
  });
});
