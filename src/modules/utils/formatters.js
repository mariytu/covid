import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { CURRENCY_DOTS } from '../../config/settings/regexes'

/**
 * To decorate the given value by the date format pattern.
 */
export const formatDate = (value, pattern = 'dd/MM/yyyy HH:mm') => {
  return format(new Date(value), pattern, { locale: es })
}

/**
 * To decorate the given value to a numeric format with thousands separator.
 */
export const formatNumeric = value => {
  return value.toString().replace(CURRENCY_DOTS, '$1.')
}
