import { isDefined } from '.';

describe('isDefined', () => {
  test('returns false when the value is not defined', () => {
    expect(isDefined(undefined)).toBeFalsy();
  });

  test('returns true when the value is Defined', () => {
    expect(isDefined({})).toBeTruthy();
    expect(isDefined(123)).toBeTruthy();
    expect(isDefined('')).toBeTruthy();
    expect(isDefined(null)).toBeTruthy();
  });
});
