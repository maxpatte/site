'use strict';
/*!
 * App View
 */

/**
 * Module Dependencies
 */
var app,
    h = require('virtual-dom/h'),
    brand = require('./components/brand'),
    nav = require('./components/navigation'),
    page = require('./components/page'),
    gallery = require('./components/gallery'),
    work = require('./components/work'),
    press = require('./components/press'),
    templates = {
      'page': page,
      'gallery': gallery,
      'work': work,
      'press': press
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


function byOrder (a, b) {
  return a.order - b.order;
};

function byDate (a, b) {
  return b.date - a.date;
};

function byCategory (category) {
  return function (page) {
    return page.category === category;
  };
};

function byProperty (property) {
  return function (page) {
    return page[property];
  };
};

app = function (state) {

  var content,
      navigationPages = state.pages.filter(byProperty('showInNavigation')).sort(byOrder),
      navigation = {
        page: state.page,
        pages: navigationPages
      };

  if (state.page.showCategory) {
    state.page.children = state.pages.filter(byCategory(state.page.showCategory)).sort(byDate).map(addNavigation);
  };

  content = templates[state.page.layout](state.page);

  return h('div', { className: 'App' }, [
    h('header', { className: 'Header u-cf' }, [
      brand(),
      nav(navigation)
    ]),
    content
  ]);

};

/**
 * Module Exports
 */
exports = module.exports = app;