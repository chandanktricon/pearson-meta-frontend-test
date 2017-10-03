import { shallow } from "enzyme";
import User from "./user";

describe("User Component", () => {
  it("should render User as a profile card and handle onClick", () => {
    const onClickSpy = sinon.spy();
    const component = shallow(
      <User
        user={sinon.stub()}
        userId={14}
        deleteUser={onClickSpy}
      />
    );
    
    expect(component.exists()).eql(true);
    component.find(".user__delete").simulate("click");
    expect(onClickSpy.calledOnce).to.eql(true);
  });
});
