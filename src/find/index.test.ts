import { find } from '.';

describe('find', () => {
  type Item = {
    id: number;
    name: string;
  };

  const items: Item[] = [
    {
      id: 123,
      name: 'item1',
    },
    {
      id: 456,
      name: 'item2',
    },
  ];

  test('should return object that matches to predicate', () => {
    expect(find(items, x => x.id === 123).name).toBe('item1');
  });
});
