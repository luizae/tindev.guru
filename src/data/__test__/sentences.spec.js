import { sentences } from '../sentences';

describe('sentences', () => {
  it('should be an array', () => {
    expect(Array.isArray(sentences)).toBeTruthy();
  });

  it('should have at least 1 item', () => {
    expect(sentences.length).toBeGreaterThan(0);
  });

  sentences.forEach(sentence => {
    it(`${sentence} should be string and not empty`, () => {
      expect(typeof sentence).toEqual('string');
      expect(sentence.length).toBeGreaterThan(0);
    });
  });
});
