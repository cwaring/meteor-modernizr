Package.describe({
  name: 'cwaring:modernizr',
  summary: 'Modernizr 3.x packaged for Meteor',
  version: '3.0.0-pre',
  git: 'https://github.com/cwaring/meteor-modernizr',
  documentation: 'README.md'
});

Package.on_use(function (api) {
  api.versionsFrom('1.0');
  api.add_files('modernizr-dev.js', 'client');
});