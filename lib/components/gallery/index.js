'use strict';
/*!
 * gallery
 */

/**
 * Module Dependencies
 */
var gallery,
    h = require('virtual-dom/h'),
    link = require('../internal-link');

function thumbnail (work) {
  return h('div', { className: 'Gallery-item' }, [
    link({ href: work.id, title: work.title }, [
      h('img', { src: work.thumbnailURL, alt: work.title })
    ])
  ]);
};

/**
 * @param: {Object} params
 *   @param: {Array} works
 *     @param: {String} id
 *     @param: {String} title
 *     @param: {String} thumbnailURL
 */
gallery = function (params) {
  return h('div', { className: 'Gallery u-cf' },  params.children.map(thumbnail));
};

/**
 * Module Exports
 */
exports = module.exports = gallery;