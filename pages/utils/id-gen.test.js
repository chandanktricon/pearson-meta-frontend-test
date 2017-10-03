import { getId } from './id-gen';

describe('getId function', () => {
  it("should generate unique id everytime it's called", () => {
    let fetchedIds = [];
    let tempId;

    do {
      tempId = getId();
      fetchedIds.push(tempId);
    }
    while (!tempId && tempId !== 0);

    expect(new Set(fetchedIds).size === fetchedIds.length).to.eql(true);
  });

  it('should return null when id stock is over', () => {
    while (getId() !== null){};

    expect(getId()).to.eql(null);
  });
});
