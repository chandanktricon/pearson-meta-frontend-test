import { shallow } from "enzyme";
import Label from "./label";

describe("Label Control", () => {
  it("should render normally as html label tag", () => {
    const component = shallow(
      <Label className="cls">Some Text</Label>
    );
    
    expect(component.exists()).to.be.true;
    expect(component.hasClass('cls')).to.be.true;
    expect(component.text()).to.eql('Some Text');
    expect(component.find('label').exists()).to.be.true;
    expect(component.find('label').hasClass('cls')).to.be.true;
    expect(component.find('label').text()).to.eql('Some Text');
  });
});
