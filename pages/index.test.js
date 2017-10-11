import { shallow, mount } from "enzyme";
import Index from "./index";
import UserList from "./components/user-list";
import AddUserForm from "./components/add-user-form";

describe("Index", () => {
  afterEach(() => {
    sinon.restore();
  });
  const component = shallow(<Index />);

  it("Should render without any issue", () => {
    expect(component.hasClass("root")).to.be.true;
  });

  it("Should have Pearson User Management header", () => {
    expect(component.find("h1").text()).to.eql("Pearson User Management");
  });

  it("Should have UserList component", () => {
    expect(component.find(UserList).exists()).to.be.true;
  });

  it("Should have AddUserForm component", () => {
    expect(component.find(AddUserForm).exists()).to.be.true;
  });

  it("Should call getUsers when Index is mounted", () => {

    const componentDidMountSpy = sinon.spy(
      Index.prototype,
      "componentDidMount"
    );
    const getUsersSpy = sinon.spy(Index.prototype, "getUsers");

    const component = mount(<Index />);
    expect(componentDidMountSpy.called).to.be.true;
    expect(getUsersSpy.called).to.be.true;
  });

  it("Should invoke addUser function when called from add-user-form component", () => {

    const addUserSpy = sinon.spy(Index.prototype, "addUser");

    const component = mount(<Index />);

    component.find('.add-user-form__firstname').simulate('change', { target: { value: 'abc' } });
    component.find('.add-user-form__lastname').simulate('change', { target: { value: 'xyz' } });
    component.find('.add-user-form__add-user-btn').simulate("click");

    expect(addUserSpy.calledOnce).to.be.true;
  });

  it("Should invoke deleteUser function when called from user-list component", () => {
    
    const deleteUserSpy = sinon.spy(Index.prototype, "deleteUser");

    const component = mount(<Index />);
    component.setState({
      users: [{
        "id": 1,
        "first_name": "George",
        "last_name": "Bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
      }]
    });
    
    component.find('.user__delete').first().simulate('click');
    expect(deleteUserSpy.calledOnce).to.be.true;
  });
});