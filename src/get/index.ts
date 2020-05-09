import { isUndefined } from '../isUndefined';

type PropertyPath = string | ReadonlyArray<string>;

export function get<T>(object: T, path: PropertyPath, defaultValue?: any): any {
  if (isUndefined(path)) {
    return undefined;
  }
  const pathArray = Array.isArray(path) ? path : (path as string).split(/[,[\].]/g).filter(Boolean);

  return pathArray.reduce((prevObj, key) => prevObj && prevObj[key], object) || defaultValue;
}
