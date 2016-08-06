'use strict';
/*!
 * Page
 */

/**
 * Module Dependencies
 */
var press,
    h = require('virtual-dom/h'),
    VNode = require('virtual-dom/vnode/vnode'),
    VText = require('virtual-dom/vnode/vtext'),
    html = require('html-to-vdom')({
      VNode: VNode,
      VText: VText
    });

press = function (params) {
  return h('div', { className: 'Press' }, [
    html(params.content)
  ]);
};

/**
 * Module Exports
 */
exports = module.exports = press;
