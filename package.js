Package.describe({
  name: 'meteorspark:app',
  summary: 'Exposes to the global namespace\'s `APP`, an event emitter based object for project organization',
  version: '0.3.0',
  git: 'https://github.com/MeteorSpark/app'
});

both = ['server', 'client'];
server = 'server';
client = 'client';

Package.onUse(function (api) {
  api.versionsFrom('0.9.4');

  api.use('underscore', both);

  api.use('meteorspark:util@0.2.0', both);
  api.use('raix:eventemitter@0.1.1', both);

  api.add_files('app.js', both);

  api.export('APP', both);
});
