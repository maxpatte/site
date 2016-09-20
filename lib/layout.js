'use strict';
/*!
 * Layout
 */

/**
 * Module Dependencies
 */
var layout,
    description,
    h = require('virtual-dom/h'),
    moment = require('moment'),
    ga;

ga = `
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-83641467-1', 'auto');
  ga('send', 'pageview');
`;

description = function (page) {
  if (page.description) {
    return page.description;
  };
  if (page.title && page.date && page.medium) {
    var forSale = page.sold ? 'Sold' : 'For sale';
    return (
      page.title + '. ' +
      moment(page.date).format('YYYY') + '. ' +
      page.medium + '. ' +
      forSale + '.'
    );
  };
};

layout = function (metadata, content) {
  var wrapped;

  var title = 'Max Patté';

  if (metadata.title) {
    title += ' - ' + metadata.title
  };

  wrapped = h('html', { lang: 'en' }, [
    h('head', [
      h('meta', { charset: 'utf-8' }),
      h('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' }),
      h('title', title),
      h('meta', {  name: 'description', content: description(metadata) }),
      h('meta', {  name: 'viewport', content: 'width=device-width, initial-scale=1' }),
      h('link', { rel: 'stylesheet', href: '/style.css' }),
      h('script', ga)
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
