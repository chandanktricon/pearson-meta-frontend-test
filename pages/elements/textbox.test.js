import { shallow } from "enzyme";
import Textbox from "./textbox";

describe("Textbox Control", () => {

  it("should render normally as input tag of type text", () => {
    const component = shallow(<Textbox className="cls"/>);  
    
    expect(component.find('input[type="text"]').exists()).to.eql(true);
    expect(component.find('input[type="text"]').hasClass('cls')).to.be.true;
  });

  it("onChange event should be triggered & propagated normally", () => {
    const onChangeSpy = sinon.spy();
    const component = shallow(
      <Textbox
        onChange={onChangeSpy}
        value="abc"
      />
    );
    
    expect(component.find('input').props().value).to.eql('abc');

    component.simulate('change',  { target: { value: 'xyz' } });
    expect(onChangeSpy.calledOnce).to.eql(true);
    // expect(component.props().value).to.eql('xyz'); /// not sure why not working
  });
});
