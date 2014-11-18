'use strict';
/*!
 * Pages
 */

/**
 * Module Dependencies
 */
var pages,
    moment = require('moment'),
    sculpture = require('./sculpture'),
    lightworks = require('./lightworks'),
    paintings = require('./paintings'),
    press = require('./press');

function convertDate (page) {
  page.date = moment(page.date, 'YYYY-MM-DD').valueOf();
  return page;
};

function byDate (a, b) {
  return a.date - b.date;
};

function prependId (id, page) {
  page.id = id + page.id;
  return page;
};

function addNavigation (page, i, arr) {
  page.index = i + 1;
  if (i > 0) {
    page.previous = arr[i-1];
  };
  if (i < arr.length - 1) {
    page.next = arr[i+1];
  };
  page.total = arr.length;
  return page;
};

function buildGalleryItems (id, coll) {
  return coll.map(convertDate)
    .sort(byDate)
    .map(prependId.bind(null, id))
    .map(addNavigation);
};

function buildPressItems (id, coll) {
  return coll.map(convertDate)
    .sort(byDate)
    .map(prependId.bind(null, id));
};

sculpture = buildGalleryItems('/sculpture', sculpture);
lightworks = buildGalleryItems('/lightworks', lightworks);
paintings = buildGalleryItems('/paintings', paintings);

press = buildPressItems('/press', press);

pages = [
  {
    id: '/',
    title: 'Max Patte'
  },
  {
    id: '/about',
    title: 'About',
    showInNavigation: true
  },
  {
    id: '/sculpture',
    title: 'Sculpture',
    showInNavigation: true,
    works: sculpture
  },
  {
    id: '/lightworks',
    title: 'Lightworks',
    showInNavigation: true,
    works: lightworks
  },
  {
    id: '/paintings',
    title: 'Paintings',
    showInNavigation: true,
    works: paintings
  },
  {
    id: '/calendar',
    title: 'Calendar',
    showInNavigation: true
  },
  {
    id: '/press',
    title: 'Press',
    showInNavigation: true,
    press: press
  },
  {
    id: '/contact',
    title: 'Contact',
    showInNavigation: true
  }
];

pages = pages.concat(sculpture, lightworks, paintings, press);

/**
 * Module Exports
 */
exports = module.exports = pages;