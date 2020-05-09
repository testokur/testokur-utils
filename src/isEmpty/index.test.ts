import { isEmpty } from '.';

describe('isEmpty', () => {
  test('returns true when the value is null or undefined  or NaN or number', () => {
    expect(isEmpty(null)).toBeTruthy();
    expect(isEmpty(NaN)).toBeTruthy();
    expect(isEmpty(undefined)).toBeTruthy();
    expect(isEmpty(true)).toBeTruthy();
    expect(isEmpty(1)).toBeTruthy();
    expect(isEmpty('')).toBeTruthy();
  });

  test('returns false when array is not empty', () => {
    expect(isEmpty([1, 2, 3])).toBeFalsy();
  });

  test('returns false when object is not empty', () => {
    expect(isEmpty({ a: 1 })).toBeFalsy();
    expect(isEmpty('string')).toBeFalsy();
  });
});
