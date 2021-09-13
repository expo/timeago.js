/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import en_US from './lang/en_US';

import { register } from './register';

register('en_US', en_US);

export { format } from './format';
export { render, cancel } from './realtime';
export { register };
export * from './interface';
