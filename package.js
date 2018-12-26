Package.describe({
  name: 'dynaview',
  version: '0.0.1',
  summary: 'Reactively rendered views and MaterializeCSS modals.',
  git: 'https://github.com/mozfet/meteor-dynaview.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.8.0.1');
  api.use([
    'ecmascript',
    'templating',
    'session'
  ], 'client');
  api.addFiles([
    './dynaView/dynaView.html',
    './dynaView/dynaView.js',
    './dynaView/dynaViewLauncher.html',
    './dynaView/dynaViewLauncher.js',
    './dynaView/dynaViewMaterialModal/dynaViewMaterialModal.html',
    './dynaView/dynaViewMaterialModal/dynaViewMaterialModal.js'    
  ], 'client', { lazy: true })
  // api.mainModule('meteor-dynaview.js');
});

// Package.onTest(function(api) {
//   api.use('ecmascript');
//   api.use('tinytest');
//   api.use('meteor-dynaview');
//   api.mainModule('meteor-dynaview-tests.js');
// });
