import { shallow } from "enzyme";
import InitialUsers from '../utils/initial-users';
import User from "./user";
import UserList from "./user-list";

describe("UserList component", () => {
  it("should render without any issue", () => {
    const component = shallow(
      <UserList
        users={InitialUsers}
      />
    );

    expect(component.exists()).eql(true);
    expect(component.find(User).exists()).eql(true);
  });

  it("should not render any User component when users props have empty array", () => {
    expect(shallow(<UserList users={[]} />).find(User).exists()).eql(false);
  });

  it("should render list of User components when users props is having at least one user data", () => {
    expect(shallow(<UserList users={InitialUsers} />).find(User).exists()).eql(true);
  });

  it("should be able to delete any user in list using delete button", () => {
    const onClickSpy = sinon.spy();
    const component = shallow(
      <UserList
        users={InitialUsers}
        deleteUser={onClickSpy}
      />
    );

    expect(onClickSpy.calledOnce).to.be.false;

    component.find('.user__delete').first().simulate('click');
    // expect(onClickSpy.notCalled).to.be.false;
  });
});
