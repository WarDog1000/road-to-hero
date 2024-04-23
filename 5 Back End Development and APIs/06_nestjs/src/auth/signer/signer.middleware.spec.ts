import { SignerMiddleware } from './signer.middleware';

describe('SignerMiddleware', () => {
  it('should be defined', () => {
    expect(new SignerMiddleware()).toBeDefined();
  });
});
