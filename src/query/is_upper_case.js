import toString from '../utils/string/to_string'
import undefinedDefault from '../utils/undefined/undefined_default';
import isAlpha from './is_alpha';

/**
 * Checks if `string` is upper case.
 *
 * @function isUpperCase
 * @static
 * @memberOf Query
 * @param {string} [string=''] The string to verify.
 * @return {boolean} Return `true` if `string` is upper case or `false` otherwise.
 * @example
 * v.isUpperCase('ACDC');
 * // => true
 *
 * v.isUpperCase('Morning');
 * // => false
 */
export default function(string) {
  string = undefinedDefault(string, '');
  var valueString = toString(string);
  if (valueString === null) {
    return false;
  }
  return isAlpha(valueString) && valueString.toUpperCase() === valueString;
}