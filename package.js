Package.describe({
  name: 'meteorspark:app',
  summary: 'Expose an empty APP object, to be used to organize projects',
  version: '0.2.0',
  git: 'https://github.com/MeteorSpark/app'
});

both = ['server', 'client'];
server = 'server';
client = 'client';

Package.onUse(function (api) {
  api.versionsFrom('0.9.4');

  api.add_files('app.js', both);

  api.export('APP', both);
});
