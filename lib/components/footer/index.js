'use strict';
/*!
 * Footer
 */

/**
 * Module Dependencies
 */
var footer,
    h = require('virtual-dom/h'),
    link = require('../internal-link');

footer = function () {
  return h('div', { className: 'Footer' }, [
    h('a', { className: 'Footer-email', href: 'mailto:info@maxpatte.com', title: 'Contact'}, [
      h('span', { className: 'u-hiddenVisually' }, 'Email')
    ]),
    ' ',
    h('a', { className: 'Footer-facebook', href: 'https://www.facebook.com/maxpatteartist', title: 'Facebook'}, [
      h('span', { className: 'u-hiddenVisually' }, 'Facebook')
    ]),
    ' ',
    h('a', { className: 'Footer-instagram', href: 'https://instagram.com/maxpatteart/', title: 'Instagram'}, [
      h('span', { className: 'u-hiddenVisually' }, 'Instagram')
    ])
  ])
};

/**
 * Module Exports
 */
exports = module.exports = footer;

