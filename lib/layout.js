'use strict';
/*!
 * Layout
 */

/**
 * Module Dependencies
 */
var layout,
    h = require('virtual-dom/h');

layout = function (content) {
  var wrapped;

  wrapped = h('html', { lang: 'en' }, [
    h('head', [
      h('meta', { charset: 'utf-8' }),
      h('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' }),
      h('title', 'Max Patté'),
      h('meta', {  name: 'description', content: '' }),
      h('meta', {  name: 'viewport', content: 'width=device-width, initial-scale=1' }),
      h('link', { rel: 'stylesheet', href: '/style.css' }),
    ]),
    h('body', [
      content,
      h('script', { src: '/index.js ' })
    ])
  ]);

  return wrapped;
};

/**
 * Module Exports
 */
exports = module.exports = layout;