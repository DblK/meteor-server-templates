Package.describe({
  name: 'dblk:server-templates',
  version: '0.0.6',
  summary: 'Server side template engine based on blaze 3',
  git: 'https://github.com/DblK/meteor-server-templates',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('3.0.2');
  api.use([
    'blaze@3.0.1',
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
