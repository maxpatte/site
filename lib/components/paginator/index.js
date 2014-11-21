'use strict';
/*!
 * Work
 */

/**
 * Module Dependencies
 */
var paginator,
    h = require('virtual-dom/h');

/**
 * @param: {Object} params
 *   @param: {Number} index
 *   @param: {Number} total *** change name
 *   @param: {Object || undefined} next
 *   @param: {Object || undefined} previous
 */
paginator = function (params) {

  var previous,
      next;

  if (params.next) {
    next = h('a', { href: params.next.id, title: params.next.title }, '>');
  } else {
    next = h('span', { className: 'is-disabled' }, '>');
  };

  if (params.previous) {
    previous = h('a', { href: params.previous.id, title: params.previous.title }, '<');
  } else {
    previous = h('span', { className: 'is-disabled' }, '<');
  };

  previous.properties.className += ' Paginator-previous';
  next.properties.className += ' Paginator-next';

  return h('nav', { className: 'Paginator' }, [
    previous,
    ' ',
    h('span', { className: 'Paginator-count' }, params.index + ' of ' + params.total),
    ' ',
    next
  ]);

};

/**
 * Module Exports
 */
exports = module.exports = paginator;