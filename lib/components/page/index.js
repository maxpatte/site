'use strict';
/*!
 * Page
 */

/**
 * Module Dependencies
 */
var page,
    h = require('virtual-dom/h'),
    html = require('html-virtualize');

page = function (params) {
  return h('div', { className: 'Page' }, [
    html(params.content)
  ]);
};

/**
 * Module Exports
 */
exports = module.exports = page;