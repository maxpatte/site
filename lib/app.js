'use strict';
/*!
 * App View
 */

/**
 * Module Dependencies
 */
var app,
    h = require('virtual-dom/h'),
    nav = require('./nav'),
    home = require('./home'),
    about = require('./about'),
    gallery = require('./gallery'),
    galleryItem = require('./gallery-item'),
    calendar = require('./calendar'),
    press = require('./press'),
    contact = require('./contact');

app = function (state) {

  var content,
      navigationPages = state.pages.filter(function (page) {
        return page.showInNavigation;
      }),
      navigation = {
        page: state.page,
        pages: navigationPages
      };

  // we could replace this with a router?
  if (state.page.id === '/') {
    content = home(state.page);
  } else if (state.page.id === '/about') {
    content = about(state.page);
  } else if (state.page.id === '/sculpture' ||
             state.page.id === '/lightworks' ||
             state.page.id === '/paintings' ) {
    content = gallery(state.page);
  } else if (state.page.id.substr(0, 10) === '/sculpture' ||
             state.page.id.substr(0, 11) === '/lightworks' ||
             state.page.id.substr(0, 10) === '/paintings') {
    content = galleryItem(state.page);
  } else if (state.page.id === '/calendar') {
    content = calendar(state.page);
  } else if (state.page.id === '/press') {
    content = press(state.page);
  } else if (state.page.id === '/contact') {
    content = contact(state.page);
  };

  return h('div', [
    h('a', { className: 'title', href: '/', title: 'Max Patte'}, 'Max Patte'),
    nav(navigation),
    content
  ]);

};

/**
 * Module Exports
 */
exports = module.exports = app;