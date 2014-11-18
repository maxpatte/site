'use strict';
/*!
 * navigation
 */

/**
 * Module Dependencies
 */
var nav,
    h = require('virtual-dom/h');

nav = function (params) {

  var children = params.pages.map(function (page, index, arr) {
    var className;
    if (page === params.page) {
      className = 'active';
    };
    return h('li', { className: className }, [
      h('a', { href: page.id }, page.title)
    ]);
  });

  return h('nav', [
    h('ul', children)
  ]);

};

/**
 * Module Exports
 */
exports = module.exports = nav;