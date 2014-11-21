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
  return h('div', { className: 'Gallery-item' }, [
    h('a', { href: work.id, title: work.title }, [
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
  return h('div', { className: 'Gallery u-clearfix' }, params.works.map(thumbnail));
};

/**
 * Module Exports
 */
exports = module.exports = gallery;