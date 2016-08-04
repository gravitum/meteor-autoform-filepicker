Package.describe({
  name: 'gravitum:autoform-file-picker',
  summary: 'Custom file input type for AutoForm, provides functionality to select uploaded files or upload files',
  version: '1.0.0',
  git: 'https://github.com/gravitum/meteor-autoform-file-picker.git'
});

Package.onUse(function(api) {
  api.use('templating@1.0.0');
  api.use('blaze@2.0.0');
  api.use('aldeed:autoform@4.0.0 || 5.0.0');
  api.addFiles([
    'filepicker.html',
    'filepicker.js',
    'filepicker.css'
  ], 'client');
});
