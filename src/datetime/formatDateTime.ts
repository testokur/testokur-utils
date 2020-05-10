import { isUndefined } from '../isUndefined';

const defaultLocale = 'tr';

export function formatDateTime(date: Date | undefined, undefinedString: string = '-', locale: string = defaultLocale) {
  if (isUndefined(date)) {
    return undefinedString;
  }

  return new Intl.DateTimeFormat(locale, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).format(date);
}
