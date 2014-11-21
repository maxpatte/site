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
    h('div', { className: 'Address' }, [
      h('div', { className: 'Address-item u-clearfix' }, [
        h('span', { className: 'Address-item-title' }, 'Email:'),
        h('span', { className: 'Address-item-description' }, 'info@example.com')
      ]),
      h('div', { className: 'Address-item u-clearfix' }, [
        h('span', { className: 'Address-item-title' }, 'Phone:'),
        h('span', { className: 'Address-item-description' }, '+XX (X)XXX XXX XXXX')
      ]),
      h('div', { className: 'Address-item u-clearfix' }, [
        h('span', { className: 'Address-item-title' }, 'Studio:'),
        h('span', { className: 'Address-item-description' }, [
          h('span','XX Lorem ipsum dolor, Sit Amet,'),
          h('br'),
          h('span', 'Lorem ipsum dolor, XXXX, Sit Amet.'),
        ])
      ])
    ])
  ]);
};

/**
 * Module Exports
 */
exports = module.exports = contact;