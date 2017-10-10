import { shallow, mount } from "enzyme";
import Index from "./index";
import UserList from "./components/user-list";
import AddUserForm from "./components/add-user-form";

describe.only("Index", () => {
  afterEach(() => {
    sinon.restore();
  });
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

  it("Should call fetchUsers and get back some data", () => {
    sinon
      .stub(global, "fetch")
      .withArgs("https://reqres.in/api/users?page=2")
      .returns(
        Promise.resolve({
          json: () =>
            Promise.resolve({
              data: [
                {
                  id: 1,
                  first_name: "George",
                  last_name: "Bluth",
                  avatar:
                    "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
                },
                {
                  id: 2,
                  first_name: "Janet",
                  last_name: "Weaver",
                  avatar:
                    "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
                },
                {
                  id: 3,
                  first_name: "Emma",
                  last_name: "Wong",
                  avatar:
                    "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
                }
              ]
            })
        })
      );

    const componentDidMountSpy = sinon.spy(
      Index.prototype,
      "componentDidMount"
    );
    const fetchUserSpy = sinon.spy(Index.prototype, "fetchUsers");

    const componentTwo = mount(<Index />);
    expect(componentDidMountSpy.called).to.be.true;
    expect(fetchUserSpy.called).to.be.true;
  });
});