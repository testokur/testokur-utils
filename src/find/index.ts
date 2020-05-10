export function find<T>(collection: T[], predicate: (value: T, index: number, obj: T[]) => unknown): T {
  return collection.find(predicate) as T;
}
