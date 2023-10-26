import { StrengthPipe } from './strength.pipe';

describe('Testing StrengthPipe', () => {
    //matchers
  let pipe: StrengthPipe;
  beforeEach(() => {
    pipe = new StrengthPipe();
  });
  //test case
  //test if passing number less than 10 return number (weak)
  it('test if passing number less than 10 return number (weak)', () => {
    expect(pipe.transform(9)).toBe('9 (weak)');
  });
  //test if passing number between 10 and 20 return number (strong)
  it('test if passing number between 10 and 20 return number (strong)', () => {
    expect(pipe.transform(15)).toBe('15 (strong)');
  });
  //test if passing number greater than 20 return number (unbelievable)
  it('test if passing number greater than 20 return number (unbelievable)', () => {
    expect(pipe.transform(22)).toBe('22 (unbelievable)');
  });
});
