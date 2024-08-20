Package.describe({
  name: 'dblk:server-templates',
  version: '0.0.5',
  summary: 'Server side template engine based on blaze 3',
  git: 'https://github.com/felixble/meteor-server-templates',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('3.0.1');
  api.use([
    'blaze@3.0.0',
    'ecmascript',
    'spacebars@2.0.0',
    'random',
    'spacebars-compiler@2.0.0'
  ]);
  api.mainModule('server-templates.js');
});

Package.onTest(function(api) {
  api.use([
    'ecmascript',
    'tinytest',
    'blaze',
    'spacebars',
    'random',
    'spacebars-compiler'
  ]);
  api.use('dblk:server-templates');
  api.mainModule('server-templates-tests.js');
});
