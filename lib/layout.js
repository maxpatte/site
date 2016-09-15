'use strict';
/*!
 * Layout
 */

/**
 * Module Dependencies
 */
var layout,
    h = require('virtual-dom/h'),
    ga;

ga = `
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-83641467-1', 'auto');
ga('send', 'pageview');
`;

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
      h('script', { src: '/index.js ' }),
      h('script', ga)
    ])
  ]);

  return wrapped;
};

/**
 * Module Exports
 */
exports = module.exports = layout;
