'use strict';
/*!
 * gallery
 */

/**
 * Module Dependencies
 */
var gallery,
    h = require('virtual-dom/h'),
    link = require('../internal-link'),
    galleryItem = require('../gallery-item');

function item (item) {
  return h('div', { className: 'Gallery-item' }, [
    galleryItem(item)
  ]);
};

/**
 * @param: {Object} params
 *   @param: {Array} children
 *     @param: {String} id
 *     @param: {String} title
 *     @param: {String} thumbnailURL
 */
gallery = function (params) {
  return h('div', { className: 'Gallery' },  params.children.map(item));
};

/**
 * Module Exports
 */
exports = module.exports = gallery;
