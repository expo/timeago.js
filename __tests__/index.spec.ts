/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { format, render, cancel, register } from '../src/';
import { getLocale } from '../src/register';

describe('timeago.js core', () => {
  test('export', () => {
    expect(format).toBeInstanceOf(Function);
    expect(render).toBeInstanceOf(Function);
    expect(cancel).toBeInstanceOf(Function);
    expect(register).toBeInstanceOf(Function);
  });

  describe('built-in locales', () => {
    test('getLocale', () => {
      expect(getLocale('en_US')).toBeDefined();
    });

    test('Locales en_US', () => {
      expect(getLocale('en_US')(1, 0)).toEqual(['just now', 'right now']);

      expect(getLocale('en_US')(1, 1)).toEqual(['1 second ago', 'in 1 second']);
      expect(getLocale('en_US')(10, 1)).toEqual(['10 seconds ago', 'in 10 seconds']);

      expect(getLocale('en_US')(1, 2)).toEqual(['1 minute ago', 'in 1 minute']);
      expect(getLocale('en_US')(1, 3)).toEqual(['1 minute ago', 'in 1 minute']);

      expect(getLocale('en_US')(1, 4)).toEqual(['1 hour ago', 'in 1 hour']);
      expect(getLocale('en_US')(1, 5)).toEqual(['1 hour ago', 'in 1 hour']);

      expect(getLocale('en_US')(1, 6)).toEqual(['1 day ago', 'in 1 day']);
      expect(getLocale('en_US')(1, 7)).toEqual(['1 day ago', 'in 1 day']);

      expect(getLocale('en_US')(1, 8)).toEqual(['1 week ago', 'in 1 week']);
      expect(getLocale('en_US')(1, 9)).toEqual(['1 week ago', 'in 1 week']);

      expect(getLocale('en_US')(1, 10)).toEqual(['1 month ago', 'in 1 month']);
      expect(getLocale('en_US')(1, 11)).toEqual(['1 month ago', 'in 1 month']);

      expect(getLocale('en_US')(1, 12)).toEqual(['1 year ago', 'in 1 year']);
      expect(getLocale('en_US')(1, 13)).toEqual(['1 year ago', 'in 1 year']);

      expect(getLocale('en_US')(10, 13)).toEqual(['10 years ago', 'in 10 years']);
    });
  });
});
