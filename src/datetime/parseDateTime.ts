function isValidDate(d: Date): boolean {
  return d instanceof Date && !isNaN(d.getTime());
}

// Only works for  Turkish datetime format
export function parseDateTime(input: string): Date {
  const parts = input
    .replace(/:| /g, '.')
    .split('.')
    .map(x => Number.parseInt(x));

  const date = new Date(parts[2], parts[1] - 1, parts[0], parts[3], parts[4], parts[5]);

  if (!isValidDate(date)) {
    throw Error(`Invalid datetime format : ${input}`);
  }

  return date;
}
