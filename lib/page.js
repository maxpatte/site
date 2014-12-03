'use strict';
/*!
 * Page
 */

/**
 * Module Dependencies
 */
var page,
    html = require('html-virtualize');

page = function (params) {
  return html(params.content);
};

/**
 * Module Exports
 */
exports = module.exports = page;