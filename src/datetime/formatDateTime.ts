import { isUndefined } from '../isUndefined';

const defaultLocale = 'tr-TR';

export function formatDateTime(date: Date | undefined, undefinedString = '-', locale: string = defaultLocale): string {
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
