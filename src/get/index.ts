type PropertyName = string | number | symbol;
type Many<T> = T | ReadonlyArray<T>;
type PropertyPath = Many<PropertyName>;

function get(object: any, path: PropertyPath, defaultValue?: any): any {
  if (!path) {
    return undefined;
  }
  const pathArray = Array.isArray(path) ? path : (path as string).split(/[,[\].]/g).filter(Boolean);

  return pathArray.reduce((prevObj, key) => prevObj && prevObj[key], object) || defaultValue;
}

export default get;
