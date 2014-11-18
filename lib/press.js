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
  return h('div', [
    h('a', { href: item.href, title: item.title }, [
      h('span', item.title),
      h('img', { src: item.thumbnailURL, alt: item.title })
    ])
  ]);
};

press = function (state) {

  return h('div', state.press.map(thumbnail));

};

/**
 * Module Exports
 */
exports = module.exports = press;