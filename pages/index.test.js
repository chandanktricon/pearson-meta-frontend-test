import { shallow } from "enzyme";
import Index from "./index";
import UserList from './components/user-list'
import AddUserForm from './components/add-user-form';


describe("Index", () => {
  afterEach(() => { sinon.restore(); });
  const component = shallow(<Index />);

  it("Should render without any issue", () => {
    expect(component.hasClass("root")).to.eql(true);
  });

  it("Should have Pearson User Management header", () => {
    expect(component.find("h1").text()).to.eql("Pearson User Management");
  });

  it("Should have UserList component", () => {
    expect(component.find(UserList).exists()).to.eql(true);
  });

  it("Should have AddUserForm component", () => {
    expect(component.find(AddUserForm).exists()).to.eql(true);
  });

});
