import { EllipsisPipe } from './ellipsis.pipe';

describe('EllipsisPipe', () => {
  it('create an instance', () => {
    const pipe = new EllipsisPipe();
    expect(pipe).toBeTruthy();
  });


  // positive test spec
  it(`transforms 'random' to 'random...'`, () => {
    const pipe = new EllipsisPipe();
    expect(pipe.transform('random')).toBe('random...');
  });

  // negative test spec
  it(`transforms '' to '...'`, () => {
    const pipe = new EllipsisPipe();
    expect(pipe.transform('')).toBe('');
  });

});
