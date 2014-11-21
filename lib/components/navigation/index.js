'use strict';
/*!
 * Navigation
 */

/**
 * Module Dependencies
 */
var navigation,
    h = require('virtual-dom/h');

/**
 * @param: {Object} params
 *   @param: {Object} page
 *     @param: {String} id
 *     @param: {String} title
 *   @param: {Array} pages
 *     @param: {String} id
 *     @param: {String} title
 */
navigation = function (params) {

  var children = params.pages.map(function (page, index, arr) {
    var className = 'Navigation-item',
        innerHTML;
    if (page.id === params.page.id) {
      innerHTML = h('span', { className: 'Navigation-link is-active', href: page.id }, page.title);
    } else {
      innerHTML = h('a', { className: 'Navigation-link', href: page.id }, page.title);
    };
    if (params.page.id.indexOf(page.id) === 0) {
      innerHTML.properties.className += ' is-active';
    };
    return h('li', { className: className }, [
      innerHTML
    ]);
  });

  return h('ul', { className: 'Navigation' }, children);

};

/**
 * Module Exports
 */
exports = module.exports = navigation;