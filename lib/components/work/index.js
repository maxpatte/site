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
    enquire = h('div', { className: 'Work-cta' }, [
      h('span', { className: 'Button Button--cta is-disabled' }, 'Sold')
    ]);
  } else {
    enquire = h('div', { className: 'Work-cta' }, [
      h('a', { className: 'Button Button--cta', href: '#'}, [
        h('span', 'For sale'),
        h('hr'),
        h('span', 'Enquire')
      ])
    ]);
  };

  return h('div', { className: 'Work' }, [
    h('div', { className: 'u-cf' }, [
      h('figure', { className: 'Work-figure' }, [
        h('img', { className: 'Work-image u-imgResponsive', src: params.imageURL, alt: params.title }),
        h('figcaption', { className: 'Work-caption' }, [
          h('h4', { className: 'Work-title' }, [
            params.title + '. ',
            h('span', { className: 'Work-date' }, moment(params.date).format('YYYY')),
          ]),
          h('span', { className: 'Work-medium' }, params.medium),
          h('span', { className: 'Work-dimensions' }, params.dimensions),
          h('span', { className: 'Work-edition' }, params.edition),
          h('span', { className: 'Work-location' }, params.location),
          h('h5', { className: 'Work-price' }, params.price)
        ]),
        enquire
      ])
    ]),
    h('div', { className: 'Work-paginator' }, [
      paginator(params)
    ])
  ]);

};

/**
 * Module Exports
 */
exports = module.exports = work;