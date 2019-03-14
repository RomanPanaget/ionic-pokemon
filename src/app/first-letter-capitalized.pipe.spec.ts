import { FirstLetterCapitalizedPipe } from './first-letter-capitalized.pipe';

describe('FirstLetterCapitalizedPipe', () => {
  it('create an instance', () => {
    const pipe = new FirstLetterCapitalizedPipe();
    expect(pipe).toBeTruthy();
  });
});
