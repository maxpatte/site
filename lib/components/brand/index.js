'use strict';
/*!
 * Brand
 */

/**
 * Module Dependencies
 */
var brand,
    h = require('virtual-dom/h');

brand = function () {
  return h('a', { className: 'Brand', href: '/', title: 'Max Patte'}, 'Max Patte')
};

/**
 * Module Exports
 */
exports = module.exports = brand;

