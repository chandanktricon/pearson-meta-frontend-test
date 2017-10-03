import { capFirstLetter } from './stringer';

describe('capFirstLetter function', () => {
  it("should capitalize first letter of every word in a phrase", () => {
    expect(capFirstLetter('something something')).to.eql('Something Something');
  });

  it('should make every letter other than first letter of word, to small case', () => {
    expect(capFirstLetter('whaTEVER')).to.eql('Whatever');
  });

  it('should trim multiple whitespaces before, in-between and after words', () => {
    expect(capFirstLetter('   no   extra    space    ')).to.eql('No Extra Space');
  });
});
