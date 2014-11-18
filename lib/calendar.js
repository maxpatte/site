'use strict';
/*!
 * Calendar
 */

/**
 * Module Dependencies
 */
var calendar,
    h = require('virtual-dom/h');

calendar = function () {
  return h('div', [
    h('h1', 'Calendar')
  ]);
};

/**
 * Module Exports
 */
exports = module.exports = calendar;