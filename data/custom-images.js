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
    id: '/matterhorn.jpg',
    src: __dirname + '/images/matterhorn.jpg',
    scale: {
      width: 960
    }
  },
  {
    id: '/press/sir-ian-mckellen-thumbnail.jpg',
    src: __dirname + '/images/press/sir-ian-mckellen.jpg',
    scale: { 
      width: 135,
      height: 135
    }
  },
  {
    id: '/press/stephen-fry-thumbnail.jpg',
    src: __dirname + '/images/press/stephen-fry.jpg',
    scale: { 
      width: 135,
      height: 135
    }
  },
  {
    id: '/press/denizen-thumbnail.jpg',
    src: __dirname + '/images/lightworks/a-new-you.jpg',
    scale: {
      height: 135
    },
    crop: {
      width: 135,
      height: 135
    }
  },
  {
    id: '/press/urbis-thumbnail.png',
    src: __dirname + '/images/press/urbis.png',
    quality: 100,
    scale: {
      width: 135,
      height: 135
    }
  },
  {
    id: '/press/seven-sharp-thumbnail.png',
    src: __dirname + '/images/press/seven-sharp.png',
    quality: 100,
    scale: {
      width: 135,
      height: 135
    }
  },
  {
    id: '/press/the-hills-thumbnail.jpg',
    src: __dirname + '/images/press/the-hills.jpg',
    quality: 100,
    scale: {
      width: 135,
      height: 135
    }
  }
];
/**
 * Module Exports
 */
exports = module.exports = images;