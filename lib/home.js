'use strict';
/*!
 * Home
 */

/**
 * Module Dependencies
 */
var home,
    h = require('virtual-dom/h');

home = function (params) {
  return h('img', { className: 'u-imgResponsive', src: '/images/placeholder-960x540.jpg', alt: params.title });
};

/**
 * Module Exports
 */
exports = module.exports = home;