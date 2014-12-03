'use strict';
/*!
 * press
 */

/**
 * Module Dependencies
 */
var press,
    h = require('virtual-dom/h');

function thumbnail (item) {
  return h('div', { className: 'Press-item' }, [
    h('a', { className: 'Press-item-link', href: item.href, title: item.title }, [
      h('span', { className: 'Press-item-title' }, item.title),
      h('img', { className: 'Press-item-thumbnail', src: item.thumbnailURL, alt: item.title })
    ])
  ]);
};

/**
 * @param: {Object} params
 *   @param: {Array} press
 *     @param: {String} title
 *     @param: {String} href
 *     @param: {String} thumbnailURL
 */
press = function (params) {

  return h('div', { className: 'Press u-cf' }, params.children.map(thumbnail));

};

/**
 * Module Exports
 */
exports = module.exports = press;