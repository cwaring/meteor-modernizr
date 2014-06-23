Package.describe({
  summary: "Modernizr 3.x for Meteor"
});

Package.on_use(function (api) {
  api.add_files('modernizr-dev.js', 'client');
});