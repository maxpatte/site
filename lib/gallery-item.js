'use strict';
/*!
 * Gallery Item
 */

/**
 * Module Dependencies
 */
var galleryItem,
    h = require('virtual-dom/h'),
    moment = require('moment');

/**
 * @param: {Object} params
 *   @param: {String} title
 *   @param: {String} date
 *   @param: {String} medium
 *   @param: {Boolean} sold
 *   @param: {Number} index
 *   @param: {Number} total *** change name
 *   @param: {Object || undefined} next
 *   @param: {Object || undefined} previous
 */
galleryItem = function (params) {

  var enquire,
      previous,
      next;

  if (params.sold) {
    enquire = h('div', [
      h('span', 'Sold')
    ]);
  } else {
    enquire = h('div', [
      h('span', 'For sale'),
      h('span', 'Enquire')
    ]);
  };

  if (params.next) {
    next = h('a', { href: params.next.id, title: params.next.title }, '>');
  } else {
    next = h('span', '>');
  };

  if (params.previous) {
    previous = h('a', { href: params.previous.id, title: params.previous.title }, '<');
  } else {
    previous = h('span', '<');
  };

  return h('div', [
    h('img', { src: params.imageURL, alt: params.title }),
    h('div', [
      h('h1', params.title),
      h('span', ', ' + moment(params.date).format('YYYY')),
      h('span', ', ' + params.medium)
    ]),
    enquire,
    h('nav', [
      previous,
      h('span', params.index + ' of ' + params.total),
      next
    ])
  ]);

};

/**
 * Module Exports
 */
exports = module.exports = galleryItem;