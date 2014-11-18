'use strict';
/*!
 * unrequire
 */

/**
 * Module Dependencies
 */
var unrequire;

unrequire = function (id) {

  var module = require.cache[id],
      i;
  if (module) {
    for (i = 0; i < module.children.length; i += 1) {
      unrequire(module.children[i].id);
    };
    delete require.cache[module.id];
  };

};

/**
 * Module Exports
 */
exports = module.exports = unrequire;