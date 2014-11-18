'use strict';
/*!
 * gallery
 */

/**
 * Module Dependencies
 */
var gallery,
    h = require('virtual-dom/h');

function thumbnail (work) {
  return h('div', [
    h('a', { href: work.id, title: work.title }, [
      h('img', { src: work.thumbnailURL, alt: work.title })
    ])
  ]);
};

gallery = function (state) {
  return h('div', state.works.map(thumbnail));
};

/**
 * Module Exports
 */
exports = module.exports = gallery;