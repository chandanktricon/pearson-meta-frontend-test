import { shallow, mount } from "enzyme";
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

  it("should verify that Add User button is working fine", () => {
    const onClickSpy = sinon.spy();
    const component = mount(<AddUserForm addUser={onClickSpy} />);

    component.find(Textbox).first().simulate('change',  { target: { value: 'abc' } });
    component.find(Textbox).last().simulate('change',  { target: { value: 'abc' } });
    component.find(Button).simulate("click");
    expect(onClickSpy.calledOnce).to.eql(true);
  });
});
