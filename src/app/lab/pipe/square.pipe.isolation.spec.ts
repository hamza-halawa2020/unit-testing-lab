import { SquarePipeForLab } from './square.pipe';

describe('1-square pipe (isolation) testing:', () => {
  let pipe: SquarePipeForLab;

  beforeEach(() => {
    pipe = new SquarePipeForLab();
  });

  it('should return 16 when passing 4', () => {
    expect(pipe.transform(4)).toBe(16);
  });

  it("should return 'Not a number' when passing wrong parameter", () => {
    expect(pipe.transform('any string')).toBe('Not a number');
  });
});
