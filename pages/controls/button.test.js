import { shallow } from "enzyme";
import Button from "./button";

describe("Button Control", () => {

  it("should render without any issue", () => {
    const component = shallow(
      <Button 
        className="cls"
      />
    );
    
    expect(component.exists()).to.be.true;
    expect(component.find('button').exists()).to.be.true;
    expect(component.find('button').hasClass('cls')).to.be.true;
  });

  it("should handle click normally", () => {
    const onClickSpy = sinon.spy();
    const component = shallow(
      <Button
        onClick={onClickSpy}
      />
    );

    component.simulate('click');
    expect(onClickSpy.calledOnce).to.be.true;

    component.find('button').simulate('click');
    expect(onClickSpy.calledTwice).to.be.true;
  });
});
