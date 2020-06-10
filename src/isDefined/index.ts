export function isDefined(value: any): value is undefined {
  return typeof value !== 'undefined';
}
