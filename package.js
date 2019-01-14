Package.describe({
  name: 'mozfet:dynaview',
  version: '0.0.6',
  summary: 'Reactively rendered views and MaterializeCSS modals.',
  git: 'https://github.com/mozfet/meteor-dynaview.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.8.0.1');
  api.use([
    'ecmascript',
    'session',
    'ejson',
    'underscore',
    'blaze@2.3.3',
    'blaze-html-templates@1.1.2',
    'templating@1.3.2'
  ], 'client');
  api.mainModule('meteor-dynaview.js', 'client', { lazy: true });
});

// Package.onTest(function(api) {
//   api.use('ecmascript');
//   api.use('tinytest');
//   api.use('meteor-dynaview');
//   api.mainModule('meteor-dynaview-tests.js');
// });
