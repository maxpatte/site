'use strict';
/*!
 * Images
 */

/**
 * Module Dependencies
 */
var images;

images = [
  {
    id: '/placeholder-135x135.jpg',
    src: __dirname + '/images/placeholder.jpg',
    scale: {
      height: 135
    },
    crop: {
      width: 135,
      height: 135
    }
  },
  {
    id: '/placeholder-240x135.jpg',
    src: __dirname + '/images/placeholder.jpg',
    scale: { 
      width: 240,
      height: 135
    }
  },
  {
    id: '/placeholder-960x540.jpg',
    src: __dirname + '/images/placeholder.jpg',
    scale: { 
      width: 960,
      height: 540
    }
  },
  {
    id: '/placeholder-720x540.jpg',
    src: __dirname + '/images/placeholder.jpg',
    scale: { 
      width: 960,
      height: 540
    },
    crop: {
      width: 720,
      height: 540
    }
  }
];
/**
 * Module Exports
 */
exports = module.exports = images;