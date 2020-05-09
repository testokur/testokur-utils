import get from '.';

describe('get', () => {
  const simpleObject = { a: { b: 2 } };
  const complexObject = { a: [{ b: { c: 3 } }] };
  const stats = {
    notificationStats: {
      totalSmsCreditsAll: 100,
    },
  };

  test('should get the value at path of object', () => {
    expect(get(simpleObject, 'a.b')).toBe(2);
    expect(get(complexObject, 'a[0].b.c')).toBe(3);
    expect(get(complexObject, ['a', '0', 'b', 'c'])).toBe(3);
    expect(get(simpleObject, 'a.b.c', 'default')).toBe('default');
    expect(get(complexObject, 'a.b.c', 'default')).toBe('default');
    expect(get(stats, 'notificationStats.totalSmsCreditsAll')).toBe(100);
  });
});
