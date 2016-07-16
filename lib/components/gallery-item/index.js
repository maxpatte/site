'use strict';
/*!
 * GalleryItem
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
      meta;

  if (params.sold) {
    enquire = h('div', { className: 'GalleryItem-cta' }, [
      h('span', { className: 'Button Button--cta is-disabled' }, 'Sold')
    ]);
  } else {
    enquire = h('div', { className: 'GalleryItem-cta' }, [
      h('a', { className: 'Button Button--cta', href: 'mailto:info@maxpatte.com?subject=' + encodeURIComponent('Enquiry about ' + params.title)}, [
        h('span', 'For sale'),
        h('hr'),
        h('span', 'Enquire')
      ])
    ]);
  };

  meta = [
    h('h4', { className: 'GalleryItem-title' }, [
      params.title + '. ',
      h('span', { className: 'GalleryItem-date' }, moment(params.date).format('YYYY')),
    ]),
    h('span', { className: 'GalleryItem-medium' }, params.medium)
  ];

  if (params.dimensions) {
    meta.push(h('span', { className: 'GalleryItem-dimensions' }, params.dimensions));
  };

  if (params.edition) {
    meta.push(h('span', { className: 'GalleryItem-edition' }, params.edition));
  };

  if (params.location) {
    meta.push(h('span', { className: 'GalleryItem-location' }, params.location));
  };

  if (params.price && !params.sold) {
    meta.push(h('h5', { className: 'GalleryItem-price js-revealIfHash u-hidden' }, params.price));
  };

  return h('div', { className: 'GalleryItem' }, [
    h('div', { className: 'u-cf' }, [
      h('figure', { className: 'GalleryItem-figure' }, [
        h('img', { className: 'GalleryItem-image u-imgResponsive', src: params.imageURL, alt: params.title }),
        h('figcaption', { className: 'GalleryItem-caption' }, meta),
        enquire
      ])
    ])
  ]);

};

/**
 * Module Exports
 */
exports = module.exports = galleryItem;
