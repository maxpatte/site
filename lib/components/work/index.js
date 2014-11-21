'use strict';
/*!
 * Work
 */

/**
 * Module Dependencies
 */
var work,
    h = require('virtual-dom/h'),
    moment = require('moment'),
    paginator = require('../paginator');

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
work = function (params) {

  var enquire;

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

  return h('div', { className: 'Work' }, [
    h('img', { className: 'Work-image u-imgResponsive', src: params.imageURL, alt: params.title }),
    h('h4', [
      h('span', { className: 'Work-title' }, params.title + ', '),
      h('span', { className: 'Work-date' }, moment(params.date).format('YYYY') + ', '),
      h('span', { className: 'Work-medium' }, params.medium)
    ]),
    enquire,
    paginator(params)
  ]);

};

/**
 * Module Exports
 */
exports = module.exports = work;