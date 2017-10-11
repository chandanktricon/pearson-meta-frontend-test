import { shallow } from "enzyme";
import Avatar from "./avatar";

describe("Avatar Control", () => {

  it("should render normally as img tag", () => {
    const component = shallow(<Avatar className="cls" />);

    expect(component.exists()).to.be.true;
    expect(component.hasClass('cls')).to.be.true;
    expect(component.find('img').exists()).to.be.true;
    expect(component.find('img').hasClass('cls')).to.be.true;
  });

  it("img title is by default 'avatar' otherwise is whatever provided in props", () => {
    const componentWithoutTitleProps = shallow(<Avatar />);
    const componentWithTitle = shallow(<Avatar title="new-avatar"/>);

    expect(componentWithoutTitleProps.find('img').props().title).to.eql('avatar');
    expect(componentWithTitle.find('img').props().title).to.eql('new-avatar');
  });

  it("image source should loads properly", () => {
    const component = shallow(
      <Avatar
        src="www.abc.com/profile.png"
      />
    );

    expect(component.find('img').props().src).to.eql('www.abc.com/profile.png');
  });
});
