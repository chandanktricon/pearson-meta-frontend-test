import { shallow } from "enzyme";
import Pagination from './pagination';
import Button from '../controls/button';

describe("Pagination component", () => {
  it("should render without any issue", () => {
    const onClickSpy = sinon.spy();
    const component = shallow(
      <Pagination
        currPage={3}
        totalPages={6}
        fetchUsers={onClickSpy}
      />
    );

    expect(component.exists()).to.be.true;
    expect(component.find(Button).exists()).to.be.true;
    
    component.find(Button).first().simulate('click');
    expect(onClickSpy.callCount).to.be.eql(1);
    
    component.find(Button).last().simulate('click');
    expect(onClickSpy.callCount).to.be.eql(2);
  });

  it("should disable previous button when first page is navigated", () => {
    const onClickSpy = sinon.spy();
    let component = shallow(
      <Pagination
        currPage={1}
        totalPages={6}
        fetchUsers={onClickSpy}
      />
    );

    expect(component.find(Button).first().prop('disabled')).to.be.true;
    expect(component.find(Button).last().prop('disabled')).to.be.false;

    component.find(Button).forEach((node, i) => {
      node.simulate('click');
      expect(onClickSpy.callCount).eql(i);
    });
  });

  it("should not disable any button when any page between first and last is navigated", () => {
    const onClickSpy = sinon.spy();
    let component = shallow(
      <Pagination
        currPage={2}
        totalPages={6}
        fetchUsers={onClickSpy}
      />
    );

    expect(component.find(Button).first().prop('disabled')).eql(false);
    expect(component.find(Button).last().prop('disabled')).eql(false);

    component.find(Button).forEach((node, i) => {
      node.simulate('click');
      expect(onClickSpy.callCount).eql(i + 1);
    });
  });

  it("should disable next button when last page is navigated", () => {
    const onClickSpy = sinon.spy();
    let component = shallow(
      <Pagination
        currPage={6}
        totalPages={6}
        fetchUsers={onClickSpy}
      />
    );

    expect(component.find(Button).first().prop('disabled')).eql(false);
    expect(component.find(Button).last().prop('disabled')).eql(true);

    component.find(Button).forEach((node, i) => {
      node.simulate('click');

      if (i !== 7)
        expect(onClickSpy.callCount).eql(i + 1);
      else
        expect(onClickSpy.callCount).eql(i);
    });
  });
});
