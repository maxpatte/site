'use strict';
/*!
 * Contact
 */

/**
 * Module Dependencies
 */
var contact,
    h = require('virtual-dom/h');

contact = function () {
  return h('div', [
    h('h1', 'Contact'),
    h('div', [
      h('p', { className: 'address' }, [
        h('strong', 'Email:'),
        ' ',
        h('span', 'info@example.com'),
        h('br'),
        h('strong', 'Phone:'),
        ' ',
        h('span', '+XX (X)XXX XXX XXXX'),
        h('br'),
        h('strong', 'Studio:'),
        ' ',
        h('span', 'XX Lorem ipsum dolor, Sit Amet,'),
        h('br'),
        h('span', 'Lorem ipsum dolor, XXXX, Sit Amet.'),
      ])
    ])
  ]);
};

/**
 * Module Exports
 */
exports = module.exports = contact;