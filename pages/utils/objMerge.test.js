import { objMerge } from './objMerge';

describe('objMerge function', () => {
  it("should merge multiple objects into one", () => {
    expect(objMerge([{a: 1, b:2}, {c:3}])).to.eql({a: 1, b:2, c: 3});
  });
});
