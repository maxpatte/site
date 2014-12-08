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
  return h('div', [
    h('a', { className: 'Brand Brand--color', href: '/', title: 'Max Patté'}, [
      h('span', { className: 'Brand-1' }, 'M'),
      h('span', { className: 'Brand-2' }, 'a'),
      h('span', { className: 'Brand-3' }, 'x'),
      ' ',
      h('span', { className: 'Brand-4' }, 'P'),
      h('span', { className: 'Brand-5' }, 'a'),
      h('span', { className: 'Brand-6' }, 't'),
      h('span', { className: 'Brand-7' }, 't'),
      h('span', { className: 'Brand-8' }, 'é')
    ])
  ])
};

/**
 * Module Exports
 */
exports = module.exports = brand;

