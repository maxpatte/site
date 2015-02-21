'use strict';
/*!
 * link
 */

/**
 * Module Dependencies
 */
var link,
    h = require('virtual-dom/h');

link = function (params, content) {
  params.className = params.className || '';
  params.className += ' js-internalLink'
  return h('a', params,  content);
};

/**
 * Module Exports
 */
exports = module.exports = link;