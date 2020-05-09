import { isNil } from '../isNil';

const hasOwnProperty = Object.prototype.hasOwnProperty;

export function isEmpty(value: any): boolean {
  if (isNil(value) || Number.isNaN(value)) {
    return true;
  }

  for (const key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}
