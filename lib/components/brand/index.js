'use strict';
/*!
 * Brand
 */

/**
 * Module Dependencies
 */
var brand,
    h = require('virtual-dom/h'),
    link = require('../internal-link');

brand = function () {
  return h('div', [
    link({ className: 'Brand', href: '/', title: 'Max Patté'}, [
      h('span', null, 'Max Patté')
    ])
  ])
};

/**
 * Module Exports
 */
exports = module.exports = brand;

