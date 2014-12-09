'use strict';
/*!
 * Client
 */

/**
 * Module Dependencies
 */

var ready = require('domready'),
    elementClass = require('element-class'),
    window = global.window;

function init () {
  window.addEventListener('hashchange', revealIfHash);
  window.addEventListener('hashchange', retainHash);
  revealIfHash();
  retainHash();
};

function revealIfHash () {
  var hash = window.location.hash,
      elements,
      i;
  if (hash) {
    // remove u-hidden class from js-revealIfHash elements
    elements = document.querySelectorAll('.js-revealIfHash');
    for (i = 0; i < elements.length; i += 1) {
      elementClass(elements[i]).remove('u-hidden');
    };
  };
};

function retainHash () {
  var elements = document.querySelectorAll('.js-internalLink'),
      i;
  for (i = 0; i < elements.length; i += 1) {
    if (window.location.hash && elements[i].href.indexOf('#') === -1) {
      elements[i].href += window.location.hash;
    };
  };
};

ready(init);