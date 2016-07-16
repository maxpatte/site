'use strict';
/*!
 * Page
 */

/**
 * Module Dependencies
 */
var page,
    h = require('virtual-dom/h'),
    VNode = require('virtual-dom/vnode/vnode'),
    VText = require('virtual-dom/vnode/vtext'),
    html = require('html-to-vdom')({
      VNode: VNode,
      VText: VText
    });

page = function (params) {
  return h('div', { className: 'Page' }, [
    html(params.content)
  ]);
};

/**
 * Module Exports
 */
exports = module.exports = page;
